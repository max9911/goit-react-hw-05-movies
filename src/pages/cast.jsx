import { getCredMovInfo } from 'api/fetchs';
import Credits from 'components/credits/credits';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();

  const getData = async id => {
    try {
      const resp = await getCredMovInfo(id);
      setData(resp.cast);
    } catch (error) {}
  };
  useEffect(() => {
    getData(movieId);
  }, [movieId]);

  return (
    <>
      <Credits casting={data} />
    </>
  );
};

export default Cast;
