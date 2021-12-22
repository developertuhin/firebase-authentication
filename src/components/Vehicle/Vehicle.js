import React from 'react';
import { useHistory } from 'react-router';

const Vehicle = (props) => {
    console.log(props);
    const {image,name} = props.vehicles
    const style ={
        // border: '1px solid black',
        borderRadius :'20px',
        margin: ' 40px',
        padding: '30px',
        backgroundColor:'#ffff',
       
    }
    const history = useHistory()
    const handleVehicle =()=>{
        console.log("Clicked vehicle");
        history.push("/transport")
    }
    return (
        <div onClick={handleVehicle} style={style} className="col-md-2 col-sm-12">

             <img style={{width:'120px'}} src={image} alt=""/>
            <h2 className="m-4">{name}</h2>


        </div>
    );
};

export default Vehicle;