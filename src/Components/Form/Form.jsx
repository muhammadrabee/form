import React, { useState } from 'react'
import toast from 'react-hot-toast'
import './Form.css'

const Form = () => {
  const [name,updateName]=useState('')
  const [email,updateEmail]=useState('')
  const [password,updatePassword]=useState('')
  const [confirmPassword,updateConfirmPassword]=useState('')

  let dataArray=[];

  const Formsubmit=(e)=>{
      e.preventDefault(); 
   if(password!==confirmPassword){
    toast.error('Password Did not matched')
   }else{
    toast.success('Submitted Successfully')
    console.log (name,password,email,confirmPassword);
    let data={
      Name:name,
      Email:email,
      Password:password
    }
    dataArray.push(data);

    let jsondata=JSON.stringify(dataArray);
    localStorage.setItem(`${name}`,jsondata)
    toast.success('Data Saved successfully')
    
    

   }
      }
  
  return (
   <div className='body' >
     <div className=' box'>
      <form onSubmit={Formsubmit} className='my-auto'>
        <h2>Signup</h2>
        <div className='inputs'>
            <label htmlFor="forName"></label>
            <input type="text" id='forName' onChange={(e)=>{
              updateName(e.target.value)
            }}  placeholder='Enter Your Name' required/>
        </div>
        <div className='inputs'>
            <label htmlFor="forEmail"></label>
            <input type="text" id='forEmail' onChange={(e)=>updateEmail(e.target.value)}  placeholder='Enter Your Email' required/>
        </div>
        <div className='inputs'>
            <label htmlFor="forPass"></label>
            <input type="text" id='forPass'  onChange={(e)=>updatePassword(e.target.value)} placeholder='Enter Your Password' required/>
        </div>
        <div className='inputs'>
            <label htmlFor="forconPass"></label>
            <input type="text" id='forconPass'  onChange={(e)=>updateConfirmPassword(e.target.value)} placeholder='Confirm Your Password' required/>
        </div>
        <div className="checkbox mb-1">
           <input  type="checkbox"/> Remember me
       </div>
        <button type='submit'  className='btn'>Submit</button>
      <p>Don't Have Account?<a href="#"> Sign in</a></p>
      </form>
    </div>
   </div>
  )
}

export default Form
