import React from 'react';
import {Link} from 'react-router-dom';
import {agileNixIcon, social} from './img';
import {ContainerPage} from '../../';
import {Navigation, AgileNixLinkImage, BackgroundMenu} from './style.js';

import MainText from './MainText';
import Splinters from './Splinters';

import MenuLink from '../../../components/MenuLink';

// from dev schema grid
// import { DevGrid } from '../../';

const links = [
  {linkID: 0, title: 'About Us', path: '#about'},
  {linkID: 4, title: 'Services', path: '#services'},
  {linkID: 5, title: 'Technologies', path: '#technologies'},
  {linkID: 3, title: 'Portfolio', path: '#portfolio'},
  {linkID: 2, title: 'Hiring', path: '#hiring'},
  {linkID: 1, title: 'Contact', path: '#contact'}
];

const AgileNixLink = ({src}) => (
  <Link to='/'>
    <AgileNixLinkImage src={src} alt='AgileNix' />
  </Link>
);
const NavBar = () => (
  <Navigation>
    <AgileNixLink src={agileNixIcon} />
    <div style={{marginLeft: '8.7%'}}>
      {links.map(link => (
        <MenuLink key={link.linkID} {...link} />
      ))}
      <img style={{height: 14}} src={social} alt='' />
    </div>
  </Navigation>
);

const Menu = () => (
  <BackgroundMenu>
    <ContainerPage id='Menu'>
      {/* <DevGrid /> */}
      <NavBar />
      <MainText />
      <Splinters />
    </ContainerPage>
  </BackgroundMenu>
);

export default Menu;
