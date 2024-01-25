import React from 'react';
import "./Nav.css";
import { useState, useEffect } from 'react';


const Nav = () => {
    const [show, handleshow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 400) {
            handleshow(true)
        } else {
            handleshow(false)
        }
    }

    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        window.addEventListener("scroll", transitionNavBar);
        // eslint-disable-next-line no-restricted-globals
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
            <img
                className="nav__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="" />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                alt="" />

        </div>

    </div>;
}

export default Nav;
