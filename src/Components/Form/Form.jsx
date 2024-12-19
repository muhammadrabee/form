import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Form = () => {
  const [name,updateName]=useState('')
  const [email,updateEmail]=useState('')
  const [password,updatePassword]=useState('')
  const [confirmPassword,updateConfirmPassword]=useState('')

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
    let jsondata=JSON.stringify(data);
    localStorage.setItem('User_data',jsondata)
    
    

   }
      }
  
  return (
   <div style={{height:'100vh'}}>
     <div className='d-flex justify-content-center align-item-center br-2 m-auto ' style={{border:'1px solid black',width:'400px',height:'400px',borderRadius:'10px'}}>
      <form onSubmit={Formsubmit} className='my-auto'>
        <h1 className='text-center'>Signup</h1>
        <div>
            <label htmlFor="forName"></label>
            <input type="text" id='forName' onChange={(e)=>{
              updateName(e.target.value)
            }} className='mb-3' placeholder='Enter Your Name' required/>
        </div>
        <div>
            <label htmlFor="forEmail"></label>
            <input type="text" id='forEmail' onChange={(e)=>updateEmail(e.target.value)} className='mb-3' placeholder='Enter Your Email' required/>
        </div>
        <div>
            <label htmlFor="forPass"></label>
            <input type="text" id='forPass' className='mb-3' onChange={(e)=>updatePassword(e.target.value)} placeholder='Enter Your Password' required/>
        </div>
        <div>
            <label htmlFor="forconPass"></label>
            <input type="text" id='forconPass' className='mb-3' onChange={(e)=>updateConfirmPassword(e.target.value)} placeholder='Confirm Your Password' required/>
        </div>
        <button type='submit'  className='d-block m-auto'>Submit</button>
      </form>
    </div>
   </div>
  )
}

export default Form
