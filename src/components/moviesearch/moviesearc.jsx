import React, {useEffect, useState } from 'react';
import css from './moviesearc.module.css';

import { useSearchParams } from 'react-router-dom';
import SearchList from './searchlist';

const MovieSearch = () => {
  const [search, setSearch] = useSearchParams('');

  const [input, setInput] = useState('');

  const inputChange = ({ target }) => {
    setInput(target.value);
  };
  const inputSubmit = evt => {
    evt.preventDefault();
    setSearch({ search: input });
  };
  useEffect(() => {
    const oldSearch = search.get('search');
    oldSearch && setInput(oldSearch);
  }, [search]);

  return (
    <>
      <form className={css.form} onSubmit={inputSubmit}>
        <input
          name="search"
          type="text"
          className={css.input}
          id="movieSearch"
          value={input}
          onChange={inputChange}
        ></input>
        <button type="submit" key={222} className="btn">
          Search
        </button>
      </form>

      {search.size > 0 && <SearchList />}
    </>
  );
};

export default MovieSearch;
