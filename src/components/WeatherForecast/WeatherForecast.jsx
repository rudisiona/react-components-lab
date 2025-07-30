import React from 'react'

const WeatherForecast = ({ day, imageSrc, imageAlt, conditions, time }) => {
  return (
    <div className="weather"> 
    <h1>WeatherForecast</h1>
    <h2>{day}</h2>
    <img src={imageSrc} alt={imageAlt} />
    <p><span>Conditions: </span>{conditions}</p>
<p><span>Time: </span>{time}</p>
    </div>

  )
}
export default WeatherForecast;
