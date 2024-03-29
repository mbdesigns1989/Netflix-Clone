import React from 'react';
import './SignupScreen.css';


const SignupScreen = () => {

    const register = (e) => {
        e.preventDefault();

    };


    const signIn = (e) => {
        e.preventDefault();

    }

    return (<div className="signupScreen">
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={signIn}>Sign In</button>
            <h4>
                <span className="signupScreen__gray"> New to Netflix? </span>
                <span className="signupScreen__link" onClick={register}> Sign Up Now </span>
            </h4>
        </form>
    </div>
    )
};

export default SignupScreen;