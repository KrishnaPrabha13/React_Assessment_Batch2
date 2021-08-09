import React from 'react'
import NavBar from './NavBar'

function Dashboard() {
    return (
        <div>
            <NavBar/>
            <br></br>
            <br></br>
            <h3>Dashboard page</h3>  
            <p style={{fontSize:"20px",textAlign:"left",fontFamily:"sans-serif"}}>Want to create new account click New Account in the menu. </p> 
            <p style={{fontSize:"20px",textAlign:"left",fontFamily:"sans-serif"}}>Want to View the account details click Account Details in the menu. </p>         
        </div>
    )
}

export default Dashboard
