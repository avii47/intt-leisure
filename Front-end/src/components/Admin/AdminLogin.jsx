import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../firebase"; 
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import "./AdminLogin.css";
import img from "../../assets/images/adminLogin-img.jpg";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let [storedValues, setStoredValues] = useState([]);

  const navigate = useNavigate();
  const db = getFirestore();

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Admin"));
      const temporaryArr = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.Email === email && data.Password === password) {
          temporaryArr.push(data);
        }
      });

      if (temporaryArr.length > 0) {
        navigate("/dashboard")
      } else {
        alert("Invalid email or password");
      }

      setStoredValues(temporaryArr);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");

    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }

    if(passwordError == "") {
        fetchDataFromFirestore();
    }
  };

  return (
    <div className={"mainContainer"}>
      <img src={img} style={{ height: "400px" }} alt="" />
      <div className={"titleContainer"}>
        <div>Admin Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <div className="form-group">
          <input
            className="form-control form-control-sm admin-login-input"
            type="text"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder=""
          />
          <label className="label-text">Email</label>
          <label className="errorLabel">{emailError}</label>
        </div>
      </div>
      <br />
      <div className={"inputContainer"} style={{ marginTop: "-10px" }}>
        <div className="form-group">
          <input
            className="form-control form-control-sm admin-login-input"
            type="passowrd"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder=""
          />
          <label className="label-text">Password</label>
          <label className="errorLabel">{passwordError}</label>
        </div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton btn btn-primary"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
    </div>
  );
};

export default Login;
