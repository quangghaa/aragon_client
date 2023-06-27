import React, { useEffect } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import { DatePicker, message } from 'antd';
import Header from '../components_deprecated/header';
import Main from '../components_deprecated/main';
import Explore from '../components_deprecated/explore';

function Welcome(props: any) {

  window.onclick = function (event: any) {
    console.log("Welcome page clicked")
    if (!event.target.matches('.close-item')) {
      var dropdowns = document.getElementsByClassName("connect-modal");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-modal')) {
          openDropdown.classList.remove('show-modal');
        }
      }
    }

    // close connect account modal
    console.log("Event: ", event.target)
    if (!event.target.matches('.XXX')) {
      console.log("Event: ", event.target)
      var dropdowns = document.getElementsByClassName("connect-form");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  useEffect(() => {
    props.setPage("home")
  }, [])

  return (
    <>
      <h1 className='title'>Welcome to Aragon</h1>
      <div className='subtitle'>Create your own organization in a few minutes</div>
      <div className='main-content'>
        <Main network={props.network} />
        <Explore setPage={props.setPage} network={props.network} />
      </div>
      <p className='more-info'>
        Do you need more information about Aragon?
        <a href='https://aragon.org/' className='visit-style'>
          &nbsp;Visit our homepage
        </a>
      </p>
    </>
  );
}

export default Welcome;
