import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import MainContent from './components/MainContent/Main-content';
import SideBar from './components/SideBar/Side-bar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/Dialogs-container';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SideBar state={props.state.sidebar}/>
        <div className='app-wrapper-content'> 
        <Routes>
          <Route path='/main-content' element={<MainContent store={props.store}/>}/>
          <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
