import React, { useEffect } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player.js";
import { useDataLayer } from "./DataLayer.js";

const spotify= new SpotifyWebApi();

function App() {

const [{user, token}, dispatch]= useDataLayer();


useEffect(()=>{
  const hash=getTokenFromUrl();
  window.location.hash="";
  const _token=hash.access_token;
  console.log("I got a token ---->",_token);

  if(_token){

    dispatch({
      type:"SET_TOKEN",
      token:_token,

    });
    spotify.setAccessToken(_token);

    spotify.getMe().then((user)=>{
      dispatch({
        type:"SET_USER",
        user:user,
      });
    });

    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type:"SET_PLAYLISTS",
        playlists:playlists,
      });
    });

    spotify.getPlaylist('37i9dQZEVXcGMFozezjFzX').then((response)=>{
      dispatch({
        type:'SET_DISCOVER_WEEKLY',
        discover_weekly:response,
      })
    });
  } 
},[]);




return (
  <div className="app">
    {
      token ? <Player spotify={spotify}/> :<Login/>
    }
    
  </div>
);
}

export default App;
