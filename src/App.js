import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import {Redirect, BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/settings/Settings';
import Music from './components/music/Music';
import News from './components/news/News';
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UserContainer from "./components/content/users/UserContainer";
import ProfileContainer from "./components/content/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import React from "react";


const App = (props)=> {

    return (

      <div className='app-wrapper'>
        <HeaderContainer/>
        <Menu/>
        <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={()=> <ProfileContainer />} />
        <Route path='/dialogs' render={()=> <DialogsContainer />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/users' render={()=> <UserContainer />}/>
        <Redirect from='/' to='/profile'/>
        </div>
      </div>

  );
}

export default App;
