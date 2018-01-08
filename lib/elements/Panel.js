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

    let data = {
    	"name": "Github shortcuts",
    	"sections": [
    		{
    			"name": "Navigation",
    			"shortcuts": [
    				{
    					"name": "Up",
    					"keys": [{"default": ["k"]}]
    				},
    				{
    					"name": "Down",
    					"keys": [{"default": ["j"]}]
    				},
    				{
    					"name": "Left",
    					"keys": [{"default": ["h"]}]
    				},
    				{
    					"name": "Right",
    					"keys": [{"default": ["l"]}]
    				}
    			]
    		},
        {
          "name": "Site wide shortcuts",
          "shortcuts": [
            {
              "name": "Focus search bar",
              "keys": [{"default": ["s"]}]
            },
            {
              "name": "Go to notifications",
              "keys": [{"default": ["g", "n"]}]
            },
            {
              "name": "Go to dashboard",
              "keys": [{"default": ["g", "d"]}]
            },
            {
              "name": "Help",
              "keys": [{"default": ["?"]}]
            },
            {
              "name": "Toggle selection",
              "keys": [{"default": ["x"]}]
            },
            {
              "name": "Open selection",
              "keys": [{"default": ["enter"]}]
            }
          ]
        },
        {
          "name": "Repositories",
          "shortcuts": [
            {
              "name": "Go to code",
              "keys": [{"default": ["g", "c"]}]
            },
            {
              "name": "Go to issues",
              "keys": [{"default": ["g", "i"]}]
            },
            {
              "name": "Go to pull requests",
              "keys": [{"default": ["g", "p"]}]
            },
            {
              "name": "Go to wiki",
              "keys": [{"default": ["g", "w"]}]
            }
          ]
        },
        {
          "name": "Source code browsing",
          "shortcuts": [
            {
              "name": "Activates the file finder",
              "keys": [{"default": ["t"]}]
            },
            {
              "name": "Jump to line",
              "keys": [{"default": ["l"]}]
            },
            {
              "name": "Switch branch/tag",
              "keys": [{"default": ["w"]}]
            },
            {
              "name": "Expand URL to its canonical form",
              "keys": [{"default": ["y"]}]
            },
            {
              "name": "Show'hide all inline notes",
              "keys": [{"default": ["i"]}]
            },
            {
              "name": "Open blame",
              "keys": [{"default": ["b"]}]
            }
          ]
        }
    	]
    };
    let key = 0;
    // TODO: renable this
    // let data = JSON.parse(this.props.data);
    let sections = data.sections.map(section => <Section data={section} key={key++}/>);
    // TODO: fix image loading
    return this.state.show ? <div style={styles.container}>
      <div style={styles.modal} onClick={() => this.close()}>
        <div style={[styles.dialog, this.props.style]} onClick={this.cancel}>
          <div style={styles.header}>
            <Text size='large'>{data.name}</Text>
            <Icon src='/lib/assets/images/close.png' onClick={() => this.close()}/>
          </div>
          {sections}
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
    opacity: '0.2',
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
    justifyContent: 'space-between'
  }
}

export default Radium(Panel);
