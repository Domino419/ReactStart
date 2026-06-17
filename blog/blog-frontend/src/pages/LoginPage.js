import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = () => {
  console.log('로그인');
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default LoginPage;
