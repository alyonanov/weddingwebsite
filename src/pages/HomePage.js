import './HomePage.css'
import {useEffect, useState} from "react";
import axios from 'axios';
import FirstScreen from '../components/firstpage/FirstScreen.js';
import Info from '../components/info/Info.js';
import TableSeat from '../components/tableseat/TableSeat.js';
import Maps from '../components/maps/Maps.js';
import ScrollBar from '../components/scrollBar/ScrollBar.js';

const HomePage =() => {

    useEffect (() => {
        axios.get(`https://64aaeacd0c6d844abedefaf6.mockapi.io/api/v1/guests/1`).then(res => {
        });
    }, []);
    const [coordinate, setCoordinate] = useState([54.855040, 26.862457]);
    console.log(coordinate);

   
    return(
        <div >
            <div className="homepage">
                <ScrollBar/>
                <FirstScreen/>
                <Info/>
                <TableSeat/>
                <Maps coordinate={coordinate}/>

            </div>         
        </div>
    )
}

export default HomePage;
