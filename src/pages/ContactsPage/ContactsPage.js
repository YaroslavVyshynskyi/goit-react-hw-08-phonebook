import { ContactForm, ContactList, Filter } from './components';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.contactsPage__container}>
      <div className={css.contactsPage__head}>
        <h1 className={css.contactsPage__title}>PHONEBOOK</h1>
        <Filter />
      </div>
      <div className={css.contactsPage__body}>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
};

export { ContactsPage };
