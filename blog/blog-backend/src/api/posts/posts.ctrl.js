import Post from '../../models/post.js';

export const write = async (ctx) => {
  console.log('write:::::::::::::::::::::');
  const { title, body, tags } = ctx.request.body;
  console.log(ctx.request.body);
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    console.log('write _ error 발생 !! ');
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  console.log('list:::::::::::::::::::::');
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
    console.log(posts);
  } catch (e) {
    console.log('list _ error 발생 !! ');
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  console.log('read:::::::::::::::::::::');
  const { id } = ctx.params;
  console.log(ctx.params);
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      console.log('read:::::::::일치하는 ID가 없습니다.');
      return;
    }
    ctx.body = post;
  } catch (e) {
    console.log('read _ error 발생 !! ');
    ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  console.log('remove:::::::::::::::::::::');
  const { id } = ctx.params;
  console.log(ctx.params);
  try {
    //    await Post.findByIdAndRemove(id).exec();
    await Post.findByIdAndDelete(id).exec();
    ctx.status = 204;
    console.log('remove 완료');
  } catch (e) {
    console.log('remove_error 발생 !! ');
    ctx.throw(500, e);
  }
};

export const update = async (ctx) => {
  console.log('update:::::::::::::::::::::');
  const { id } = ctx.params;
  console.log(ctx.params);
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, //  true : 업데이트된 값을 반환, false : 업데이트 되기 전 데이터 반환
    }).exec();
    if (!post) {
      console.log('Post가 일치하지 않습니다. ');
      ctx.status = 404;
      return;
    }
    ctx.body = post;
    console.log('update 완료');
  } catch (e) {
    if (e.name === 'CastError') {
      ctx.status = 400; // 잘못된 ObjectId
      return;
    }
    console.log('update_error 발생 !! ');
    ctx.throw(500, e);
  }
};
