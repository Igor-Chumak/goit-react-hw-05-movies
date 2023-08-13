import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

export const MovieDetails = props => {
  return (
    <div>
      MovieDetails
      <Outlet />
    </div>
  );
};

MovieDetails.propTypes = {};
