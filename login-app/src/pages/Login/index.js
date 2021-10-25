import React from 'react'
import './login.css'
import { MdEmail, MdLock } from "react-icons/md";

function Login() {
    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/3408/3408455.png" 
                alt="Login App"/>
            </div>

            <div className="login-right">
                <h1>Acessar o App</h1>

                <div className="loginInputEmail">
                    <MdEmail/>
                    <input 
                    type="text"
                    placeholder="Email"
                    />
                </div>

                <div className="loginInputPassword">
                    <MdLock/>
                    <input 
                    type="text"
                    placeholder="Password"
                    />
                </div>

            </div>
        </div>
    )
}

export default Login