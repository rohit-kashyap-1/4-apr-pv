import React, { useState } from 'react'

export default function AccountBalance() {
    const [balance,setBalance] = useState(10000)
    const [amount,setAmount] = useState(1)

    const withdraw = ()=>{
        setBalance(balance-amount)
    }
    const deposit = ()=>{
      
        setBalance(balance+amount)
    }
    const takeAmount = (event)=>{
        let amount = Number(event.target.value)
        setAmount(amount)

        console.log(amount)
    }
  return (
    <div>
      <h1>Account</h1>
      <hr />
      <div className='display-1'>{balance}</div>
      {(balance<100)?<div className='alert alert-danger mt-3'>The balance is below average, deposit some amount in account</div>:<div className='alert alert-success mt-3'>Account balance is sufficient</div>}
      
      
      <hr />
      <input type='number' className='form-control w-25 d-inline ' placeholder='Amount' onChange={takeAmount} value={amount}/>
      <button className='btn btn-danger mx-3' onClick={withdraw}>Withdraw</button>
      <button className='btn btn-success ' onClick={deposit}>Deposit</button>
    </div>
  )
}
