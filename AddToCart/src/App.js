import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import Sidebar, {Profile}  from './components/SideBar';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Display from './components/Display';
import axios from 'axios';

function App() {

  const [count,setCount] = useState(0);
  const [data,setData] = useState();

  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }

  // useEffect(()=>{
  //   axios.get("https://fakestoreapi.com/products")
  //     .then((res)=>setData(res.data))

  //   console.log(data);
  // })

  const obj = {
      username:"Dhilip",
      email:"dhilip@gmail.com",
      empid:"1234",
      password:"dhilip@123",
  }

  function send(){
    axios.post('https://localhost:8080/api/users/signup',obj)
        .then(res=>console.log(res.status))
  }

  return(
    <>
      <Display count={count} inc={increment} dec={decrement}/>
      <button onClick={send}>Send</button>
    </>
  )

}

export default App;