import { getFullMovInfo } from 'api/fetchs';
import Movie from 'components/movie/movie';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  const getMovie = async movieId => {
    try {
      const response = await getFullMovInfo(movieId);

      setMovie(response);
    } catch {}
  };

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  return (
    <>
      <Movie movie={movie} />
      <Outlet />
    </>
  );
};

export default MovieDetails;
