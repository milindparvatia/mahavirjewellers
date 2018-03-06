import React, { Component } from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import  { BrowserRouter } from 'react-router-dom';
import { Route,Switch } from 'react-router-dom';

import Coin from './container/Coin/Coin';
import ItemDetails from './container/IteamDetails/IteamDetails';
import Dashboard from './components/Dashboard/Dashboard';
import CheckOut from './container/CheckOut/CheckOut';
import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Layout>
            <Switch>
              
              <Route path="/CheckOut" exact component={CheckOut} />
              <Route path="/Coin" exact component={Coin} />
              <Route path="/ItemDetails" exact component={ItemDetails} />
              <Route path="/" exact component={Dashboard} />
            </Switch>
          </Layout>
        </MuiThemeProvider>
      </div>
      </ BrowserRouter>
    );
  }
}

export default App;
