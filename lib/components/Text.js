import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => (
  <p>{ children }</p>
);

Text.propTypes = {
  // TODO: implement sizes and default
  size: PropTypes.string
};

export default Text;
