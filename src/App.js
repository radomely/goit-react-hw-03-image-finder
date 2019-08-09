import React, { Component, createRef } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import Gallery from './components/Gallery/Gallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import Loader from './components/Loader/Loader';
import * as imageAPI from './services/api';
import { mapper } from './services/helper';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    inputQuery: '',
    isLoading: false,
    error: null,
  };

  appRef = createRef();

  componentDidMount() {
    const { inputQuery } = this.state;
    this.fetchItems(inputQuery);
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputQuery: prevInputQuery, page: prevPage } = prevState;
    const { page: nextPage, inputQuery } = this.state;

    if (prevInputQuery !== inputQuery || prevPage !== nextPage) {
      this.fetchItems(inputQuery);
    }
  }

  reset = () => {
    this.setState({
      images: [],
      page: 1,
      inputQuery: '',
      isLoading: false,
      error: null,
    });
  };

  fetchItems = inputQuery => {
    const { page } = this.state;
    const appRef = this.appRef.current;
    this.setState({ isLoading: true });
    imageAPI
      .fetchData(inputQuery, page)
      .then(({ data }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...mapper(data.hits)],
        }));
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          left: 0,
          top: appRef.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = ({ inputQuery }) => {
    this.reset();
    this.setState({ inputQuery });
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div ref={this.appRef} className={styles.app}>
        <SearchForm onSubmit={this.handleFormSubmit} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {images.length > 0 ? (
          <Gallery cards={images} />
        ) : (
          <h1>
            Not found any matches with words that you typed. Please, try again
            with using other words.
          </h1>
        )}
        {images.length % 12 === 0 && (
          <LoadMoreBtn loadMore={this.handleLoadMore} />
        )}
      </div>
    );
  }
}
