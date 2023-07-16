import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import SignupScreen from './SignupScreen'

const LoginScreen = () => {
    const [signin, setSignin] = useState(false)

    return (
        <div className='loginscreen'>
            <div className="loginscreen__background">
                <img className='loginsceen_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button className='loginscreen_btn' onClick={() => { setSignin(true) }} >Sign In</button>

                <div className="loginscreen__gradient" />


            </div>
            <div className="loginscreen__body">
                {
                    signin ? (
                        <SignupScreen />
                    ) : (
                        <>
                            <h1>Unlimited films, TV programmes and more</h1>
                            <h2>NETFLIX-CLONE created by <Link to={"https://varad177.github.io/portfolio/"} className='portLink' target='_blanck'>varad</Link></h2>
                            <h3>
                                Ready to watch? Enter your email to create or restart your membership
                            </h3>

                            <div className="loginscreen_input">
                                <form >
                                    <input type="email" placeholder='Email Address' />

                                    <button onClick={() => { setSignin(true) }} className="login_getstarted">GET STARTED</button>
                                </form>

                            </div>
                        </>
                    )
                }


            </div>

        </div>
    )
}

export default LoginScreen
