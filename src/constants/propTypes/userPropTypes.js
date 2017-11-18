import PropTypes from 'prop-types';

export const typesUserListItem = PropTypes.shape({
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
});

export const typesUserList = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }),
}));
