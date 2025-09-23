import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex justify-between">
        <p>Logo</p>
        <div className="flex h-15 justify-center">
            <button className="btn w-20 h-10 bg-green-400 p-1.5 rounded-3xl"><Link to='/'>Farmer</Link></button>
            <button className="btn w-30 h-10 bg-green-400 p-2 rounded-3xl"><Link to='/Government'>Governmet</Link></button>
        </div>
        <button className="bg-blue-400 h-10 w-20 rounded-2xl">Sign in</button>
        </div>
    )
}