import React, { useEffect, useState } from 'react'
import {withStyles} from "@material-ui/core/styles"
import axios from "./../axios"
import requests from "./../Request"

 

function Banner( ) {
    
    return (
        <header className={classes.banner} style={{
            backgroundSize :"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}>
      
                
        </header>
    )
}

export default Banner;
