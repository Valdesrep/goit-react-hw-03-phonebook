import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactFrom from './ContactFrom';
import ContactList from './ContactList';
import ContactFilter from './ConactFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = contactData => {
    const { contacts } = this.state;
    const contact = { id: nanoid(), ...contactData };

    contacts.find(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    )
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };
  onDelteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  onChangeContactFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <>
        <ContactFrom onSubmit={this.onAddContact}></ContactFrom>
        <ContactFilter
          value={this.state.filter}
          onChange={this.onChangeContactFilter}
        />

        <ContactList contacts={filterContacts} onDelete={this.onDelteContact} />
      </>
    );
  }
}
