import './FirstScreen.css'
import {useEffect, useState} from "react";
import axios from 'axios';
import mySvg from '../../resources/header.svg'
//import ScrollBar from '../scrollBar/ScrollBar';

const FirstScreen =() => {
   
    return (
        <div className='headerBlock'>
            <img className='headerSvg' src={mySvg} alt='svg'/>
          
        </div>
    )
}
export default FirstScreen;