import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filterHandler, inputValue }) => {
  return (
    <div className={styles.filterContainer}>
      <label className={styles.formLabel}>
        Contact search
        <input
          type="text"
          name="filter"
          value={inputValue}
          onChange={filterHandler}
          className={styles.inputForm}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Filter;
