import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Dashboard(){
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    let {id}=useParams()
    useEffect(()=>{
        fetch("http://localhost:3005/dispUser/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setFname(data[0].fname)
            setLname(data[0].lname)
        })
    })
    return(
        <>
            <div className="d-flex justify-content-between">
                <h1 className="text-info">Hi {fname} {lname}</h1>
                <Link to={`/updateProfile/${id}`}><button className="btn btn-info me-5">Update</button></Link>
            </div>
        </>
    );
}