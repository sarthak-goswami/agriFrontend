import React from 'react';
import {useState} from 'react';


export default function Weather() {
    const [temperature,setTemperature]= useState(25);
    const [presipitation,setPresipitation]= useState(60);
    const [condition,setCondition]= useState('sunny');
    const [city,setCity]= useState('delhi');
    const [wind,setWind]= useState(120)
  // pick icon based on condition
  

  return (
    <div className="max-w-sm p-4 w-1/2 rounded-2xl shadow bg-white flex flex-col items-center gap-2">
      <h1>Weather</h1>
      <h2 className="text-gray-700 font-medium">{city}</h2>
      
      <p className="text-3xl font-bold text-gray-800">{temperature}°C</p>
      <p className="text-sm text-gray-500 capitalize">{condition}</p>
      <p>{presipitation}</p>
      <p>{wind} km/h</p>
    </div>
  )
}


