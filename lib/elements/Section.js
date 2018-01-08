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
    let shortcuts = data.shortcuts.map(shortcut => <Shortcut data={shortcut} key={key++}/>);
    return <tbody style={styles.container}>
      <tr>
        <th></th>
        <th style={styles.title}><Text weight='bold'>{data.name}</Text></th>
      </tr>
      {shortcuts}
    </tbody>;
  }
}
Section.propTypes = {
  data: PropTypes.object.isRequired
}

let styles = {
  container: {
    margin: '10px 0px'
  },
  title: {
    float: 'left',
    padding: '5px 0px'
  }
}

export default Radium(Section);
