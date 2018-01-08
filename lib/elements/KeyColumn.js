import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';
import Key from './Key.js';

class KeyColumn extends PureComponent {
  render() {
    let i = 0;
    let keys = this.props.shortcutsData.map(shortcut => {
      let keyGroup = shortcut.keys[0].default.map(key => <Key name={key} key={i++} />);
      return <div style={styles.shortcut} key={i++}>
        <div style={styles.keyGroup} key={i++}>
          {keyGroup}
        </div>
        <Text>{shortcut.name}</Text>
      </div>;
    });
    return <div style={styles.container}>
      {keys}
    </div>
  }
}
KeyColumn.propTypes = {
  shortcutsData: PropTypes.array.isRequired
};

let styles = {
  container: {
    display: 'inline-block'
  },
  shortcut: {
    display: 'flex',
    margin: '5px 0px'
  },
  keyGroup: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

export default Radium(KeyColumn);
