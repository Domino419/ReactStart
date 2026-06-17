import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();

  /*  에러처리 
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));   */

  const { form } = useSelector(
    ({ auth }) => ({
      form: auth.login,
    }),
    shallowEqual, // 👈 여기에 쉼표(,) 찍고 쏙 넣어주세요!
  );

  // 인풋 변경 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    // 구현 전
  };

  // 컴포넌트가 처음 랜더링 될 때 form 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
