import AuthTemplate from '../components/auth/AuthTemplate';
//import AuthForm from '../components/auth/AuthForm';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  console.log('회원가입');
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
