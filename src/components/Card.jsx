import React from 'react'

const Card = ({weather}) => {
    if(!weather || !weather.weather[0]){
        return <h1>Loading weather data</h1>
    }
  return (
    <div>
      <p>Feb 23, 07:00am</p>
      <h2> {weather.name || 'N/A'} </h2>
      <h3 className='d-flex justify-content-center align-items-center'> <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" /> {weather.main?.temp ?? 'N/A'} °C</h3>
      <div>
        <p> {weather.wind?.speed ?? 'N/A'} </p>
        <p> {weather.main?.humidity ?? 'N/A'} </p>
      </div>
    </div>
  )
}

export default Card
