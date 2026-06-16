import Router from 'koa-router';
import * as authCtrl from './auth.ctrl.js';

const auth = new Router();

auth.post('/register', authCtrl.register); //http://localhost:4000/api/auth/register

auth.post('/login', authCtrl.login); // http://localhost:4000/api/auth/login
auth.get('/check', authCtrl.check); // http://localhost:4000/api/auth/check
auth.post('/logout', authCtrl.logout);

export default auth;
