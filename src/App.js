import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/content/Profile';
import Menu from './components/menu/Menu';
import Dialogs from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/settings/Settings';
import Music from './components/music/Music';
import News from './components/news/News';
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UserContainer from "./components/content/users/UserContainer";

const App = (props)=> {
     return (

      <div className='app-wrapper'>
        <Header/>
        <Menu/>
        <div className='app-wrapper-content'>
        <Route path='/profile' render={()=> <Profile />} />
        <Route path='/dialogs' render={()=> <DialogsContainer />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/users' render={()=> <UserContainer />}/>
        </div>
      </div>

  );
}

export default App;
