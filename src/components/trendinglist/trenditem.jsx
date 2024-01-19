import React from 'react';
import { Link } from 'react-router-dom';
import css from './trenditem.module.css';

const TrendItem = ({ trend }) => {
  return (
    <>
      <li className={css.links}>
        <Link className={css.noline} to={`/movies/${trend.id}`}>
          {trend.title}{' '}
          <span className={css.span}>({trend.original_title})</span>
        </Link>
      </li>
    </>
  );
};

export default TrendItem;
