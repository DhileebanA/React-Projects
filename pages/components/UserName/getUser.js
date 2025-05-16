import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export function GetUserData(){
    function login(event){
        event.preventDefault()
        var fname=document.getElementById("fname").value
        var lname=document.getElementById("lname").value
        var mob=document.getElementById("mob").value
        var email=document.getElementById("email").value
        var city=document.getElementById("city").value
        var state=document.getElementById("state").value
        var pass=document.getElementById("pass").value

        var key={
            fname:fname,
            lname:lname,
            mob:mob,
            email:email,
            city:city,
            state:state,
            password:pass
        }

        if(fname==''){
            alert("Enter your First name")
        }
        else if(lname==''){
            alert("Enter your Last name")
        }
        else if(mob==''){
            alert("Enter your Mobile")
        }
        else if(email==''){
            alert("Enter your Email")
        }
        else if(city==''){
            alert("Enter your City")
        }
        else if(state==''){
            alert("Enter your State")
        }
        else if(pass==''){
            alert("Enter the Password")
        }
        else{
            axios.post("http://localhost:3005/regform",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not inserted")
                    window.location.reload()
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                    window.location.href='/loginpage'
                }
            })
        }
    }
    return(
        <>
        <h1 className="text-center m-4">Register Page</h1>
        <div className="d-flex justify-content-center">
        <form onSubmit={login}>
            <table className="table table-dark table-striped table hover">
                <tbody>
                    <tr>
                        <td><label>First Name</label></td>
                        <td><input type="text" id="fname"/></td>
                    </tr>
                    <tr>
                        <td><label>Last Name</label></td>
                        <td><input type="text" id="lname"/></td>
                    </tr>
                    <tr>
                        <td><label>Mobile Number</label></td>
                        <td><input type="tel" id="mob" pattern="[0-9]{10}"/></td>
                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input type="email" id="email"/></td>
                    </tr>
                    <tr>
                        <td><label>City</label></td>
                        <td><input type="text" id="city"/></td>
                    </tr>
                    <tr>
                        <td><label>State</label></td>
                        <td><input type="text" id="state"/></td>
                    </tr>
                    <tr>
                        <td><label>Create a Password</label></td>
                        <td><input type="password" id="pass"/></td>
                    </tr>
                </tbody>
            </table>
            <div className="text-end">
                <button className="btn btn-dark" type="submit">Submit</button>
            </div>
            <div className='text-center'>
                <Link to="/loginpage"><span className='text-dark text-center'>Login Page</span></Link>
            </div>
            </form>
            </div>
        </>
    );
}