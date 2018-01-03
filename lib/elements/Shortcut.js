import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';

class Shortcut extends PureComponent {
  render() {
    let data = this.props.data;
    // TODO: use OS specific key (passed as props from CE)
    // TODO: format key
    let key = data.keys[0].default;
    return <div>
      <h3>{ data.name }</h3>
      <Text>{ data.description }</Text>
      <Text>{ key }</Text>
    </div>
  }
}
Shortcut.propTypes = {
  data: PropTypes.object.isRequired
}

export default Radium(Shortcut);
