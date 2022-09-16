import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePage__container}>
      <ul className={css.omePage__list}>
        <li className={css.homePage__item}>
          <div className={css.homePageItem__image}>
            <image
              src="../../../public/new-user-icon-png-2.png"
              alt="create contact"
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
            <image
              src="../../../public/new-user-icon-png-2.png"
              alt="create contact"
              width="150px"
              height="150px"
            />
          </div>
        </li>
        <li className={css.homePage__item}>
          <div className={css.homePageItem__image}>
            <image
              src="../../../public/new-user-icon-png-2.png"
              alt="create contact"
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
