import React from 'react';

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
    const handleVehicle =()=>{
        console.log("Clicked vehicle");
    }
    return (
        <div onClick={handleVehicle} style={style} className="col-md-2 col-sm-12">

             <img style={{width:'120px'}} src={image} alt=""/>
            <h2 className="m-4">{name}</h2>


        </div>
    );
};

export default Vehicle;