import axios from 'axios';

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
console.log(REACT_APP_API_KEY, REACT_APP_BASE_URL);
export const getMovies = async ({ title, page }) => {
  const response = await axios.get(
    `${REACT_APP_BASE_URL}?apikey=${REACT_APP_API_KEY}&s=${title}&page=${page}`
  );
  return response.data;
};

export const getMovie = async (id) => {
  const response = await axios.get(
    `${REACT_APP_BASE_URL}?apikey=${REACT_APP_API_KEY}&i=${id}&plot=full`
  );
  return response.data;
};
