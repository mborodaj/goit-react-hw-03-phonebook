import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  getContactData = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const contactId = shortid.generate();
    const newContact = { id: contactId, name, number };

    console.log(newContact.name);

    this.props.onSubmit(newContact);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.formContainer}>
          <label className={styles.formLabel}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.getContactData}
              className={styles.inputForm}
            ></input>
          </label>
          <label className={styles.formLabel}>
            Phone number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.getContactData}
              className={styles.inputForm}
            ></input>
          </label>
          <button className={styles.formBtn}>Add to contact list</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
