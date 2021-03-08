import baseCss from './base.module.css';

import React, { Component } from 'react';
import ContactForm from './Components/ContactFrom/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  checkContactName = name => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  addContact = newContact => {
    const { contacts } = this.state;

    if (this.checkContactName(newContact.name)) {
      alert('Such contact already exist');
      return;
    } else {
      const newContactData = contacts.concat(newContact);
      this.setState(prevState => {
        return { ...prevState, contacts: newContactData };
      });
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterByName = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);
      this.setState({ contacts: parsedContacts });
    } else {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter
          filterHandler={this.filterByName}
          inputValue={this.state.filter}
        />

        <ContactList
          contacts={this.state.contacts}
          removeContact={this.deleteContact}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
