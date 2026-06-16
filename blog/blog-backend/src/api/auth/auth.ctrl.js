import Joi from 'joi';
import User from '../../models/user.js';

//회원 가입
export const register = async (ctx) => {
  console.log('회원가입--------------------');

  // Request Body 검증
  const schema = Joi.object().keys({
    // cspell:disable-next-line
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    console.log('회원가입 검증 실패', result.error);
    return;
  }

  const { username, password } = ctx.request.body;

  try {
    // username 중복 체크
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // conflict
      console.log('회원가입 username 중복 ', username);
      return;
    }

    const user = new User({
      username,
    });

    await user.setPassword(password); // 비번 설정
    await user.save(); //db 저장
    ctx.body = user.serialize();

    // token 발급
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 100 * 60 * 60 * 24 * 7, // 7dlf
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 로그인
export const login = async (ctx) => {
  console.log('로그인--------------------');

  const { username, password } = ctx.request.body;

  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    console.log('로그인 Unauthorized --------------------');
    return;
  }

  try {
    const user = await User.findByUsername(username);
    if (!user) {
      ctx.status = 401;
      return;
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, //7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 로그인 상태
export const check = async (ctx) => {
  console.log('로그인여부 체크--------------------');

  const { user } = ctx.state;
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = user;
};

//로그아웃
export const logout = async (ctx) => {
  console.log('로그아웃--------------------');
  ctx.cookies.set('access_token');
  ctx.status = 204;
};
