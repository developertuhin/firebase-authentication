import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.Config";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);;
}

const labelStyle = {
  fontSize: "28px",
  color:'gold'
};
const submitButtonStyle = {
  padding: "5px 10px",
  backgroundColor: "lime",
  fontSize: "18px",
  color: "#000",
  borderRadius: "10px",
  border: "none",
};

var provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  // Google SignIn
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        console.log(user.displayName,user.email);
        
      })
      .catch((error) => {
        var errorMessage = error.message;
        var email = error.email;
        console.log(errorMessage,email);
      });
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error:false ,
    success: true
  });
  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFormValid = e.target.value.length > 6;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(res =>{
          const newUserInfo = { ...user}
          newUserInfo.error = "";
          newUserInfo.success =true;
          setUser(newUserInfo);
        })
        .catch( error => {
          const newUserInfo = {...user}
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          console.log(error.message);
        })
      }
    e.preventDefault();
  };

  return (
    <div className="w-50   m-auto bg-dark text-white p-5 m-5">
      <form action="" className="ml-auto">
        <div className="form-group">
          <label style={labelStyle} htmlFor="name">
            Name
          </label>
          <input
            onBlur={handleBlur}
            name="name"
            className="form-control"
            type="text"
            placeholder="your name"
            required
          />
        </div>
        <div className="form-group">
          <label style={labelStyle} htmlFor="name" placeholder="your name">
            Email
          </label>
          <input
            onBlur={handleBlur}
            className="form-control"
            type="text"
            name="email"
            placeholder="your email"
            required
          />
        </div>
        <div className="form-group">
          <label style={labelStyle} htmlFor="name">
            Password
          </label>
          <input
            onBlur={handleBlur}
            name="password"
            className="form-control"
            type="password"
            placeholder="your password"
            required
          />
        </div>
        <div>
          <input
            onClick={handleSubmit}
            style={submitButtonStyle}
            type="submit"
            value="SignUp"
          />
        </div>
        <p style={{color:'red',textAlign:'center'}}>{user.error}</p>
        {
          user.success && <p style={{color:'lime',textAlign:'center'}}>User created Successfully</p>
        }

        <br/>
        {/* <p>
          Already have an account ?{" "}
          <a href="" className="text-danger">
            Login
          </a>
        </p> */}
      </form>
      <br />

      <button onClick={handleGoogleSignIn} className="btn btn-danger px-5 w-100">SignIn With Google</button>
     
    </div>
    
  );
};

export default Login;
