import React, { useContext, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Login = ({ setShowLogin }) => {
   const { url, setToken } = useContext(StoreContext);
   const [currState, setCurrState] = useState("Anmelden");
   const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
   });

   const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({ ...data, [name]:value }));
   };

   const onLogin = async (event) => {
      event.preventDefault();

      let newUrl = url;
      if (currState === "Anmelden") {
         newUrl += "/api/user/login";
      } else {
         newUrl += "/api/user/register";
      }

      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      }
      else {
        alert(response.data.message);
      }
   };

   return (
      <div className="login">
         <form onSubmit={onLogin} className="login-container">
            <div className="login-title">
               <h2>{currState}</h2>
               <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt=""/>
            </div>

            <div className="login-inputs">
               {currState === "Anmelden" ?<></>
                : 
                  <input
                     name="name"
                     onChange={onChangeHandler}
                     value={data.name}
                     type="text"
                     placeholder="Ihr Name"
                     required
                  />
               }

               <input
                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                  type="email"
                  placeholder="Ihre E-Mail"
                  required
               />
               <input
                  name="password"
                  onChange={onChangeHandler}
                  value={data.password}
                  type="password"
                  placeholder="Passwort"
                  required
               />
            </div>

            <button type="submit">
               {currState === "Registrieren" ? "Konto erstellen" : "Anmelden"}
            </button>

            <div className="login-condition">
               <input
                  type="checkbox"
                  required
               />
               <p>
                  Indem ich fortfahre, stimme ich den Nutzungsbedingungen und
                  dem Datenschutz zu.
               </p>
            </div>
            {currState === "Anmelden" 
            ? <p>Ein neues Konto erstellen?<span onClick={() => setCurrState("Registrieren")}>klicken Sie hier</span></p>
            : <p>Sie haben bereits ein Konto?<span onClick={() => setCurrState("Anmelden")}>Hier anmelden</span></p>
            }
         </form>
      </div>
   );
};

export default Login;
