import React from 'react';

const Login = () => {
    return (
        <div className="w-25">
         <form action="" className="ml-auto">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input className="form-control" type="text"/>
            </div>
            <div className="form-group"> 
                <label htmlFor="name">Password</label>
                <input className="form-control" type="text"/>
            </div>
         </form>
           
        </div>
    );
};

export default Login;