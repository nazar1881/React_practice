import React from 'react';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import SideBar from './components/SideBar/Side-bar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/Dialogs-container';
import UsersContainer from './components/Users/UsersContainer';
import MainContentContainer, { withRouter } from './components/MainContent/Main-content-container';
import HeaderContainer from './components/Header/Header-container';
import LoginPage from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialiazed) {
      return <Preloader/>
    }

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
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
          </div> 
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialiazed: state.app.initialiazed
})

export default compose(
  withRouter,
  connect (mapStateToProps, {initializeApp}))(App);

