import Router from 'koa-router';
import * as authCtrl from './auth.ctrl.js';

const auth = new Router();

auth.post('/register', authCtrl.register); //http://localhost:4000/api/auth/register

auth.post('/login', authCtrl.login);
auth.post('/check', authCtrl.check);
auth.post('/logout', authCtrl.logout);

export default auth;
