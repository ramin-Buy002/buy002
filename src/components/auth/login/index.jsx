import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword  } from '../../../configuration/auth'
import { useAuth } from '../../../contexts/authcontext'
import "./index.css"
import email_pic  from "./../../../assets/email.png"
import password_icon  from "./../../../assets/login-password.png"

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
        
    }
 

    return (
        <div className='bg-blue-950 ' >
            <div  className='container'>

                        {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
                                        <div className='h-50 bg-blue-950' ></div>
                                        <div   className='header'  >
                                            <div  className='text' >
                                                <Link   to={'/login'}>Login</Link>
                                            </div>   
                                            <div  className='text01' >   
                                                <Link   to={'/register'}>Register New Account</Link>
                                            </div>
                                        </div>
                            <div  >
                        
                                <form
                                    onSubmit={onSubmit}
                                    className="space-y-5"
                                >
                                <div  className="container02 " >   
                                <div className="inputs">  
                                    <div className="input">
                                        <img className='input_img_email' src={email_pic}  alt='' />
                                        <input
                                            type="email"
                                            autoComplete='email'
                                            required
                                            value={email} onChange={(e) => { setEmail(e.target.value) }}
                                            className="w-full   px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                        />
                                    </div>


                                    <div  className="input" type="text" placeholder="password">
                                    <img className='input_img_password' src={password_icon}  alt='' />
                                        
                                        <input
                                            type="password"
                                            autoComplete='current-password'
                                            required
                                            value={password} onChange={(e) => { setPassword(e.target.value) }}
                                            className="w-full   px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                        />
                                    </div>
                                </div>
                                </div>
                                    {errorMessage && (
                                        <span className=''>{errorMessage}</span>
                                    )}
                                    <div className="button_div">
                                            <button
                                                type="submit"
                                                disabled={isSigningIn}
                                                className="button_sigin">
                                                {isSigningIn ? 'Signing In...' : 'Sign In'}
                                            </button>
                                        <p className="text-Dont">Don't have an account? <Link to={'/register'} className="hover:underline font-bold">Sign up</Link></p>

                                    </div>   
                                </form>
                            
                        
                            </div>
                            <div className='h-40' ></div>
              </div>
        </div>
    )
}

export default Login