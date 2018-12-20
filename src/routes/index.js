import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './HomePage';
import Menu from './HomePage/Menu';
import About from './HomePage/About';
import Services from './HomePage/Services';
import Technologies from './HomePage/Technologies';
import Portfolio from './HomePage/Portfolio/portfolio';
import Hiring from './HomePage/Hiring';
import Contact from './HomePage/Contact';

import ContainerPage from '../components/ContainerPage';
import HeaderOfPage from '../components/HeaderOfPage';
import BackgroundLogo from '../components/BackgroundLogo';
// grid from dev
import DevGrid from '../components/DevGrid';

export {ContainerPage, DevGrid, HeaderOfPage, BackgroundLogo};

const Landing = () => (
  <HomePage className='home-page'>
    <Menu />
    <About />
    <Services />
    <Technologies />
    <Portfolio />
    <Hiring />
    <Contact />
  </HomePage>
);
export default () => (
  <Switch>
    <Route exact path='/' component={Landing} />
  </Switch>
);
