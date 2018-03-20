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
    // TODO: render multiple key options per shortcut
    let keys;
    if (data.keys[0].default.length > 1) {
      // succession shortcut
      keys = data.keys[0].default.map(key => <div style={styles.keyWrapper} key={i++}><Key name={key} key={i++}/></div>);
    } else {
      // combination shortcut
      keys = data.keys[0].default[0].split('+').map(key => i === 0
        ? <div style={styles.keyWrapper} key={i++}><Key name={key} key={i++}/></div>
        : <div style={styles.keyWrapper} key={i++}><Key name={key} key={i++}/></div>);
    }
    return <tr style={styles.shortcut}>
      <td style={[styles.td, styles.keys]}>{keys}</td>
      <td style={[styles.td, styles.description]}><Text key={i++}>{data.name}</Text></td>
    </tr>;
  }
}
Shortcut.propTypes = {
  data: PropTypes.object.isRequired
}

let styles = {
  td: {
    border: 0,
    padding: 0,
    margin: 0,
    verticalAlign: 'top'
  },
  shortcut: {
    height: '27px'
  },
  keys: {
    textAlign: 'right',
    paddingRight: '5px',
    width: '110px'
  },
  keyWrapper: {
    display: 'inline'
  },
  description: {
    paddingTop: '5px',
    lineHeight: '1.25'
  }
}

export default Radium(Shortcut);
