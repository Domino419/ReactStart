const Koa = require('koa');
const Router = require('koa-router');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우트 적용

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// 4000번 포트로 서버를 실행
app.listen(4000, () => {
  console.log(' Listening to port 4000 :::::::::::: ');
});

//http://localhost:4000/?authorized=2
//http://localhost:4000/?
