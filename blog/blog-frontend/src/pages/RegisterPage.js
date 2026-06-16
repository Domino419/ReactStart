import AuthTemplate from '../components/common/auth/AuthTemplate';
import AuthForm from '../components/common/auth/AuthForm';

const RegisterPage = () => {
  console.log('회원가입');
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
