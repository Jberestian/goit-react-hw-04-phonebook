import PropTypes from 'prop-types';
import { Component } from 'react';

class Form extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor="number">Number</label>
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
  }
}

export default Form;
