import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, unsetUserAuth } from 'slice/authSlice';
import { contactsApi } from 'slice/contactsSlice';
import { clearFilter } from 'slice/filterSlice';
import { useLogoutMutation } from 'slice/userSlice';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const [logOut] = useLogoutMutation();
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);

  const onLogOutClick = async () => {
    await logOut();
    dispatch(unsetUserAuth());
    dispatch(contactsApi.util.resetApiState());
    dispatch(clearFilter());
    return;
  };

  return (
    <div className={css.userMenu__wrap}>
      <div className={css.userName__wrap}>
        <div className={css.user__icon}>Icon</div>
        <p className={css.userMenu__text}> Hello, {user.name}!</p>
      </div>
      <button type="button" onClick={onLogOutClick} className={css.logOut__btn}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
