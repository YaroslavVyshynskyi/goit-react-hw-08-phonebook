import css from './HomePage.module.css';
import { addContact, deleteContact, filterContacts } from 'images';

const HomePage = () => {
  return (
    <div className={css.homePage__container}>
      <ul className={css.omePage__list}>
        <li className={css.homePage__item}>
          <div className={css.homePageItem__image}>
            <img
              src={addContact}
              alt="create contact"
              className={css.homePage__img}
            />
          </div>
          <div className={css.homePageItem__info}>
            <h2 className={css.homePage__title}>Create contacts</h2>
            <p className={css.homePage__text}>
              Сreate contacts and add them to the Phonebook
            </p>
          </div>
        </li>
        <li className={css.homePage__item}>
          <div className={css.homePageItem__info}>
            <h2 className={css.homePage__title}>Filter contact</h2>
            <p className={css.homePage__text}>
              Filter contacts by name for quick search
            </p>
          </div>
          <div className={css.homePageItem__image}>
            <img
              src={deleteContact}
              alt="filter contact"
              className={css.homePage__img}
            />
          </div>
        </li>
        <li className={css.homePage__item}>
          <div className={css.homePageItem__image}>
            <img
              src={filterContacts}
              alt="delete contact"
              className={css.homePage__img}
            />
          </div>
          <div className={css.homePageItem__info}>
            <h2 className={css.homePage__title}>Delete contacts</h2>
            <p className={css.homePage__text}>
              Delete contacts and create a Phonebook as you want
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
