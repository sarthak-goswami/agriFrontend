import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex m-2 justify-between">
        <p>Logo</p>
        <div className="flex h-15 w-100 justify-evenly">
            <button className="btn w-40 h-9 bg-green-500 text-white  p-1.5 rounded-xl hover:bg-green-300"><Link to='/'><b>Farmer Dashboard</b></Link></button>
            <button className="btn w-40 h-9 bg-green-500 text-white p-1.5 rounded-xl hover:bg-green-300"><Link to='/Government'><b>Governmet Portal</b></Link></button>
        </div>
        <button className="bg-blue-400 w-20 h-9 rounded-2xl hover:bg-blue-300"><Link to='/Login'>sign up</Link></button>
        </div>
    )
}