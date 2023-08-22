import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Movies() {
  const navigate = useNavigate();
  const DUMMY_DATA = [
    { id: 1, name: '영화1' },
    { id: 2, name: '영화1' },
    { id: 3, name: '영화1' },
    { id: 4, name: '영화1' },
    { id: 5, name: '영화1' },
    { id: 6, name: '영화1' },
  ];

  const navigation = (movieID) => {
    navigate(`/movies/${movieID}`);
  };
  return (
    <div>
      {DUMMY_DATA.map(({ id, name }) => (
        <li
          key={id}
          onClick={() => {
            navigation(id);
          }}
        >
          <h2>영화 {name}</h2>
        </li>
      ))}
    </div>
  );
}
