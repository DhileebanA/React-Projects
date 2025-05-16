import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

export function GetEmpData(){
    const[getEmp,setEmp]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3005/getEmpData')
        .then(res=>res.json())
        .then(data=>setEmp(data))
    })
    const del=(empno)=>{
        var key={empno:empno}
        axios.post('http://localhost:3005/delt',key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert("Data are not deleted")
            }
            else if(res.data.status==="success"){
                alert("Data are deleted")
            }
        })
    }
    return(
        <>
            <div className="bg-dark pb-5">
            <div className="d-flex justify-content-between mx-5 ">
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
                            <th>Commission</th>
                            <th>Deptno</th>
                            <th>View</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        getEmp.map((value,index)=>(
                            <>
                                <tr>
                                    <td>{value.empno}</td>
                                    <td>{value.ename}</td>
                                    <td>{value.mgr}</td>
                                    <td>{value.sal}</td>
                                    <td>{value.hiredate}</td>
                                    <td>{value.job}</td>
                                    <td>{value.comm}</td>
                                    <td>{value.deptno}</td>
                                    <td><Link to={`/singledata/${value.empno}`}><button className="btn btn-primary">View</button></Link></td>
                                    <td><button onClick={()=>{del(value.empno)}} className="btn btn-danger">Delete</button></td>
                                </tr>
                            </>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}