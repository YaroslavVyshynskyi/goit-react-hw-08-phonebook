import MoonLoader from 'react-spinners/MoonLoader';
import PropTypes from 'prop-types';
import { FcEmptyTrash } from 'react-icons/fc';
import { ContactIcon } from '../index';
import { useDeleteContactMutation } from 'slice/contactsSlice';

import css from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const { name, number, id, color } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <div className={css.contactItem__wrap}>
      <span className={css.item__icon}>
        <ContactIcon name={name} isRandomColor={!color} selectedColor={color} />
      </span>
      <div className={css.contact__info}>
        <span className={css.item__name}>{name}:</span>
        <span className={css.item__number}>{number}</span>
      </div>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.contactDelete__btn}
      >
        <FcEmptyTrash className={css.contactDeleteBtn__icon} />
        {isLoading && <MoonLoader size={8} />}
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
};

export default ContactItem;
