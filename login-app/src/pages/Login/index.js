import React, {useState} from 'react'
import './login.css'

import { MdEmail, MdLock } from "react-icons/md";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/3408/3408455.png" 
                alt="Login App"/>
            </div>

            <div className="login-right">
                <h1>Acessar o App</h1>

                <div className="login-loginInputEmail">
                    <MdEmail/>
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock/>
                    <input 
                    placeholder="Password"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? (
                            <MdVisibility 
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                            <MdVisibilityOff 
                                size={20}
                                onClick={handleClick}
                            />
                        )}
                    </div>
                </div>

                <button type="submit">
                    Entrar
                </button>

                <h4>Não tenho conta</h4>

                <button type="submit">
                    Cadastrar
                </button>
            </div>
        </div>
    )
}

export default Login