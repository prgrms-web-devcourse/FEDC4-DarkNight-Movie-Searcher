import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MovieDetailsContext = createContext({
  state: {
    details: {},
  },
  actions: {
    setDetails: () => {},
  },
});

const MovieDetailsProvider = ({ children }) => {
  const [details, setDetails] = useState({});

  const value = {
    state: { details },
    actions: { setDetails },
  };
  return (
    <MovieDetailsContext.Provider value={value}>
      {children}
    </MovieDetailsContext.Provider>
  );
};

MovieDetailsProvider.propTypes = {
  children: PropTypes.element,
};
export { MovieDetailsProvider };
export default MovieDetailsContext;
