import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';
import Icon from '../components/Icon.js';
import Section from './Section.js';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  close() {
    this.setState({show: false});
  }
  cancel(e) {
    e.stopPropagation();
  }
  render() {
    let key = 0;
    let data = JSON.parse(this.props.data);
    let sections = data.sections.map(section => <Section data={section} key={key++}/>);
    return this.state.show ? <div style={styles.container}>
      <div style={styles.modal} onClick={() => this.close()}>
        <div style={[styles.dialog, this.props.style]} onClick={this.cancel}>
          <Icon src='/lib/assets/images/close.png' onClick={() => this.close()}/>
          <h1>{ data.name }</h1>
          <Text>{ data.description }</Text>
          { sections }
        </div>
      </div>
      <div style={styles.overlay}></div>
    </div> : null;
  }
}
Panel.propTypes = {
  data: PropTypes.string.isRequired
}

let styles = {
  container: {
    position: 'fixed',
    zIndex: '1000',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  overlay: {
    opacity: '0.3',
    position: 'fixed',
    backgroundColor: color.black,
    zIndex: '100',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  modal: {
    display: 'block',
    position: 'absolute',
    zIndex: '500',
    outline: '0',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  dialog: {
    width: '450px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
    outline: '0',
    backgroundColor: color.white,
    padding: '20px',
    maxHeight: '90vh',
    overflowY: 'scroll'
  }
}

export default Radium(Panel);
