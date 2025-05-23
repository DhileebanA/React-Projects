import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Welcome from "./welcome";
import axios from "axios";

export default function Login() {
    const [username,setName] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();
        if(!username && !password){
            alert("Enter correctly");
        }
        else{
            axios.post("http://localhost:5000/login",{username,password})
                .then(res=>{
                    console.log(res.data)
                    navigate("/dashboard")
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={()=>handleLogin(event)} className="w-fit">
                    <h1 className="mb-[50px] text-3xl text-cyan-700 font-bold">Welcome to Login</h1>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                        <input type="text" required placeholder="Username" minlength="3" maxlength="30" title="Only letters, numbers or dash" onChange={(e)=>setName(e.target.value)} />
                    </label>
                    <p className="validator-hint">
                        Must be 3 to 30 characters
                        <br />containing only letters, numbers or dash
                    </p>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                        <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" onChange={(e)=>setPassword(e.target.value)} />
                    </label>
                    <p className="validator-hint hidden">
                        Must be more than 8 characters, including
                        <br />At least one number
                        <br />At least one lowercase letter
                        <br />At least one uppercase letter
                    </p>
                    <div>
                        <button type="submit" className="btn bg-white text-black border-[#e5e5e5] mt-7 w-full">
                            <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            Login with Email
                        </button>
                    </div>
                    <div>
                        <h1>Don't have account? <Link to="/register" ><button className="link link-hover">Register here</button></Link></h1>
                    </div>
                </form>
            </div>
        </>
    )
}