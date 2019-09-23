// React + Redux
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import App from './containers/App/App';
import Home from './containers/Home/Home';
// Reducers
import reducer from './reducers';

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

const routing = (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/sign-up" component={Home} />
      <Route path="/app" component={App} />
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    { routing }
  </Provider>, document.getElementById('root')
);