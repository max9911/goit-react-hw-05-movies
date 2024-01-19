import React from 'react';
import TrendItem from './trenditem';

const TrendingList = ({ trends }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trends && trends.map(el => <TrendItem key={el.id} trend={el} />)}
      </ul>
    </>
  );
};

export default TrendingList;
