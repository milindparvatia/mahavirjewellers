import React, { Component } from 'react';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import CoinList from './components/Dashboard/CoinList/CoinList';
//import ItemDetails from './container/IteamDetails/IteamDetails';
import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Layout>
            <CoinList />
          </Layout>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
