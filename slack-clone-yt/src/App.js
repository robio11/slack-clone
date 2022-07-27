import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from './Header'
import Sidebar from './Sidebar';
import Chat from './Chat';
import styled from 'styled-components';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Login';
import Spinner from 'react-spinkit';

function App() {
  const [user,loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
        <AppLoadingContents>
          <img src="https://yt3.ggpht.com/ytc/AKedOLS2OOXtmIHu0Tf1TmWITVrHNktn-MVXK3XRjwf4YA=s900-c-k-c0x00ffffff-no-rj" alt="" />
          <Spinner name='ball-spin-fade-loder' color='purple' fadeIn='none' />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className='app'>
      <BrowserRouter>
      {!user ? (
        <Login/>
      ) :(
        <> 
      <Header/>
      <AppBody>
      <Sidebar/>
          <Routes>
            <Route path='/' element={<Chat/>} />
          </Routes>
          </AppBody>
          </>
      )
      };
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;

const AppLoadingContents = styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> img {
  height: 100px;
  padding: 20px;
  margin-bottom: 40px;
}
`;
const AppLoading = styled.div`
display: grid;
place-items:center ;
height: 100vh;
width: 100%;
`;