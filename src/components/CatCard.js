import React from 'react';
import { Link } from 'react-router-dom';

function CatCard({ cat }) {
  return (
    <Link to={`/cats/${cat._id}`}>
      <div className='card'>
        <h4>{cat.name}</h4>
        <img src={cat.url} alt={cat.name} />
      </div>
    </Link>
  );
}

export default CatCard;
