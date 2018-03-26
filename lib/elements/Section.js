import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';
import Shortcut from './Shortcut.js';

class Section extends PureComponent {
  render() {
    let key = 0;
    let data = this.props.data;

    let titleRender = (<tr style={[data.name ? {} : styles.ghost, styles.reset]}>
                        <th style={styles.reset}></th>
                        <th style={styles.title}><Text weight='bold'>{data.name}</Text></th>
                      </tr>);
    let shortcutsRender = data.shortcuts.map(shortcut => <Shortcut data={shortcut} key={key++}/>);

    return <tbody style={styles.container}>
      {titleRender}
      {shortcutsRender}
    </tbody>;
  }
}
Section.propTypes = {
  data: PropTypes.object.isRequired
}

let styles = {
  reset: {
    border: 'none'
  },
  container: {
    margin: '10px 0px'
  },
  title: {
    textAlign: 'left',
    padding: '15px 0 5px 0px',
    border: 'none'
  },
  ghost: {
    height: '25px'
  }
}

export default Radium(Section);
