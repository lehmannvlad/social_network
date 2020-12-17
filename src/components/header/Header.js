import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props)=> {
    return (

        <header className={h.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9-xWpSNzOqyQAq-Ey52KeZBIgkiI7C7qLIA&usqp=CAU"></img>
            <div className={h.loginBlock}>
                {props.isAuthorized ? props.login :<NavLink to="/login">Sign In</NavLink>}
            </div>

        </header>


    );
  }

  export default Header