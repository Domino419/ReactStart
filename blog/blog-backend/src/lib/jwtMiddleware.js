import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');

  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };

    //토근 유효기간 확인
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }

    console.log('--- decoded', decoded);
    return next();
  } catch (e) {
    console.log('---token 검증 실패 ');
    return next();
  }
};

export default jwtMiddleware;
