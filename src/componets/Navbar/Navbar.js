import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {

    return (
        <div className={c.nav}>

            <nav>
                <div className={c.item}>
                    <NavLink activeClassName={c.active_item} to="/profile">Profile</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink activeClassName={c.active_item} to="/dialogs">Message</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink activeClassName={c.active_item} to="/news">News</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink activeClassName={c.active_item} to="/music">Music</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink activeClassName={c.active_item} to="/settings">Settings</NavLink>
                </div>
            </nav>

            <Friends friendsList={props.state} />

        </div>

    );
}

export default Navbar;
