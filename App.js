import React from 'react';
import { Provider } from 'react-redux';
import rootReduce from './src/store/modules'
import {createStore} from 'redux'
import { Provider as PaperProvider } from 'react-native-paper';

import Navigator from './src/navigation'


const store = createStore(rootReduce)
function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigator/>
      </PaperProvider>
    </Provider>
  ) 
};
export default App;