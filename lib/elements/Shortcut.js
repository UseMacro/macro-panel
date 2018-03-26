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
        for (let j = 0; j < k.default.length; j++) {
          let temp = k.default[j];
          // succession shortcut
          shortcuts.push(
              <div style={styles.multiKey}>
                {temp.replace('++', '+plus').split('+').map(key => <div style={styles.keyWrapper} key={i++}><Key name={key} key={i++}/></div>)}
              </div>
          );
          if (j < k.default.length - 1) { shortcuts.push(','); }
        }
      } else {
        // combination shortcut
        let elem = k.default[0].replace('++', '+plus').split('+').map(key => {
          return <div style={styles.keyWrapper} key={i++}><Key name={key} key={i++}/></div>
        });
        shortcuts.push(
          <div style={styles.groupKeys}>
            {elem}
          </div>
        );
      }
    }
    return shortcuts
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
    paddingBottom: '8px',
    border: 'none'
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
  },
  multiKey: {
    marginLeft: '4px',
    marginRight: '2px',
    display: 'inline'
  }
}

export default Radium(Shortcut);
