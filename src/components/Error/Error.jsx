import PropTypes from 'prop-types';
import { ErrorStyled } from './Error.styled';

export const Error = ({ error }) => {
  return <ErrorStyled>{error} on Server. Sorry... </ErrorStyled>;
};

export const Error404 = () => {
  return <ErrorStyled>Error code 404 Sorry, Page NOT FOUND !!!</ErrorStyled>;
};

Error.propTypes = {
  error: PropTypes.string,
};
