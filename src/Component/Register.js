import React from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createuser } from '../Store/Actions/Action'



export const Register = () => {
  const dispatch=useDispatch()
    const navigate=useNavigate()

    

    const submithandler=(e)=>{
        e.preventDefault()


        const userd={
          username:e.target.username.value,
          password:e.target.password.value,
          allposts:[]
        }
       

        const usersdata = JSON.parse(localStorage.getItem('Users')) || [];
        const filterddata =usersdata.filter((e,i)=>{

                 return  e.username === userd.username
        })
       
      
         if(filterddata.length>0){
            alert('username already registerd')
        }else{
         
          dispatch(createuser(userd))
          navigate('/')     
        }

   }
  return (
    <div className='main2'>
    <h1>REGISTER...</h1>
    <form onSubmit={submithandler}>
<div className=" container mt-5">
<label for="exampleInputEmail1" className="form-label">Username</label>
<input type="text" className="form-control" name='username' id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className=" container mb-3">
<label for="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control" name='password' id="exampleInputPassword1"/>
</div>
<div className=" container mb-3">
  <h5>Already a user?</h5>
  <Link to={'/'} >Login</Link>
</div>
<div className=" container mt-4">
<button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
</div>
    // <div className='mainhome'> 
    //     <div className='mainform'> 
    //      <h2>Rgister yourself</h2>

    //      <form onSubmit={submithandler}>
    //          <input
    //            type='text'
    //            placeholder='Name..'
    //            name='name'
    //            autoComplete='off'
    //          /><br></br>
    //           <input
    //            type='text'
    //            placeholder='username..'
    //            name='username'
    //            autoComplete='off'
    //          /><br></br>
    //            <input
    //            type='password'
    //            placeholder='PassWord..'
    //            name='password'
    //            autoComplete='off'
    //          /><br></br>
    //          <button>Submit</button><br/>
    //          Already have an accont?<br></br>
    //          <Link to={'/'} >Login</Link>
    //      </form>
    //    </div>
    // </div>
  
  )
}
