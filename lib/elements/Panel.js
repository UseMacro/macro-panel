import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { color } from '../styles/styles.js';
import Text from '../components/Text.js';
import Close from '../components/Close.js';
import Section from './Section.js';

import key from 'keymaster';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {show: props.show};
    this.plugins = props.data.sections[data.sections.length - 1].name === 'Plugins'
      ? props.data.sections[props.data.sections.length - 1]
      : [];
  }
  componentDidMount() {
    this.initKeys();
  }
  initKeys() {
    key.filter = (event) => true;
    key('option+/', (event, handler) => {
      event.preventDefault();
      event.stopPropagation();
      this.toggle();
    });
    key('escape', (event, handler) => {
      this.close();
    });
  }
  toggle() {
    this.setState({show: this.state.show ? false : true});
  }
  close() {
    this.setState({show: false});
  }
  cancel(e) {
    e.stopPropagation();
  }
  render() {
    let data = this.props.data;

    // prepare plugin data
    let pluginsLeft = null;
    let pluginsRight = null;
    if (this.plugins.shortcuts && this.plugins.shortcuts.length > 0) {
      let pluginsLeftData = {name: this.plugins.name, shortcuts: this.plugins.shortcuts.slice(0, Math.ceil(this.plugins.shortcuts.length/2))};
      let pluginsRightData = {name: '', shortcuts: this.plugins.shortcuts.slice(Math.ceil(this.plugins.shortcuts.length/2), this.plugins.shortcuts.length)};
      pluginsLeft = pluginsLeftData.shortcuts.length > 0 ? <Section data={pluginsLeftData} key={key++}/> : null;
      pluginsRight = pluginsRightData.shortcuts.length > 0 ? <Section data={pluginsRightData} key={key++}/> : null;
    }
    // prepare shortcuts data
    let shortcutsLeft = data.sections.length > 0 ? data.sections.map(section => <Section data={section} key={key++}/>) : null;
    if (shortcutsLeft && data.sections[data.sections.length - 1].name === 'Plugins') {
      shortcutsLeft.pop();
    }
    let shortcutsRight = shortcutsLeft && shortcutsLeft.length > 1 ? shortcutsLeft.splice(Math.ceil(shortcutsLeft.length/2), shortcutsLeft.length) : null;

    let key = 0;
    return this.state.show ? <div style={styles.container}>
      <div style={styles.modal} onClick={() => this.close()}>
        <div style={[styles.dialog, this.props.style]} onClick={this.cancel}>
          <div style={styles.header}>
            <Text size='large'>{data.name}</Text>
            <Close onClick={() => this.close()}/>
          </div>
          <div style={styles.body}>
            <table style={styles.col}>
              {pluginsLeft}
            </table>
            <table style={styles.col}>
              {pluginsRight}
            </table>
          </div>
          <div style={styles.body}>
            <table style={styles.col}>
              {shortcutsLeft}
            </table>
            <table style={styles.col}>
              {shortcutsRight}
            </table>
          </div>
          <div style={styles.feedback}>
            <a href="https://goo.gl/forms/ZhoXpiicA8tSSuPz1" target="blank">Have feedback?</a>
          </div>
        </div>
      </div>
      <div style={styles.overlay}></div>
    </div> : null;
  }
}
Panel.propTypes = {
  data: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
}

let styles = {
  container: {
    position: 'fixed',
    zIndex: '92000',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  overlay: {
    opacity: '0.2',
    position: 'fixed',
    backgroundColor: color.black,
    zIndex: '90000',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  modal: {
    display: 'block',
    position: 'absolute',
    zIndex: '91000',
    outline: '0',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  },
  dialog: {
    width: '600px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
    outline: '0',
    backgroundColor: color.white,
    padding: '20px',
    maxHeight: '90vh',
    overflowY: 'scroll',
    borderRadius: '15px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
    paddingLeft: '15px'
  },
  body: {
    display: 'flex',
    justifyContent: 'center'
  },
  col: {
    width: '48%',
    border: 0,
    boxShadow: 'none'
  },
  feedback: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '15px',
    paddingRight: '10px',
    fontSize: '12px'
  }
}

export default Radium(Panel);
