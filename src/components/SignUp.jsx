import React from 'react'
import './signUp.css'
import { TbMessage2Question } from "react-icons/tb";
import { IoPricetags } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";

export default function SignUp() {
  return (
       <>
       <div className="main-container">

        <div className='first-container'>
          <div className="left-container-control">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGopsA20tMvQbFUmfcVPwRQvT_hfBYl3NLsKVpqqWbC_SqjL1l" alt="" /> 
            <small id='small'>Stack</small> <b>overflow</b>

            <ul className='ul-control'>
                <li><TbMessage2Question  style={{margin: "4px"}} size="25" color='#0d6efd'/>Get unstuck - ask a question!</li>
                <li> <IoPricetags style={{margin: "4px"}}  size="25" color='#0d6efd'/>Save your favorite posts, tags and filters</li>
                <li> <GiTrophyCup style={{margin: "4px"}}  size="25" color='#0d6efd'/>Answer questions and earn reputation</li>
            </ul>
            <small style={{fontSize: "13px", marginLeft: "2rem"}}>Collaborate and share knowledge with a private group for FREE.</small><br />
            <small style={{marginLeft:"2rem"}}><a href="?">Get Stack Overflow for Teams free for up to 50 users.</a></small>
          </div>
        </div>

        <div className='second-container'>
          <div className='right-container-control'>
            <div className='right-container-control-inside'>
            <h3 className='create-h3'>Create your account</h3>
            
           
            <small>By clicking “Sign up”, you agree to our <a href="?">terms of service</a> and acknowledge you have read our <a href="?">privacy policy</a>.</small>
            <form >
                <b>Email</b>
                <input type="text" />
                <b>Password</b>
                <input type="password" />
                <small style={{fontSize: "12px"}}>Must contain 8+ characters, including at least 1 letter and 1 number.</small><br />
                <button  className='btn btn-primary'>Sign Up</button><br />
                <button style={{border: "0.7px solid gray"}} className='btn btn-light'> <FcGoogle />Sign up with google</button><br />
                <button  className='btn btn-dark'> <FaGithubSquare />sign up with GitHub</button>

            </form>
            </div>
           </div>
        </div>

       </div>
       </>
  )
}
