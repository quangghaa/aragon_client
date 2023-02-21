import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import { DatePicker, message } from 'antd';
import Header from '../components/header';
import Navigation from '../components/navigation';
import WhatTodo from '../components/whatodo';

function ExplorePage() {
  return (
    <>
      <div className='ex-body'>
        <div className='ex-nav-wrapper'>
          <Navigation />
        </div>
        <div className='ex-content pd-x-48'>
          <div className='exc-wrapper'>
            <h1 className='exc-title'>What do you want to do?</h1>
            <WhatTodo />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExplorePage;
