import React from 'react';
import './App.css';
import { Layout, Space } from 'antd';
import Welcome from './pages/welcome';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return ( 
    <>
    <div className='line'></div>
    <div className='App'>
    <Welcome />
    </div>  
    </>
  );
}

export default App;
