import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = { inputQuery: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { inputQuery } = this.state;
    e.preventDefault();
    onSubmit({ inputQuery });
  };

  render() {
    const { inputQuery } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleOnChange}
          value={inputQuery}
          name="inputQuery"
        />
      </form>
    );
  }
}
