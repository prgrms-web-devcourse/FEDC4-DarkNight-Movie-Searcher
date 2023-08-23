import styled from '@emotion/styled';

const SearchBarForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
  font-size: 26px;
  color: #ffd26b;
  border-radius: 30px;
  background-color: #222;

  &:focus-within {
    border: 1px solid #333;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

export default SearchBarForm;
