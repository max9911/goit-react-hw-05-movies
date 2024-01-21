import { api } from './api';

export const getTrending = async () => {
  const { data } = await api(
    '/trending/movie/day?api_key=6333a8a701072b16a61a39d74f06cc56&language=uk-UA'
  );
  return data;
};

export const getSearchMovies = async query => {
  try {
    const { data } = await api(
      `/search/movie?api_key=6333a8a701072b16a61a39d74f06cc56&query=${query}&include_adult=false&language=en-US&page=1`
    );
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getFullMovInfo = async movieId => {
  const { data } = await api(
    `/movie/${movieId}?api_key=6333a8a701072b16a61a39d74f06cc56&language=uk-UA`
  );
  return data;
};

export const getCredMovInfo = async movieId => {
  const { data } = await api(
    `/movie/${movieId}/credits?api_key=6333a8a701072b16a61a39d74f06cc56&language=uk-UA`
  );
  return data;
};

export const getReviewMovInfo = async movieId => {
  const { data } = await api(
    `/movie/${movieId}/reviews?api_key=6333a8a701072b16a61a39d74f06cc56&language=en-US&page=1`
  );
  return data;
};
