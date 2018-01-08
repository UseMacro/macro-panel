import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';
import Shortcut from './Shortcut.js';
import KeyColumn from './KeyColumn.js';

class Section extends PureComponent {
  render() {
    let key = 0;
    let data = this.props.data;
    let shortcuts = data.shortcuts.map(shortcut => <Shortcut data={ shortcut } key={ key++ } />);
    return <div style={styles.container}>
      <Text weight='bold'>{data.name}</Text>
      <KeyColumn shortcutsData={data.shortcuts}/>
    </div>
  }
}
Section.propTypes = {
  data: PropTypes.object.isRequired
}

let styles = {
  container: {
    marginTop: '10px'
  }
}

export default Radium(Section);
