import css from './movie.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Movie = ({
  movie: { title, original_title, overview, genres, poster_path, id },
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  let genrArr = [];
  genres && genres.map(el => (genrArr = [...genrArr, el.name]));
  const allGenres = genrArr.toString();

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  const handleClick = () => {
    navigate(location.state);
  };

  return (
    <>
      <button className={css.btn} type="button" onClick={handleClick}>
        Back
      </button>

      <div className={css.container}>
        <img src={imgUrl} alt="poster" className={css.img}></img>
        <div className={css.info_container}>
          <h1>
            {title}
            <span className={css.span}>({original_title})</span>
          </h1>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{allGenres} </p>
        </div>
      </div>

      <div className={css.add_info}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`} state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`} state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Movie;
