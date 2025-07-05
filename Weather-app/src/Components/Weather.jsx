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
  const search = async(city)=>{
    try{
      const url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${ef836e6b4119eb720bf8897b76954068}`
      const response = await fetch(url);
      const data =response.json();
    }catch(error){

    }
  }
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
              <p>90%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={windy}></img>
            <div>
              <p>3.5Km/h</p>
              <span>Wind speed</span>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default  Weather
 