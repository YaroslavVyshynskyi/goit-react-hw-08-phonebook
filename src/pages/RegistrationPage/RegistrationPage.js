import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DotLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { setUserAuth } from 'slice/authSlice';
import { useRegisterMutation } from 'slice/userSlice';

import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [userRegister, { isLoading: isRegisterLoading }] =
    useRegisterMutation();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setMail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.warning('All fields are required');
      return false;
    }
    if (password !== confirmPassword) {
      toast.warning('Password don`t match');
      return false;
    }
    return true;
  };

  const onFormSubmit = async event => {
    event.preventDefault();
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }
    const result = await userRegister({ name, email, password }).unwrap();
    const { user, token } = result || {};
    console.log(result);
    dispatch(setUserAuth({ user, token }));
  };

  return (
    <div className={css.regPage__container}>
      <form onSubmit={onFormSubmit} className={css.form}>
        <h1 className={css.regPage__title}>REGISTRATION</h1>
        <label className={css.regForm__lable}>
          <p className={css.regForm__text}>Name</p>
          <input
            type="name"
            name="name"
            placeholder="Jonny"
            value={name}
            onChange={handleNameChange}
            required
            className={css.regForm__input}
          />
        </label>
        <label className={css.regForm__lable}>
          <p className={css.regForm__text}>Email</p>
          <input
            type="email"
            name="email"
            placeholder="email@mail.com"
            value={email}
            onChange={handleEmailChange}
            required
            className={css.regForm__input}
          />
        </label>
        <label className={css.regForm__lable}>
          <p className={css.regForm__text}>Password</p>
          <input
            type="password"
            name="password"
            placeholder="qwer123"
            value={password}
            onChange={handlePasswordChange}
            required
            className={css.regForm__input}
          />
        </label>
        <label className={css.regForm__lable}>
          <p className={css.regForm__text}>Confirm password</p>
          <input
            type="password"
            name="password"
            placeholder="qwer123"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            className={css.regForm__input}
          />
        </label>
        <button type="submit" className={css.regForm__btn}>
          {isRegisterLoading ? <DotLoader size={20} color="white" /> : 'Submit'}
        </button>
      </form>
      <div className={css.registratin__link}>
        <span></span>
      </div>
    </div>
  );
};

export { RegistrationPage };
