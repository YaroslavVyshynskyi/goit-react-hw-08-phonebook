import { useSelector } from 'react-redux';
import UserMenu from './components/UserMenu/UserMenu.js';
import AuthNav from './components/AuthNav/AuthNav';
import { authSelectors } from 'slice/authSlice';

const styles = { position: 'fixed', width: '100%', zIndex: '100' };

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header style={styles}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</header>
  );
};

export default AppBar;
