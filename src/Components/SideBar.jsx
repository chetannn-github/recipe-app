import React from 'react'
import { Link } from 'react-router-dom'
import "../Stylesheets/SideBar.css"
import { Heart, Home } from 'lucide-react'

const SideBar = () => {
  return (
  <>
    <div id="desktop-side-bar">
      <div id="logo">
        <img src="./logo.svg" alt="" />
      </div>
      <div id="navigation">
        <div className="nav"><Link to={`/`}><Home />Home</Link></div>
        <div className="nav"><Link to={`/favs`}><Heart />Favourites</Link></div>
        
      </div>
    </div>

    <div id="mobile-side-bar">
        <div id="navigation">
        <div className="nav"><Link to={`/`}><Home /></Link></div>
        <div className="nav"><Link to={`/favs`}><Heart /></Link></div>
        
      </div>
    </div>
</>

  )
}

export default SideBar