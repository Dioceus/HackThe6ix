import React, {useState} from "react";
import { Link } from "react-router-dom";
import eye from "../../assets/eye.svg";
import google from "../../assets/google.svg";

const GetStarted = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const handleChange = (event) => {

    setData({...data, [event.target.name]: event.target.value});
    console.log(data);
  }

  const handleSubmit = () => {
    
    
  }

  return (
    <div className="get-started">
      <Link to="/">
        <i class="fas fa-chevron-left chevron-icon"></i>
      </Link>
      <h1>Get Started</h1>
      <p className="account-details">Account Details</p>
      <input name = "name" type="text" placeholder="Full name" onChange = {handleChange}/>
      <input name = "email" type="email" placeholder="Email Address" onChange = {handleChange}/>
      <input name = "password" type="password" placeholder="Password" onChange = {handleChange}/>
      <img src={eye} className="eye" />
      <p className="fine-text">
        By continuing, you agree to our{" "}
        <span>Terms and Conditions and Privacy Policy</span>
      </p>
      <Link to="/register">
        <button onClick = {handleSubmit} className="continue">Continue</button>
      </Link>
      <p className="fine-text">
        Don't have an account? <span>Log in</span>
      </p>
      <p className="or fine-text"> or </p>
      <button className="google">
        <img src={google} />
        Continue with Google
      </button>
    </div>
  );
};
export default GetStarted;
