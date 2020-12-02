import React from "react";
import m from "./Menu.module.css";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className={m.menu}>
            <div className={m.item}><NavLink to="/profile" activeClassName={m.selected}>Profile</NavLink></div>
            <div className={m.item}><NavLink to="/dialogs" activeClassName={m.selected}>Messages</NavLink></div>
            <div className={m.item}><NavLink to="/music" activeClassName={m.selected}>Music</NavLink></div>
            <div className={m.item}><NavLink to="/news" activeClassName={m.selected}>News</NavLink></div>
            <div className={m.item}><NavLink to="/settings" activeClassName={m.selected}>Settings</NavLink></div>
            <div className={m.item}><NavLink to="/users" activeClassName={m.selected}>Users</NavLink></div>
        </nav>
    );
};

export default Menu;            
                    
                
            
        
  
