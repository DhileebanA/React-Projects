import React, { useEffect, useState } from "react";
export function GetData(){
    const[fetchdata,SetFetchdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3005/getData')
        .then(res=>res.json())
        .then(data=>SetFetchdata(data))
    },[])
    return(
        <>
            <h1>Show Data</h1>
            <table>
            {
                fetchdata.map((value,index)=>(
                    <h3>{value.prodname}</h3>
                ))
            }
        </table>
        </>
    );
}