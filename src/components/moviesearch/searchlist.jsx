import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './searchlist.module.css';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'api/fetchs';

const SearchList = () => {
  const [movies, setMovie] = useState('');
  const [searchParams] = useSearchParams();
  const searchWord = searchParams.get('search');
  const location = useLocation();

  useEffect(
    word => {
      const getMovie = async word => {
        try {
          const response = await getSearchMovies(word);

          setMovie(response.results);
        } catch {}
      };
      getMovie(searchWord);
    },
    [searchWord]
  );

  return (
    <>
      <ul>
        {movies &&
          movies.map(el => (
            <Link
              key={el.id}
              className={css.noline}
              to={`/movies/${el.id}`}
              state={location}
            >
              <li className={css.searchItem}>
                <img
                  src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                  alt="poster"
                  className={css.img}
                ></img>
                <h3>{el.title}</h3>
                <p>release : {el.release_date}</p>
                <p>Movie owerview: {el.overview}</p>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default SearchList;
