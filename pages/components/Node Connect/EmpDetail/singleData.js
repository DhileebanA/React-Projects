import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function GetSingleData(){
    var {empno}=useParams()
    const[ename,setEname]=useState('')
    const[mgr,setMgr]=useState('')
    const[sal,setSal]=useState('')
    const[hiredate,setHiredate]=useState('')
    const[job,setJob]=useState('')
    const[deptno,setDeptno]=useState('')
   
    useEffect(()=>{
        fetch("http://localhost:3005/singledata/"+empno)
        .then(res=>res.json())
        .then((data)=>{
        setEname(data[0].ename)
        setMgr(data[0].mgr)
        setSal(data[0].sal)
        setHiredate(data[0].hiredate)
        setJob(data[0].job)
        setDeptno(data[0].deptno)
       })
    },[])

    return(
        <>
        <div className="bg-dark vh-100">
        <div className="d-flex mx-5">
            <h2 className="mt-5 text-white">Employee Details</h2>
        </div>
        <div className="container-fluid px-4 mt-5">
            <table className="table table-striped table-hover table-border">
                <thead>
                    <tr>
                        <th>Emp No</th>
                        <th>Ename</th>
                        <th>Manager</th>
                        <th>Salary</th>
                        <th>Hiredate</th>
                        <th>Job</th>
                        <th>Deptno</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{empno}</td>
                        <td>{ename}</td>
                        <td>{mgr}</td>
                        <td>{sal}</td>
                        <td>{hiredate}</td>
                        <td>{job}</td>
                        <td>{deptno}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        </>
    );
}