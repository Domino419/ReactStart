import Post from '../../models/post.js';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

//  ObjectId 유효성 검사
/*
export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  console.log('checkObjectId:::::::::::::::::::::');

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    console.log('유효하지 않은 ObjectId 입니다.');
    return;
  }
  console.log('유효한 ObjectId 를 확인 했습니다.');
  return next();
};
*/

//  ObjectId 유효성 검사
export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  console.log('getPostById  동작 확인 ', { id });

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    console.log('getPostById  동작 확인 1');
    return;
  }
  try {
    const post = await Post.findById(id);
    console.log('getPostById  동작 확인 2');
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.state.post = post;
    console.log('getPostById  동작 확인 3');
    return next();
  } catch (error) {
    ctx.throw(500, error);
  }
};

//  게시글 작성
export const write = async (ctx) => {
  console.log('write:::::::::::::::::::::');

  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    console.log(' JOi 검증 실패 !');
    ctx.status = 400;
    ctx.body = result.error.details[0].message;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
    user: ctx.state.user,
  });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    console.log('write _ error 발생 !!');
    ctx.throw(500, e);
  }
};

// 게시글 목록 조회 (페이징 포함)
export const list = async (ctx) => {
  console.log('list:::::::::::::::::::::');

  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  // 필터링 기능 추가
  const { tag, username } = ctx.query;
  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-page', Math.ceil(postCount / 10));

    ctx.body = posts
      .map((post) => post.toJSON())
      .map((post) => ({
        ...post,
        body:
          post.body.length < 10 ? post.body : `${post.body.slice(0, 10)}...`,
      }));
  } catch (e) {
    console.log('list _ error 발생 !!');
    ctx.throw(500, e);
  }
};

//  특정 게시글 조회
export const read = (ctx) => {
  ctx.body = ctx.state.post;
};

/*
export const read = async (ctx) => {
  const { id } = ctx.params;
  console.log('read:::::::::::::::::::::', ctx.params);

  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      console.log('read:::::::::일치하는 ID가 없습니다.');
      return;
    }
    ctx.body = post;
  } catch (e) {
    console.log('read _ error 발생 !!');
    ctx.throw(500, e);
  }
};
*/

//  게시글 삭제
export const remove = async (ctx) => {
  const { id } = ctx.params;
  console.log('remove:::::::::::::::::::::', ctx.params);

  try {
    await Post.findByIdAndDelete(id).exec();
    ctx.status = 204;
    console.log('remove 완료');
  } catch (e) {
    console.log('remove_error 발생 !!');
    ctx.throw(500, e);
  }
};

//  게시글 수정
export const update = async (ctx) => {
  const { id } = ctx.params;
  console.log('update:::::::::::::::::::::', ctx.params);

  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    console.log(' update 검증 실패 - ');
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();

    if (!post) {
      ctx.status = 404;
      console.log('Post가 일치하지 않습니다.');
      return;
    }

    ctx.body = post;
    console.log('update 완료');
  } catch (e) {
    if (e.name === 'CastError') {
      ctx.status = 400;
      return;
    }
    console.log('update_error 발생 !!');
    ctx.throw(500, e);
  }
};

// checkOwnPost
export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};
