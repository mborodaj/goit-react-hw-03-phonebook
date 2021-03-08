import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact, filter }) => {
  return (
    <>
      <ul className={styles.contactList}>
        {contacts
          .filter(contactItem =>
            contactItem.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(({ id, name, number }) => (
            <li key={id} className={styles.contactListItem}>
              <p className={styles.contactData}>
                {name}: {number}
              </p>
              <button
                onClick={() => removeContact(id)}
                className={styles.removeButton}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
