import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', number: '' });

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ ...state });
    setState({ name: '', number: '' });
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const { name, number } = state;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={name}>Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={number}>Number</label>
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
