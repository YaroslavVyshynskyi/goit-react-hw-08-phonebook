import { ContactForm, ContactList, Filter } from './components';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.contactsPage__container}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export { ContactsPage };
