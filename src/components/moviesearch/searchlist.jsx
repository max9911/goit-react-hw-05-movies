import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './searchlist.module.css';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'api/fetchs';

const SearchList = () => {
  const [movies, setMovie] = useState('');
  const [searchParams] = useSearchParams();
  const www = searchParams.get('search');
  const [searchWord, setSearchWord] = useState(www);
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [isShow, setIsShow] = useState(1);

  useEffect(() => {
    setPage(1);
    setSearchWord(www);
  }, [www]);

  useEffect(() => {
    const getMovie = async word => {
      try {
        const response = await getSearchMovies(word, page);
        response.total_pages > response.page
          ? setIsShow(true)
          : setIsShow(false);

        setMovie(prev =>
          page > 1 ? [...prev, ...response.results] : response.results
        );
      } catch {}
    };
    getMovie(searchWord);
  }, [page, searchWord]);

  const loadMore = evt => {
    setPage(prev => prev + 1);
  };
  const goUp = evt => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <ul>
        {movies &&
          movies.map(el => (
            <Link
              className={css.noline}
              to={`/movies/${el.id}`}
              state={location}
            >
              <li key={el.id} className={css.searchItem}>
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
      {isShow && (
        <>
          <button key={'loadmore'} className={css.loadmore} onClick={loadMore}>
            LoadMore
          </button>
          <button key={'goUp'} className={css.goUp} onClick={goUp}>
            go UP
          </button>
        </>
      )}
    </>
  );
};

export default SearchList;
