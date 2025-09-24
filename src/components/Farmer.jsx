import AIRec from "./Farmer/AIRec";
import Analytics from "./Farmer/Analytics";
import Stats from "./Farmer/Stats";
import Weather from "./Farmer/Weather";

export default function Farmer(){
    return (
        
        <div className="flex flex-col bg-gray-100 justify-between w-100%">
            <h1 className="text-green-950 text-3xl m-5 mb-0 font-bold">Farmer Dashboard</h1>
            <p className="text-green-700 m-5 mt-0">Regional agricultural insights and policy support</p>
            <div className="flex flex-col gap-7">
                <Stats/>
                <div className="flex justify-evenly h-90">
                    <AIRec/>
                    <Weather/>
                </div>
                <Analytics/>
            </div>
        </div>
        
    )
}