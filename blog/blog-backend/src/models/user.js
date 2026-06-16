import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// 인스턴트 메서드 작성할 때는 화살표 함수 사용 불가, function 키워드 사용 해야함
// 함수 내부에서 this에 접근해야 하지 때문에 화살표 사용 안됨.

// 패스워드 설정 인스턴트 메서드
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  console.log('password 설정 완료 ', hash);
  this.hashedPassword = hash;
};

// 패스워드 확인 인스턴트 메서드
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  console.log('password 검증 결과 ', result);
  return result;
};

// 사용자 찾기 스태틱 메서드
UserSchema.statics.findByUsername = function (username) {
  console.log('사용자 찾기  ', username);
  return this.findOne({ username });
};

// serialize 인스턴트 메서드
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

const User = mongoose.model('User', UserSchema);
export default User;
