import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';

const abbreviations = {
  'control': '^',
  'ctrl': '^',
  'command': '⌘',
  'cmd': '⌘',
  'option': '⌥',
  'alt': '⌥',
  'shift': '⇧',
  'escape': 'esc',
  'enter': '↵'
};

class Key extends PureComponent {
  render() {
    let name = this.props.name;
    return <div style={styles.key}>
      <Text size='small'>{name in abbreviations ? abbreviations[name] : name}</Text>
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
    margin: '0px 3px',
    borderRadius: '4px',
    minWidth: '15px',
    minHeight: '20px',
    padding: '2px 3px 0px 3px',
    backgroundColor: color.gray0,
    border: '1px solid ' + color.gray2,
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)',
    color: color.gray3
  }
}

export default Radium(Key);
