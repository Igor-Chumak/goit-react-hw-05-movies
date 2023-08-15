import PropTypes from 'prop-types';
import { ErrorStyled } from './Error.styled';

export const Error = ({ textError }) => {
  return <ErrorStyled>{textError}</ErrorStyled>;
};

Error.propTypes = {
  textError: PropTypes.string,
};
