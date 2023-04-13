import React from 'react'
import "./Sign.css"
import { Link } from 'react-router-dom'

function Sign() {
  return (
    <div className='sign-section'>

        

<div className='form-content'>
<form>
    <h1 className='sign-text'>Sign In</h1>
    <input placeholder='Email or phone number' type={'email'} required/>
    <input placeholder='Password' type={'password'} required/>
    <Link to={"movies"} > <button className='sign2-btn' type='submit'>Sign In</button></Link>
   
    <p className='new-text'><span>New to Netflix?</span> Sign up now.</p>
</form>

 
</div>

    </div>
  )
}

export default Sign