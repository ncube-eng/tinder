import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            
            <IconButton >
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img width="40" height="40" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.dcca8zZvLs2lYnWwdjSslQHaHa%26pid%3DApi&f=1"  alt=""></img>
            <IconButton >
            <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header
