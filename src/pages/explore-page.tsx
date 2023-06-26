import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import { DatePicker, message } from 'antd';
import Header from '../components/header';
import Navigation from '../components/navigation';
import WhatTodo from '../components/whatodo';
import { HomeImg1, HomeImg2, HomeImg3 } from '../utils/image';
import ExploreItem from '../components/explore-item';

function ExplorePage() {
  const data = [
    {
      image: <HomeImg1 />,
      label: "Vote"
    },
    {
      image: <HomeImg2 />,
      label: "Check Finance"
    },
    {
      image: <HomeImg3 />,
      label: "New Payment"
    }
  ]

  return (
    <>
      <div className='ex-body'>
        <div className='ex-content'>
          <h1 className='exc-title'>What do you want to do?</h1>
          <div className="what-todo">
            {data.map((d, index: number) => {
              return (
                <ExploreItem key={index} image={d.image} label={d.label} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExplorePage;
