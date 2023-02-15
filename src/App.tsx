import React, { useState } from 'react';
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
import Permissions from './pages/permissions';
import PDetail from './components/p-detail-header';
import PermissionDetail from './pages/permission-detail';
import AppCenter from './pages/app-center';
import OrgSetting from './pages/org-setting';
import AppCenterDetail from './pages/app-center-detail';
import VotingDetail from './pages/voting-detail';

interface Network {
  name: string,
  type: 0,
}

function App() {
  const [network, setNetwork] = useState({name: "Ethereum", type: 0} as Network)
  const [page, setPage] = useState("home")

  return (
    <>
      <div className='App'>
        <div className='line'></div>
        
        <BrowserRouter> 
        <Header page={page} network={network} setNet={setNetwork} />
          <Routes>
              <Route path="/" element={<Welcome setPage={setPage} network={network}/>} />
              <Route path="/:id" element={<ExplorePage />} />
              <Route path="/open" element={<OpenExistingOrg network={network} />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/permission" element={<Permissions />} />
              <Route path="/permission-detail" element={<PermissionDetail />} />
              <Route path="/app-center" element={<AppCenter />} />
              <Route path="/org-setting" element={<OrgSetting />} />
              <Route path="/app-center-detail" element={<AppCenterDetail />} />
              <Route path="/vote-detail" element={<VotingDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
