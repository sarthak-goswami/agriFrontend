import AIRec from "./Farmer/AIRec";
import Stats from "./Farmer/Stats";
import Weather from "./Farmer/Weather";

export default function Farmer(){
    return (
        
        <div className="flex flex-col justify-between w-100%">
            <h1>Farmer Dashboard</h1>
            <div className="flex flex-col gap-7">
                <Stats/>
                <div className="flex justify-evenly ">
                    <AIRec/>
                    <Weather/>
                </div>
            </div>
        </div>
        
    )
}