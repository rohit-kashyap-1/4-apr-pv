import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [isLogin,setIsLogin] =useState(false)

    const changeLogin = ()=>{
        
        (isLogin==false)?setIsLogin(true):setIsLogin(false)
    }

    const styles = {
      form:{backgroundColor:'#ccc',padding:10}
    }
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <button onClick={changeLogin}>Change</button>
      {/* if user is loggedin then show dashboard otherwise login form */}
      {(isLogin==true)?<h2>Dashboard</h2>:<div>
        
      <h2>Login to dashboard</h2>
      <form style={styles.form}>
        <div className='row'>
            <div className='col-md-4'>
                <div className='mb-3'>
                    <input type='text' className='form-control' placeholder="Enter username" />
                </div>
                <div className='mb-3'>
                    <input type='password' className='form-control' placeholder="Enter password" />
                </div>
                <button className='btn btn-dark'>Login</button>
            </div>
        </div>
      </form>
        </div>}
    </div>
  )
}
