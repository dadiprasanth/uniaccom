import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <div>
        <div className="header">
            <div className='logo'>
            {/* <i class="fa-brands fa-airbnb"></i> */}
            <img src="airbnd.png" alt="logo"/>

            </div>
            <div></div>
            <div className='headright'>
                <div>Become a host</div>
                <div><i class="fa-solid fa-globe"></i></div>
                <div className='headeruser'>
                  <div><i class="fa-solid fa-bars"></i></div>
                  <div><i class="fa-solid fa-user"></i></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
