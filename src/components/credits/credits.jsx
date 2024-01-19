import Card from './card';
import css from './credit.module.css';

const Credits = ({ casting }) => {
  return (
    <>
      <ul className={css.container}>
        {casting && casting.map(el => <Card key={el.id} data={el} />)}
      </ul>
    </>
  );
};

export default Credits;
