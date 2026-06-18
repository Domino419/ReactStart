import { useSelector, shallowEqual } from 'react-redux';
import Header from '../../components/common/Header';

const HeaderContainer = () => {
  const { user } = useSelector(
    ({ user }) => ({
      user: user.user,
    }),
    shallowEqual,
  );
  console.log('--- 현재 헤더의 user 상태: ---', user);
  return (
    <div>
      <Header user={user}></Header>
    </div>
  );
};

export default HeaderContainer;
