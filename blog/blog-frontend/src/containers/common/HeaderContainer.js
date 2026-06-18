import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(
    ({ user }) => ({ user: user.user }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  console.log('--- 현재 헤더의 user 상태: ---', user);
  return (
    <div>
      <Header user={user} onLogout={onLogout}></Header>
    </div>
  );
};

export default HeaderContainer;
