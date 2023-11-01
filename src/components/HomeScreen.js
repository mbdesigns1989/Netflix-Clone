import React from 'react'
import Nav from "./Nav"
import {withStyles} from "@material-ui/core/styles"
import Banner from "./Banner"
import Row from './Row'
import requests from "./../Request"

const styles ={}

function HomeScreen() {
    return (
        <div>
           <Nav/>
          <Banner/>
          
        </div>
    )
}

export default HomeScreen;
