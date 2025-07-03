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
        <img src={clear} alt="" className='weather-icon'></img>
        <p className='temperature'>16°C</p>
        <p className='location'>London</p>
        <div className="weather-data">
          <div className="col">
            <img src={humidity}></img>
            <div>
              <p>91%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={windy}></img>
            <div>
              <p>3.6 Km/h</p>
              <span>Wind speed</span>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default  Weather
 