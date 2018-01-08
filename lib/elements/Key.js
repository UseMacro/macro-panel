import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';

class Key extends PureComponent {
  render() {
    let name = this.props.name;
    return <div style={styles.key}>
      <Text size='small'>{name}</Text>
    </div>
  }
}
Key.propTypes = {
  name: PropTypes.string.isRequired
}

let styles = {
  key: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 5px 0px 0px',
    borderRadius: '4px',
    minWidth: '20px',
    minHeight: '20px',
    padding: '0px 3px 0px 3px',
    backgroundColor: color.gray0,
    border: '1px solid ' + color.gray2,
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)',
    color: color.gray3
  },
  keyAlt: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 5px 0px 5px',
    padding: '5px',
    borderRadius: '1px',
    minWidth: '20px',
    minHeight: '20px',
    backgroundColor: color.gray2,
    color: color.gray3
  }
}

export default Radium(Key);
