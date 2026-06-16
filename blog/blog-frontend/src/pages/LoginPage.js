import AuthTemplate from '../components/common/auth/AuthTemplate';
import AuthForm from '../components/common/auth/AuthForm';

const LoginPage = () => {
  console.log('로그인');
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default LoginPage;
