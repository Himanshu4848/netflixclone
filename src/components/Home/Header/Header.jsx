import React from 'react'
import logo from "./Logonetflix.png"
import {Link} from "react-router-dom"
import { ImSearch } from "react-icons/im";
const Header = () => {
  return (
     <nav className='header'> 
       <img src={logo} alt="" />
       <div>
         <Link to="/tvshows">TV shows</Link>
         <Link to="/tvshows">Movies</Link>
         <Link to="/tvshows">Recently Added</Link>
         <Link to="/tvshows">My List</Link>
       </div>
        <ImSearch/>
     </nav>
  )
}

export default Header
