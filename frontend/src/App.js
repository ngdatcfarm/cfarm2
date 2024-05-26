import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import './assets/css/main.css';
import './assets/css/home-responsive.css';
import './assets/font/font-awesome-pro-v6-6.2.0/css/all.min.css';
import './assets/img/zlogo.png';
import SummaryApi from './common';
import {userEffect} from 'react';
import Logo from './components/Logo';
import Header from './components/Header'; // Import Header component
import Footer from './components/Footer'; // Import Footer component


function App() {

  const fetchUserDetails = async()=>{
    const dataReponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })
    const dataApi = await dataReponse.json()
    console.log("data-user",dataReponse)
  }

  userEffect(()=>{
    fetchUserDetails ()

  },[])
  return (
    <div className=''>
      <Header />
      <main className='min-h-[calc(80vh-80px)]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;