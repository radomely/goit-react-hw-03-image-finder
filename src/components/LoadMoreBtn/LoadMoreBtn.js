import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => (
  <button type="button" className={styles.button} onClick={loadMore}>
    Load more
  </button>
);
LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
