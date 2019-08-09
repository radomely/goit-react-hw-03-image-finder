import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ cards }) => (
  <ul className={styles.gallery}>
    {cards.map(card => (
      <PhotoCard key={card.id} {...card} />
    ))}
  </ul>
);
Gallery.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Gallery;
