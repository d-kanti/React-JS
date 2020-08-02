
//es-7 snipest 'rfce'  shortcut---


import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className= "header">
            <div className="Header__left">
                <MenuIcon/>
                <img className="Header__logo" src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" />
                
            </div>
            
            <div className="Header__input">           
                <input placeholder="Search" type='text' />
                <SearchIcon className="Header__SearchButton" />
            </div>
                
            <div className="Header__right">
                <VideoCallIcon className="Header__icon" />
                <AppsIcon className="Header__icon" />
                <NotificationsIcon className="Header__icon" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"/>

            </div>
            

        </div>
    )
}

export default Header
