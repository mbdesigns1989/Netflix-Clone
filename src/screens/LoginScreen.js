import React from 'react';
import './LoginScreen.css';
import { useState } from 'react';
import SignupScreen from "./SignupScreen";


const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false)

    return (<div className="loginScreen">
        <div className="loginScreen__background">
            <img className="loginScreen__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="" />

            <button className="loginScreen__button" >
                Sign In
                </button>

            <div className="loginScreen__gradient" />
        </div>
        <div className="loginScreen__body">
            {signIn ? (
                <SignupScreen />
            ) : (

                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                    <div className="loginScreen__input">
                        <form >
                            <input type="email" placeholder="Email address" />
                            <button className="loginScreen__getStarted" onClick={(e) => {
                                e.preventDefault()
                                setSignIn(true)
                            }}>GET STARTED</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    </div>
    )
}


export default LoginScreen;