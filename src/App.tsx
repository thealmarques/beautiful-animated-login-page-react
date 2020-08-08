import React from 'react';
import store from './shared/store';
import { Provider } from 'react-redux';
import AppRouter from './routes'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
