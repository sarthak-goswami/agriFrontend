import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="flex m-2 justify-between">
        <p>Logo</p>
        <div className="flex h-15 w-70 justify-evenly">
            <button className="btn w-20 h-9 bg-green-400  p-1.5 rounded-3xl hover:bg-green-300"><Link to='/'>Farmer</Link></button>
            <button className="btn w-30 h-9 bg-green-400 p-2 rounded-3xl hover:bg-green-300"><Link to='/Government'>Governmet </Link></button>
        </div>
        <button className="bg-blue-400 h-10 w-20 rounded-2xl hover:bg-blue-300">Sign in</button>
        </div>
    )
}