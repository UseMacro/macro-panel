import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';
import Key from '../elements/Key.js';

class Shortcut extends PureComponent {
  render() {
    let data = this.props.data;
    let i = 0;
    // TODO: use OS specific key (passed as props from CE)
    let keys = data.keys[0].default.map(key => <Key name={key} key={i++}/>);
    return <div style={styles.shortcut}>
      <div style={styles.keys}>{keys}</div>
      <Text>{data.name}</Text>
    </div>
  }
}
Shortcut.propTypes = {
  data: PropTypes.object.isRequired
}

let styles = {
  shortcut: {
    display: 'flex',
    padding: '3px 0px'
  },
  keys: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

export default Radium(Shortcut);
