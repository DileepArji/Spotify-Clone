import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


function Footer() {
  return (
    <div className='footer'>
        <div className='footer_left'>
            <img className='footer_albumlogo'
             src="data:image/jpeg;base64,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" alt="jersey poster"/>
            <div className="footer_songinfo">
                <h4>Adigaa</h4>
                <p>Hi Nanna</p>
            </div>
        </div>


        <div className='footer_center'>
            <ShuffleIcon className='footer_green'/>
            <SkipPreviousIcon className='footer_icon' />
            <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
            <SkipNextIcon className='footer_icon'/>
            <RepeatIcon className='footer_green'/>
        </div>


        <div className='footer_right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider/>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}

export default Footer;