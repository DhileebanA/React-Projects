import React from 'react';

export default function Sidebar(props){
    return <h1>Sidebar {props.username}</h1>;
}
export function Profile(){
    
    return (
        <>
            <h1>Profile</h1>
        </>
    )
}



class Dashboard extends React.Component{
    render(){
        return <h1>Dhilip</h1>
    }
}