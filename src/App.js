import React, { Suspense } from 'react';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import SideBar from './components/SideBar/Side-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import MainContentContainer, { withRouter } from './components/MainContent/Main-content-container';
import HeaderContainer from './components/Header/Header-container';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs-container'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialiazed) {
      return <Preloader/>
    }

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <HeaderContainer />
          <SideBar /*state={props.state.sidebar}*//>
          <div className='app-wrapper-content'> 
          <Suspense fallback={<div><Preloader/></div>}>
          <Routes>
            <Route path='/main-content/:userId' element={<MainContentContainer/>}/>
            <Route path='/main-content/' element={<MainContentContainer/>}/>
            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
            <Route path='/users/*' element={<UsersContainer/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
          </Suspense>
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
