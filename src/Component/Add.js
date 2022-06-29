import React from 'react'
import { Nav } from './Nav'
import './Add.css'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../Store/Actions/Action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const Add = () => {
 
  const navigate =useNavigate()
    const dispatch=useDispatch()
    
    const submitHandler=(e)=>{
        e.preventDefault()
        const post={
            animalname:e.target.animalname.value,
            animalimg:e.target.animalimg.value,
            animalHealth:e.target.animalHealth.value,
            animalMilking:e.target.animalMilking.value,
            animalWeight:e.target.animalWeight.value,
        }
         dispatch(createPost(post))
         navigate('/display')
    }
  return (
    <div className='main3'>
      <h4>ADD YOUR PET :)</h4>
      <form onSubmit={submitHandler}>
  <div className=" container mt-5">
    <input type="src" className="form-control" placeholder='Img url' name='animalimg' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className=" container mt-4">
    <input type="text" className="form-control" placeholder='Animalname' name='animalname' id="exampleInputPassword1"/>
  </div>
  <div className=" container mt-4">
    <input type="text" className="form-control" placeholder='Health' name='animalHealth' id="exampleInputPassword1"/>
  </div> 
  <div className=" container mt-4">
    <input type="number" className="form-control" placeholder='Weight' name='animalWeight' id="exampleInputPassword1"/>
  </div> 
  <div className=" container mt-4">
    <input type="number" className="form-control" placeholder='Daily-Milking' name='animalMilking' id="exampleInputPassword1"/>
  </div>

  <div className=" container mt-4">
  <button type="submit" className="btn btn-primary">Add Pet</button>
  </div>
</form>
    </div>

  ) 
}
{/* <div className='addmain'>
        <Nav/>
      <div className='addform'>
          <h6>Add your Pet🐕</h6>
      
        <form onSubmit={submitHandler}>
            <input 
             type='text'
             name='animalname'
             placeholder='animal-name'
             
             autoComplete='off'
            /><br></br>
            <input 
             type='src'
             name='animalimg'
             placeholder='animal-url'  
             autoComplete='off'
            />
           <input 
             type='text'
             name='animalHealth'
             placeholder='Health issue'
             
             autoComplete='off'
            />
            <div className='addinps'>
            <input 
             type='Number'
             name='animalWeight'
             placeholder='Daily-Milking'
             
             autoComplete='off'
            /><br></br>
            <input 
             type='number'
             name='animalWeight'
             placeholder='Weight'  
             autoComplete='off'
            />
            </div>
            <br>
            </br>
            <button className='btnadd'>submit</button>
        </form>
       </div>
    </div>
  )
 */}
