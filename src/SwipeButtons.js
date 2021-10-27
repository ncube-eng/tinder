import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './SwipeButtons.css';
import { IconButton } from '@mui/material';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton >
                <ReplayIcon fontSize="large"  className="swipeButtons_repeat"/>
            </IconButton>
            <IconButton >
                <CloseIcon fontSize="large" className="swipeButtons_left" />
            </IconButton>
            <IconButton >
                <StarRateIcon fontSize="large" className="swipeButtons_star"/>
            </IconButton>
            <IconButton >
                <FavoriteIcon fontSize="large" className="swipeButtons_right"/>
            </IconButton>
            <IconButton >
                <FlashOnIcon fontSize="large" className="swipeButtons_lightning" />
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
