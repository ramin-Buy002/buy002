import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authcontext'
import { doSignOut } from '../../configuration/auth'
import "./index.css"

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
      <div>
      
        <nav >
            {
                userLoggedIn
                    ?
                    <>
                        <div > </div>
                    </>
                    :
                    <>
                      <div   className='header'  >
                        <Link   to={'/login'}>Login</Link>
                        <Link   to={'/register'}>Register New Account</Link>
                        </div>
                
                    </>
            }

        </nav>
       </div>  
     
    )
}

export default Header