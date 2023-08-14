import PropTypes from 'prop-types';

export const Button = ({ click, page, pageMax }) => {
  return (
    <button type="button" className={Button} onClick={click}>
      {page > 0 ? `${page} / ${pageMax} ` : ''}Load more
    </button>
  );
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
};
