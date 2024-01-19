import React from 'react';
import css from './card.module.css';

const Card = ({ data }) => {
  const imgUrl = `https://image.tmdb.org/t/p/original${data.profile_path}`;

  return (
    <>
      <li className={css.container}>
        <img src={imgUrl} alt="No photo" className={css.img}></img>
        <h3>{data.original_name}</h3>
        <p>Character: {data.character}</p>
      </li>
    </>
  );
};

export default Card;
