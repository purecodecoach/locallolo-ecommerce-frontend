import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import swell from 'swell-js'

// configureStore 
import { configureStore } from './store/index';

// store
export const store = configureStore();

swell.init('local-lolo', 'pk_0pOCkVaOD1HmGrCYzUfVsGPUsnx0Txq5');

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <Switch>
            <Route path="/" component={App} />
         </Switch>
      </BrowserRouter>
   </Provider>
   , document.getElementById('root'));

registerServiceWorker();
