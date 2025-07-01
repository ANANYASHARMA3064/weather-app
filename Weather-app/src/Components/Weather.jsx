import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import snow from '../assets/snow.png'
import windy from '../assets/windy.png'
const Weather  = () => {
  return (
    <div className="weather">
        <div className="searchbar">
            <input type="text" placeholder='search'/>
            <img id="search" src={search_icon}/>
           
        </div>
        <img src={clear} alt="" className='weather-  icon'></img>
        <p>16°</p>
        <p>London</p>
        
    </div>
  )
}

export default  Weather
 