import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import { DatePicker, message } from 'antd';
import Header from '../components/header';
import Main from '../components/main';
import Explore from '../components/explore';
import ConnectForm from '../components/connect-form';

function Welcome() {
  
  return (
    <>
    <Header />
    <h1 className='title'>Welcome to Aragon</h1>
    <div className='subtitle'>Create your own organization in a few minutes</div>
    <div className='main-content'>
      <Main />
      <Explore />
    </div>
    <p className='more-info'>
    Do you need more information about Aragon?
    <a href='#' className='visit-style'>
    &nbsp;Visit our homepage
    </a>
    </p>

    <ConnectForm />
    </>
  );
}

export default Welcome;
