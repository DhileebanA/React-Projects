import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function UpdateUserData(){
        var {id}=useParams()
        const[fname,setFname]=useState('')
        const[lname,setLname]=useState('')
        const[mob,setMob]=useState('')
        const[email,setEmail]=useState('')
        const[city,setCity]=useState('')
        const[state,setState]=useState('')
        const[pass,setPassword]=useState('')
    
        useEffect(()=>{
            fetch("http://localhost:3005/dispUser/"+id)
            .then(res=>res.json())
            .then((data)=>{
            setFname(data[0].fname)
            setLname(data[0].lname)
            setMob(data[0].mob)
            setEmail(data[0].email)
            setCity(data[0].city)
            setState(data[0].state)
            setPassword(data[0].password)
        })
        },[])
        function handleupdate(event){
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
                        city:city,
                        state:state,
                    }

            if(fname===''){
                alert("Enter your First name")
            }
            else if(lname===''){
                alert("Enter your Last name")
            }
            else if(mob===''){
                alert("Enter your Mobile")
            }
            else if(email===''){
                alert("Enter your Email")
            }
            else if(city===''){
                alert("Enter your City")
            }
            else if(state===''){
                alert("Enter your State")
            }
            else if(pass===''){
                alert("Enter the Password")
            }
            else{
                axios.put('http://localhost:3005/updatedb/'+id,key)
                .then((res)=>{
                    if(res.data.status==="error"){
                        alert("data are not Updated")
                        window.location.reload()
                    }
                    else if(res.data.status==="success"){
                        alert("data are Updated")
                        window.location.href=`/dashboard/${id}`
                    }
                })
            }
        }
        
    return(
        <>
        <h1 className="text-center m-4">Update Page</h1>
        <div className="d-flex justify-content-center">
        <form onSubmit={handleupdate}>
            <table className="table table-dark table-striped table hover">
                <tbody>
                    <tr>
                        <td><label>First Name</label></td>
                        <td><input type="text" id="fname" onChange={(event)=>setFname(event.target.value)} value={fname}/></td>
                    </tr>
                    <tr>
                        <td><label>Last Name</label></td>
                        <td><input type="text" id="lname" onChange={(event)=>setLname(event.target.value)} value={lname}/></td>
                    </tr>
                    <tr>
                        <td><label>Mobile Number</label></td>
                        <td><input type="tel" id="mob" onChange={(event)=>setMob(event.target.value)} value={mob} pattern="[0-9]{10}"/></td>
                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input type="email" id="email" value={email}/></td>
                    </tr>
                    <tr>
                        <td><label>City</label></td>
                        <td><input type="text" id="city" onChange={(event)=>setCity(event.target.value)} value={city}/></td>
                    </tr>
                    <tr>
                        <td><label>State</label></td>
                        <td><input type="text" id="state" onChange={(event)=>setState(event.target.value)} value={state}/></td>
                    </tr>
                    <tr>
                        <td><label>Create a Password</label></td>
                        <td><input type="password" id="pass" value={pass}/></td>
                    </tr>
                </tbody>
            </table>
            <div className="text-end">
                <button className="btn btn-dark" type="submit">Submit</button>
            </div>
            <div className='text-center'>
                <Link to=""><span className='text-dark text-center'>Login Page</span></Link>
            </div>
            </form>
            </div>
        </>
    );
}