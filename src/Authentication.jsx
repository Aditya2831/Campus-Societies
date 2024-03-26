import React, { useState } from 'react'

export const Authentication = () => {

    const[formData,setFormData]=useState({
        fullName:'',
        email:'',
        password:''
    })

    function handleChange(event){
        setFormData((prevFormData)=>{
            return{
                ...prevFormData,
                [event.target.name]: event.target.value
                
            }
        })

    }
  return (
    <div>
        <form action="">
            <input type="text"
            placeholder='Fullname' 
                name='fullName'
                onChange={handleChange}
            />
            <input type="email"
            placeholder='Email' 
                name='email'
                onChange={handleChange}
            />
            <input type="password"
            placeholder='password' 
                name='password'
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    </div>
  )
}
