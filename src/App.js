import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Delivery from './pages/Delivery.js';
import About from './pages/About.js';
import Menu from './pages/Menu.js';

import Sidenav from './helpers/Sidenav.js'
import AppBar from 'material-ui/AppBar';


import './App.css';


const muiTheme = getMuiTheme({
  palette: {
    textColor: '#ffff',
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {slider: false};
  }
  handleToggle = () => this.setState({slider: !this.state.slider});
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <AppBar
           title="Frutix"
           titleStyle={{textAlign:'center'}}
           iconClassNameRight="muidocs-icon-navigation-expand-more"
           onLeftIconButtonClick={this.handleToggle}
        />

        <Sidenav open={this.state.slider} close={this.handleToggle}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/about" component={About} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}


export default App;
