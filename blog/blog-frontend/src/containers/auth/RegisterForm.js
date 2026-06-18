import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(
    ({ auth, user }) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
    }),
    shallowEqual,
  );

  const navigate = useNavigate();

  // 인풋 변경 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;

    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    if (password !== passwordConfirm) {
      // prettier-ignore
      console.log('패스워드 불일치 입력값 :', passwordConfirm,'정상값 :',password,);
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    dispatch(register({ username, password }));
  };

  // 컴포넌트가 처음 랜더링 될 때 form 초기화
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원 가입 실패 처리
  useEffect(() => {
    if (authError) {
      console.log('회원 가입 오류 발생');

      if (authError.response.status === 409) {
        setError('이미 존재하는 계정입니다.');
        console.log('중복 계정 ');
        return;
      }
      // 기타 이유
      setError('회원 가입 실패 ');
      return;
    }
    if (auth) {
      console.log('회원 가입 성공 ');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값 설정 체크
  useEffect(() => {
    if (user) {
      // eslint ignore
      console.log('check API 성공 ', user);
      navigate('/'); // 홈 화면으로 이동
    }
  }, [navigate, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterForm;
