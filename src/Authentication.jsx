// import React, { useState } from 'react'
// import supabase  from './client'
// export const Authentication = () => {

//     const[formData,setFormData]=useState({
//         fullName:'',
//         email:'',
//         password:''
//     })

//     function handleChange(event){
//         setFormData((prevFormData)=>{
//             return{
//                 ...prevFormData,
//                 [event.target.name]: event.target.value

//             }
//         })

//     }

//    async function handleSubmit(e){
//         e.preventDefault()
// try {

//     const { data, error } = await supabase.auth.signUp(
//         {
//           email: formData.email,
//           password: formData.password,
//           options: {
//             data: {
//               full_name: formData.fullName,
//               age: 27,
//             }
//           }
//         }
//       )
//       alert('Check mf')
    
// } catch (error) {
//     alert(error)
// }
//     }
//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit}>
//             <input type="text"
//             placeholder='Fullname' 
//                 name='fullName'
//                 onChange={handleChange}
//             />
//             <input type="email"
//             placeholder='Email' 
//                 name='email'
//                 onChange={handleChange}
//             />
//             <input type="password"
//             placeholder='password' 
//                 name='password'
//                 onChange={handleChange}
//             />

//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }
