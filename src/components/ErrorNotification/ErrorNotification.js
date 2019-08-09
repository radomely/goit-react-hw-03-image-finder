import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ text }) => (
  <h1 className={styles.errorNotification}>Warning: {text}</h1>
);
ErrorNotification.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ErrorNotification;
