import React, {useState} from 'react'
import { fetchWeather } from './api/fetchWeather'
import './App.css'

export const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})


    const search = async (e) => {
        if(e.key === 'Enter'){
    const data = await fetchWeather(query)
    setWeather(data)
    setQuery('')
}

    }
    
    const search1 = async (e) => {
       
    const data = await fetchWeather(query)
    setWeather(data)
    setQuery('')

    }


    return (
        <div className='main-container'>
     <div className="header"><h1>PWA React Weather App</h1>
     <h2>Get the latest Weather updates <br /> from Cities all over the World</h2></div>
        <input
        type='text'
        className='search'
        placeholder='Enter City Name'
        value={query}
        onChange={(e) =>setQuery(e.target.value)}
        onKeyPress={search}
        />
        <button className="btn" onClick={search1}>Search</button>
        {
            weather.main && (
                <div className='city'>
                <h2 className='city-name'>
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
                </h2>
                  <div className='city-temp'>
                  {Math.round(weather.main.temp)}
                  <sup>&deg;C</sup>
                  </div>
                    <div className='info'>
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )
        }
        </div>
    )
}
