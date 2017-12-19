import * as React from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RecipeLists from './RecipeLists';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <RecipeLists />
      </MuiThemeProvider>
    );
  }
}

export default App;
