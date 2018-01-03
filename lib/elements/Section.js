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
    let shortcuts = data.shortcuts.map(shortcut => <Shortcut data={ shortcut } key={ key++ } />);
    return <div>
      <h2>{ data.name }</h2>
      <Text>{ data.description }</Text>
      { shortcuts }
    </div>
  }
}
Section.propTypes = {
  data: PropTypes.object.isRequired
}

export default Radium(Section);
