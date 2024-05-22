import React from 'react'
import './login.css'
import { RiExternalLinkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaStackOverflow } from "react-icons/fa";

export default function Login() {
  return (
    <>
    <div className='container'>
         <div className='container-2'>

            <div className='mb-5'>
            <FaStackOverflow size={60} color='hsl(27,89%,48%)'/>
            </div>
            

            <div className='login-with-3'>
                <button className='btn btn-light' style={{border: "0.8px solid gray"}}> <FcGoogle /> Login With Google</button><br />
                <button className='btn btn-dark'> <FaGithub />Login With GitHub</button><br />
                <button className='btn btn-primary'> <IoLogoFacebook/>Login With Facebook</button>
            </div>

            <div className='login'>
                <form >
                    <div className='mt-3'>
                        <b>Email</b>
                        <input type="text"/>
                    </div><br />

                    <div>
                        <b>Password</b> <a href="?"><small className='small1'>forgot Password?</small></a>
                    </div>

                    <div>
                        <input type="password" /><br />
                    </div><br />

                    <div className='button-last'>
                    <button className='btn btn-primary'>Log in</button>
                    </div>
                </form>
            </div>

            <div className='mt-3'>
                <small>Don’t have an account?<a href="/signup">Sign up?</a></small><br />
                <small>Are you an employer? <a href="">Sign up on Talent <RiExternalLinkFill /></a> </small>
            </div>

         </div>
    </div>
    </>
  )
}
