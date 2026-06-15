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

export const list = (ctx) => {
  console.log('list:::::::::::::::::::::');
};

export const read = (ctx) => {
  console.log('read:::::::::::::::::::::');
};

export const remove = (ctx) => {
  console.log('remove:::::::::::::::::::::');
};

export const update = (ctx) => {
  console.log('update:::::::::::::::::::::');
};
