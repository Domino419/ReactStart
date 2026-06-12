// 21.5.4 라우트 모듈화

const Router = require('koa-router');
const api = new Router();

api.get('/test', (ctx) => {
  ctx.body = 'test 성공 ';
});

module.exports = api;
