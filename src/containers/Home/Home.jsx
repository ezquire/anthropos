import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import './Home.css';

const Home = () => (
  <div className='Home'>
    <div id="home-header">
      <h1>Welcome To Anthropos</h1>
      <h3>Banking for a Better Future</h3>
    </div>
    <ul class="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <SignIn classN/>
  </div>
);

export default Home;