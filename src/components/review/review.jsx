import css from './review.module.css';
import React from 'react';

const ReviewsComponent = ({ movie }) => {
  return (
    <>
      {movie.length > 0 ? (
        movie.map(el => (
          <div className={css.container} key={el.id}>
            <h2>Author: {el.author}</h2>
            <p>{el.content}</p>
          </div>
        ))
      ) : (
        <div className={css.container}>
          <h3>There are no reviews yet</h3>
        </div>
      )}
    </>
  );
};
export default ReviewsComponent;
