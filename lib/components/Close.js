import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';

const Close = ({onClick}) => (
    <div style={styles.container} onClick={onClick}>
      <div style={[styles.line, {transform: 'rotate(45deg)'}]}></div>
      <div style={[styles.line, {transform: 'rotate(-45deg)'}]}></div>
    </div>
);
Close.propTypes = {
  onClick: PropTypes.func
}

let styles = {
  container: {
    width: '24px',
    height: '24px',
    position: 'relative',
    ':hover': {
      cursor: 'pointer'
    }
  },
  line: {
    width: '2px',
    height: '24px',
    position: 'absolute',
    backgroundColor: color.gray2
  }
};

export default Radium(Close);
