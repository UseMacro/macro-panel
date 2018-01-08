import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Key from './Key.js';

class KeyColumn extends PureComponent {
  render() {
    let i = 0;
    let keys = this.props.shortcutsData.map(shortcut => {
      shortcut.keys.map(key => <Key name={key} key={i++} />);
    });
    return <div style={styles.container}>
      {keys}
    </div>
  }
}
KeyColumn.propTypes = {
  shortcutsData: PropTypes.object.isRequired
}

let styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}

export default Radium(KeyColumn);
