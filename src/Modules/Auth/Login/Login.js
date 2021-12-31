import React, { useEffect, useState } from 'react';
import LoginLogo from "../../../shared/images/login-logo.png"
import './Login.css'
import { PropagateLoader } from 'react-spinners';
import { login } from '../Controller/LoginController';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router';

function Login({ token, setToken, setRole}) {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({
        role: "receptionist",
        email: "",
        password: ""
    })
    
    const [validate, setValidate] = useState({
        email: {
            error: false,
            msg: ""
        },
        password: {
            error: false,
            msg: ""
        }
    })

    let navigate= useNavigate();
    const handleClick=(role)=>{
        navigate(`/${role}`)
    }

    useEffect(()=>{
        setToken(null);
        localStorage.removeItem("token")
    },[])

    const postData = async (user) => {
        setIsLoading(true);
        const {role,token,info, success, msg} = await login(user);
        if (success) {
            localStorage.setItem("role", role)
            localStorage.setItem("token", token)
            localStorage.setItem("info", info)
            setToken(token)
            setRole(role)
            handleClick(role);
        } else {
            if (msg.includes('email')) {
                setValidate({
                    ...validate, email: {
                        error: true,
                        msg: msg
                    },
                    password: {
                        error: false,
                        msg: ""
                    }
                })
            } else {
                setValidate({
                    ...validate, password: {
                        error: true,
                        msg: msg
                    },
                    email: {
                        error: false,
                        msg: ""
                    }
                })
            }
        }
        setIsLoading(false)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
        if (value !== "") setValidate({
            ...validate, [name]: {
                error: false,
                msg: ""
            }
        })
    }

    const handleValidate = (user) => {
        if (user.email === "") {
            setValidate({
                ...validate, email: {
                    error: true,
                    msg: "Please enter your email"
                }, password: {
                    error: false,
                    msg: ""
                }
            })
        } else if (user.password === "") {
            setValidate({
                ...validate, password: {
                    error: true,
                    msg: "Please enter your password"
                }, email: {
                    error: false,
                    msg: ""
                }
            })
        }
    }


    return (
        <div className="login-screen">
            <div className="login-left-layout">
                <img src={LoginLogo} style={{
                    width: "60%",
                    height: "auto",
                }} alt="login logo" />
            </div>
            <div className="login-right-layout">
                <div className="login-form">
                    <h1 style={{
                        position: "static",
                        marginLeft: 0,
                        marginBottom: 16,
                    }}>Login</h1>
                    <br></br>

                    <TextField
                        error={validate.email.error}
                        label="email"
                        name="email"
                        fullWidth
                        type="email"
                        value={user.email}
                        margin="dense"
                        variant="standard"
                        onChange={handleChange}
                        helperText={validate.email.msg}
                    />

                    <TextField
                        error={validate.password.error}
                        label="password"
                        name="password"
                        type="password"
                        fullWidth
                        value={user.password}
                        margin="dense"
                        variant="standard"
                        onChange={handleChange}
                        helperText={validate.password.msg}
                    />

                    <div style={{
                        display: 'flex',
                        flexDirection: "row",
                        justifyContent: "space-between",
                        height: 50
                    }}>
                        <button disabled={isLoading} className="login-button" onClick={() => {
                            handleValidate(user)
                            if (user.email != "" && user.password != "") {
                                postData(user)
                            }
                        }}>{(isLoading) ? <PropagateLoader color="white" size={10} /> : "Sign In"}</button>
                        <select name="role" id="role" className="login-button" onChange={handleChange}>
                            <option value="receptionist">Receptionist</option>
                            <option value="admin">Admin</option>
                            <option value="staff">Staff</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;
