import React from 'react'



const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 className="navbar-logo">
                Oluwole<span className="color-1">-young</span>
            </h2>
            <div className="navbar-btn">
                <button to={"/"} className="btn black-white-btn">All Repos</button>
                <button to={"/"} className="btn color-2-black-btn">New Repo</button>
            </div>
    </div>
  )
}

export default Navbar