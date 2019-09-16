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
// Actions
import { logUser } from './actions'
// Reducers
import reducer from './reducers';
// Firebase
import { firebaseApp } from './firebase';

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('user has signed in or signed up', user);
    const { email } = user;
    store.dispatch(logUser(email));
  } else {
    console.log('user hasn\'t signed up, or has signed out');
  }
});

const routing = (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/app" component={App} />

      {/* <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} /> */}
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    { routing }
  </Provider>, document.getElementById('root')
);