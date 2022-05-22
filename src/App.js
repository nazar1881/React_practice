import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import MainContent from './components/MainContent/Main-content';
import SideBar from './components/SideBar/Side-bar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SideBar state={props.state.sidebar}/>
        <div className='app-wrapper-content'> 
        <Routes>
          <Route path='/main-content' element={<MainContent mainContentPage={props.state.mainContentPage} dispatch={props.dispatch}/>}/>
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
