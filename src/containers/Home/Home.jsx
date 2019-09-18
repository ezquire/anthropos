import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './Home.css';

const Home = ({ match }) => (
  <div className='Home'>
    <div id="home-header">
      <h1>Welcome To Anthropos</h1>
      <h3>Banking for a Better Future</h3>
    </div>
    { console.log(match.url) }
    <Route exact path="/" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <ul className="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default Home;