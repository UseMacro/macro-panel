import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';
import Key from '../elements/Key.js';

class Shortcut extends PureComponent {
  renderShortcuts(keys) {
    let shortcuts = [];
    let i = 0;
    // TODO: render multiple key options per shortcut
    for (let s = 0; s < 1; s++) {
      let k = keys[s];
      if (k.default.length > 1) {
        // succession shortcut
        shortcuts.push(k.default.map(key => <div style={styles.keyWrapper} key={i++}><Key name={key} key={i++}/></div>));
      }
      // combination shortcut
      let elem = k.default[0].split('+').map(key => i === 0
        ? <div style={styles.keyWrapper} key={i++}><Key name={key} key={i++}/></div>
          : <div style={styles.keyWrapper} key={i++}><Key name={key} key={i++}/></div>);
      shortcuts.push(
        <div className={styles.groupKeys}>
        {elem}
        </div>
      );
    }
    return shortcuts;
  }

  render() {
    let data = this.props.data;
    // TODO: use OS specific key (passed as props from CE)
    let keys = this.renderShortcuts(data.keys);
    return <tr style={styles.shortcut}>
      <td style={[styles.td, styles.keys]}>{keys}</td>
      <td style={[styles.td, styles.description]}><Text>{data.name}</Text></td>
    </tr>;
  }
}
Shortcut.propTypes = {
  data: PropTypes.object.isRequired
}

let styles = {
  groupKeys: {},
  td: {
    border: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    margin: 0,
    verticalAlign: 'top'
  },
  shortcut: {
    height: '27px',
    paddingBottom: '8px'
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
    paddingTop: '2px',
    lineHeight: '1.25'
  }
}

export default Radium(Shortcut);
