import React from 'react';
import './SignupScreen.css';
import { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase';



const SignupScreen = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault();

        const auth = getAuth(app);

        createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
            auth
        ).then((userCredential) => {
            const user = userCredential.user;
            console.log(user)

        }).catch((error) => {

            alert(error.message);

        })
    };



    const signIn = (e) => {
        e.preventDefault();

    }

    return (<div className="signupScreen">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email address" />
            <input ref={passwordRef} type="password" placeholder="Password" />
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