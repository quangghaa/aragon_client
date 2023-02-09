import React from 'react';
import './App.css';
import { Layout, Space } from 'antd';
import Welcome from './pages/welcome';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Explore from './components/explore';
import ExplorePage from './pages/explore-page';
import Header from './components/header';
import OpenExistingOrg from './pages/open-existing-org';
import Voting from './pages/voting';
import Finance from './pages/finance';

function App() {
  return (
    <>
      <div className='App'>
        <div className='line'></div>
        <Header />
        <BrowserRouter> 
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/:id" element={<ExplorePage />} />
              <Route path="/open" element={<OpenExistingOrg />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/finance" element={<Finance />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
