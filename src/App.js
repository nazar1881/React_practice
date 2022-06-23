import React from 'react';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import SideBar from './components/SideBar/Side-bar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/Dialogs-container';
import UsersContainer from './components/Users/UsersContainer';
import MainContentContainer from './components/MainContent/Main-content-container';
import HeaderContainer from './components/Header/Header-container';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <SideBar /*state={props.state.sidebar}*//>
        <div className='app-wrapper-content'> 
        <Routes>
          <Route path='/main-content/:userId' element={<MainContentContainer/>}/>
          <Route path='/main-content/' element={<MainContentContainer/>}/>
          <Route path='/dialogs/*' element={<DialogsContainer/>}/>
          <Route path='/users/*' element={<UsersContainer/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
