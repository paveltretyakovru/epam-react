// Core imports
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';

import DevTools from './shared/devtools';

import * as AppActions from './app.actions';

import './app.container.css';

class App extends Component {
  static path = '/';

  componentWillMount() {
    injectTapEventPlugin();
  }

  render() {
    return(<MuiThemeProvider>
      <div id="app-container">
        <main>
          <div id="app-content" className="col-xs-12 col-md-12">
             { this.props.children } 
          </div>
        </main>
        { NODE_ENV === 'development' ? <DevTools /> : null }
      </div>
    </MuiThemeProvider>);
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

function mapDisptachToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(App);
