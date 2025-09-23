import { useState } from "react";


export default function Stats(){
    const [cropHealth,setCropHealth] = useState(70);
    const [waterLevel,setWaterLevel] = useState(50);
    const [soilMoisture,setSoilMoisture]= useState(80);
    const [temperature,setTemperature]= useState(25);

    return (
        <>
        <div className="flex justify-between h-45">
            <div className="max-w-sm w-3/13 p-4 rounded-2xl shadow-xl bg-white border-l-4 border-green-500">
                <h1>Crop health</h1>
                
                <p>{cropHealth}%</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                    <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${cropHealth}%` }}
                ></div>
                </div>
            </div>
            <div className="max-w-sm w-3/13 p-4 rounded-2xl shadow-xl bg-white border-l-4 border-blue-500">
                <h1>Water Level</h1>
                
                <p>{waterLevel}%</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                    <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${waterLevel}%` }}
                ></div>
                </div>
            </div>
            <div className="max-w-sm w-3/13 p-4 rounded-2xl shadow-xl bg-white border-l-4 border-red-900">
                <h1>Soil Moisture</h1>
                
                <p>{soilMoisture}%</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                    <div
                    className="bg-red-900 h-2.5 rounded-full"
                    style={{ width: `${soilMoisture}%` }}
                ></div>
                </div>
            </div>
            <div className="max-w-sm w-3/13 p-4 rounded-2xl shadow-xl bg-white border-l-4 border-orange-400">
                <h1>Temperature</h1>
                
                <p>{temperature} C</p>
            </div>
        </div>
        </>
    )
}