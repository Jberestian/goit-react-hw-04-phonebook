import PropTypes from 'prop-types';

import s from './contactBook.module.css';

const ContactBook = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name}: {number}
      <button
        onClick={() => removeContact(id)}
        type="button"
        className={s.button}
      >
        remove
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default ContactBook;

ContactBook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
