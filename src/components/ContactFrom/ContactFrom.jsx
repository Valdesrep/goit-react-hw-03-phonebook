import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './ContactFrom.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };
  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.onFormSubmit}>
        <h2>Phonebook</h2>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onInputChange}
          />
        </label>
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
export default ContactForm;
