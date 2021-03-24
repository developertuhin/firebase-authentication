import React, { useState } from 'react';
import vehicleData from '../../data/data.json';
import Vehicle from '../Vehicle/Vehicle';
const Home = () => {

    return (
   
    <div className="container">
        <div className="row">
            {
                vehicleData.map( (vehicle) =><Vehicle vehicles={vehicle}></Vehicle>)
            }
        </div>
    
    </div>



    );
};

export default Home;