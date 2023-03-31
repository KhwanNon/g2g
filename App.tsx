import React from 'react';
import {store} from './src/store';
import {Provider} from 'react-redux';
import Navigation from './src/app/routes/navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
