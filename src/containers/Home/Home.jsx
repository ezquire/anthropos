import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import './Home.css';

const Home = () => (
  <div className='Home'>
    <div id="home-header">
      <h1>Welcome To Anthropos</h1>
      <h3>Banking for a Better Future</h3>
    </div>
    <SignIn />
    <ul class="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

export default Home;