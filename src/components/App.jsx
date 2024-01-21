import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/home'));
const LayoutHome = lazy(() => import('./layot/layot'));
const MovieDetails = lazy(() => import('../pages/moviedetails_page'));
const Cast = lazy(() => import('../pages/cast_page'));
const Reviews = lazy(() => import('../pages/reviews_page'));
const MoviesSearchPage = lazy(() => import('../pages/movies_page'));

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
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearchPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>{' '}
    </Suspense>
  );
};
