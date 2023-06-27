import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import { DatePicker, message } from 'antd';
import Header from '../components_deprecated/header';
import Main from '../components_deprecated/main';
import Explore from '../components_deprecated/explore';
import ExistingOrg from '../components_deprecated/existing-org';

function OpenExistingOrg(props: any) {

  return (
    <>
      <h1 className='title'>Welcome to Aragon</h1>
      <div className='subtitle'>Create your own organization in a few minutes</div>
      <div className='main-content'>
        <ExistingOrg />
        <Explore network={props.network} />
      </div>
      <p className='more-info'>
        Do you need more information about Aragon?
        <a href='#' className='visit-style'>
          &nbsp;Visit our homepage
        </a>
      </p>
    </>
  );
}

export default OpenExistingOrg;
