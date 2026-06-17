import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () => {
  console.log('회원가입');
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
