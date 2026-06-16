import Joi from 'joi';
import User from '../../models/user.js';

//회원 가입
export const register = async (ctx) => {
  console.log('회원가입--------------------');

  // Request Body 검증
  const schema = Joi.object().keys({
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
  } catch (e) {
    ctx.throw(500, e);
  }
};

// 로그인
export const login = async (ctx) => {
  console.log('로그인--------------------');
};

// 로그인 상태
export const check = async (ctx) => {
  console.log('로그인여부 체크--------------------');
};

//로그아웃
export const logout = async (ctx) => {
  console.log('로그아웃--------------------');
};
