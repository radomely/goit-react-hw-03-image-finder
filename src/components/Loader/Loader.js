import React from 'react';
import Spinner from 'react-spinkit';
import styles from './Loader.module.css';

const Loader = () => (
  <Spinner
    name="ball-spin-fade-loader"
    color="blue"
    className={styles.loader}
  />
);
export default Loader;
