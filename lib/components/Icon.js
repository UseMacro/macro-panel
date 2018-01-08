import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';

const Icon = ({src, onClick}) => (
    <img src={src} onClick={onClick} />
);
Icon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Radium(Icon);
