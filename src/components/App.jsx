import LayoutHome from './layot/layot';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import MoviesSearch from 'pages/movies';
import MovieDetails from 'pages/moviedetails';
import Cast from 'pages/cast';
import Reviews from 'pages/reviews';

export const App = () => {
  // const clickApi = () => {
  //
  //   getSearchMovies();
  //   getCredMovInfo();
  //   getFullMovInfo();
  //   getReviewMovInfo();
  // };
  // document.addEventListener('click', clickApi);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
