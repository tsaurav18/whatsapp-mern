import React from 'react'
import { useStateValue } from '../StateProvider';
import "../css/Navbar.css"
import {Link,useHistory } from "react-router-dom"
import { auth } from '../firebase';

function Navbar() {
    const [{user}, dispatch]= useStateValue()
        const history = useHistory()
    const handleAuthentication=()=>{
            if(user){

            auth.signOut()
            history.push('/')
            }
    }
    return (
        <div className="navbar">
        <div className="navbar-container container">

             <li className="nav-btn">
                <Link to={!user && "/"} className="btn-link">
                  <div
                    className="header__option"
                    onClick={handleAuthentication}
                  >
                    <span className="header__optionLineOne">
                      Hello {!user ? "Guest" : user.displayName}
                    </span>

                    <span className="header__optionLineTwo">
                      {user ? "Sign Out" : "Sign IN"}
                    </span>
                  </div>
                </Link>
              </li>
        </div>
        </div>
    )
}

export default Navbar
