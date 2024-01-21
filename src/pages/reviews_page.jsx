import { getReviewMovInfo } from 'api/fetchs';
import ReviewsComponent from 'components/review/review';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  const getMovie = async movieId => {
    try {
      const response = await getReviewMovInfo(movieId);

      setMovie(response.results);
    } catch {}
  };
  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  return (
    <>
      <ReviewsComponent movie={movie} />
    </>
  );
};

export default Reviews;
