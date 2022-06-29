

import React from 'react'
import './Home.css'
import { Link,useNavigate } from 'react-router-dom'
import { loggeduser } from '../Store/Actions/Action'
import { useDispatch } from 'react-redux'

const Home = () => {
     const navigate=useNavigate()
     const dispatch=useDispatch()

     const submithandler=(e)=>{
          e.preventDefault()
         const loginDetails={
             username:e.target.username.value,
             password:e.target.password.value
         }
        const usersdata = JSON.parse(localStorage.getItem('Users')) || [];
        const usernamedata=usersdata.filter((e,i)=>{
             return e.username === loginDetails.username
        })

        if(usernamedata.length>0){
          localStorage.setItem('Logged',JSON.stringify(usernamedata))
        }

        
        const passworddata=usersdata.filter((e,i)=>{
          return e.password === loginDetails.password
        })

        if(usernamedata.length>0 && passworddata.length>0){
             navigate('/Display')
             dispatch(loggeduser(usernamedata))
        }else{
          alert('username not registered')
        }
          

         

     }
  return (
    <div className='main'>
    <h1>LOGIN...</h1>
    <form onSubmit={submithandler}>
<div className=" container mt-5">
<label for="exampleInputEmail1" className="form-label">Username</label>
<input type="text" autoComplete='off' className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className=" container mb-3">
<label for="exampleInputPassword1" className="form-label">Password</label>
<input type="password" autoComplete='off' className="form-control" name='password' id="exampleInputPassword1"/>
</div> 
<div className=" container mt-4">
  <h4>Not a user? Create an account</h4>
  <Link to={'/Register'} > Register yourself</Link>
</div>

<div className=" container mt-4">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
</div>
    // <div className='mainhome'> 
    //     <div className='mainform'> 
    //      <h2>Login..</h2>

    //      <form onSubmit={submithandler}>

              /* <input
               type='text'
               placeholder='Username..'
               name='username'
               autoComplete='off'
             /><br></br>
               <input
               type='password'
               placeholder='PassWord..'
               name='password'
               autoComplete='off'
             /><br></br>
             <button className='btn'>Submit</button><br/>
              Don't have an accont ?
             <br></br> */
            //  <Link to={'/Register'} > Register yourself</Link>
    //      </form>
    //    </div>
    // </div>
  )
 }

export default Home