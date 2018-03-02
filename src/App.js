import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Slider from './components/Slider/Slider';
import GridList from './components/Dashboard/CoinList/CoinList';
import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Layout>
            <Slider />
            <GridList />
          </Layout>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
