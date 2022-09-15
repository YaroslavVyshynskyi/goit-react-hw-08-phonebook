import { getRandomColor } from 'utiles';
import PropTypes from 'prop-types';

import css from './ContactIcon.module.css';

const ContactIcon = ({ name, isRandomColor, selectedColor = 'blue' }) => {
  const firstLetterOfName = name.slice(0, 1).toUpperCase();

  return (
    <div
      style={{
        backgroundColor: isRandomColor ? getRandomColor() : selectedColor,
      }}
      className={css.contact__icon}
    >
      {firstLetterOfName}
    </div>
  );
};

ContactIcon.propTypes = {
  name: PropTypes.string.isRequired,
  isRandomColor: PropTypes.bool,
  selectedColor: PropTypes.string,
};

export default ContactIcon;
