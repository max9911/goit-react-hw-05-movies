import { getTrending } from 'api/fetchs';
import TrendingList from 'components/trendinglist/trendinglist';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [trendinglist, setTrendinglist] = useState(null);

  const getTrendingList = async () => {
    try {
      const response = await getTrending();
      setTrendinglist(response.results);
    } catch {}
  };
  useEffect(() => {
    getTrendingList();
  }, []);

  return <>{trendinglist && <TrendingList trends={trendinglist} />}</>;
};

export default Home;
