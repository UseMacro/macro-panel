import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { font } from '../styles/styles.js';

const Text = ({size, weight, children}) => (
  <p style={[styles.text, {fontSize: font[size], fontWeight: weight}]}>{children}</p>
);
Text.propTypes = {
  // TODO: implement sizes and default
  size: PropTypes.string,
  weight: PropTypes.string
};
Text.defaultProps = {
  size: 'medium',
  weight: 'normal'
};

let styles = {
  text: {
    fontFamily: font.main,
    color: font.normalText,
    margin: '0px',
    padding: '0px'
  }
};

export default Radium(Text);
