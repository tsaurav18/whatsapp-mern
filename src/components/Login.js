import React, {useState}from 'react'
import "../css/Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from '../firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((userAuth)=>{
         
          userAuth.user.updateProfile({
            displayName: name
          })
             if(userAuth){
             
                history.push('/home');
            }
        }) .catch((error) => alert(error.message));
    

    }

    const signIn =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth)=>{
            if(auth){
                history.push('/home')
            }else{
                history.push('/')
            }
        }).catch((error)=>alert(error.message))
    }

    return (
        <div className="login">
            
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>

        <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <button onClick={register} className="login__registerButton">
          Create your Account
        </button>
      </div>
        </div>
    )
}

export default Login
