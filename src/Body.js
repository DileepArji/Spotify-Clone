import React from 'react';
import "./Body.css";
import Header from './Header';
import { useDataLayer } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Songrow from './Songrow';

function Body({spotify}) {

  const[{discover_weekly}, dispatch]= useDataLayer();
  console.log(discover_weekly);

  return (
    <div className='body'>
        <Header spotify={spotify}/>
        
        <div className="body_info">
            <img src={discover_weekly?.images[0].url} alt=""/>
            <div className="body_infotext">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>

        <div className='body_songs'>
            <div className='body_icons'>
               <PlayCircleFilledIcon className='body_shuffle'/>
               <FavoriteIcon fontSize='large'/>
               <MoreHorizIcon/>    
            </div>

            {/* list of songs */}
            {discover_weekly?.tracks.items.map((item)=>(
                <Songrow track={item.track}/>
            ))}
        </div>
    </div>
  );
}

export default Body;