import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DotLoader } from 'react-spinners';
import { setUserAuth } from 'slice/authSlice';
import { useLoginMutation } from 'slice/userSlice';

import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const handleEmailChange = event => {
    setMail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await login({ email, password });
    if (result.data) {
      const { token, user } = result.data;
      dispatch(
        setUserAuth({
          token,
          user,
        })
      );
    }
    setMail('');
    setPassword('');
  };

  return (
    <div className={css.loginPage__container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h1 className={css.login__title}>LOGIN</h1>
        <label className={css.loginForm__label}>
          <p className={css.form__text}>Email</p>
          <input
            type="email"
            name="email"
            placeholder="email@mail.com"
            value={email}
            onChange={handleEmailChange}
            className={css.login__input}
            required
          />
        </label>

        <label className={css.loginForm__label}>
          <p className={css.form__text}>Password</p>
          <input
            type="password"
            name="password"
            placeholder="qwer123"
            value={password}
            onChange={handlePasswordChange}
            className={css.login__input}
            required
          />
        </label>

        <button type="submit" className={css.login__btn}>
          {isLoginLoading ? <DotLoader size={20} color="white" /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
