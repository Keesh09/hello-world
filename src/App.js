import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Search from "./components/Search.jsx";
import Card from "./components/Card.jsx";
import axios from "axios";

function App() {
  
  const [weather, setWeather]= useState([]);
  const [city, setCity]= useState('New York');

const fetchData= async()=> {

  const appKey= `963f057264bc184bb35d4e2daa180b5e`;

  try{
    const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=metric`);    
    setWeather(res.data);
    console.log(res.data)
  }
  catch(err){
    console.error(err);
  }
}

const handleSearch =async(cityName)=> {
  setCity(...city, cityName);
}

useEffect(()=> {
  fetchData();
}, [])

  return (
    <>
      <div className="w-full bg-gray-200 d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h1>Weather App</h1>
        <div className="shadow-lg d-flex flex-column align-items-center py-5 gap-4" style={{minWidth: 500}}>
          <Search handleSearch={handleSearch} />
          <Card weather={weather} />
        </div>
      </div>
    </>
  )
}

export default App;
