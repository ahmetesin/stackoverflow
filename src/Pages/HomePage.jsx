import React from 'react'
import './Homepage.css'
import { IoSearchCircleOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaStackOverflow } from "react-icons/fa";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import CarouselPage from './CarouselPage';
import ForTeams from '../components/ForTeams';



export default function HomePage() {
  return (
    <>
    <div className="main-container-home">
        {/* sticker divs */}
        <div className="sticker-div"></div>
        <div className="sticker-div2"></div>

       
        <div className="main-first-content">
            <div className='flex-content'>
           <div className="main-post-content-1">
           <IoSearchCircleOutline className='search-icon' color='orange' size={70}/><br />
           <p>Find the best answer to your technical question, help others answer theirs</p>
           <button className='btn btn-primary'>join the community</button><br />
           <small>or <a href="?">search content</a></small>
           </div>

           <div className="main-post-content-2">
           <CiLock className='search-icon' color='#1b75d0' size={70}/><br />
           <p>Want a secure, private space for your technical knowledge</p>
           <button className='btn btn-primary'>Discover Teams</button><br />
          
           </div>

           </div>

           <div className="main-first-text">
            <h1>Every <h1 id='h1-text'>developer</h1> has a <br /> tab open to Stack Overflow</h1>
           
           </div>

           <button className='sticker-button'></button>

           <div className="first-content-flex">
             <div>
                <h5>100+ million</h5>
                <small>monthly visitors to Stack Overflow & Stack Exchange</small>
             </div>
             <div>
                <h5>45.1+ billion</h5>
                <small>Times a developer got help since 2008</small>
             </div>
             <div>
                <h5>191% ROI</h5>
                <small>from companies using Stack Overflow for Teams</small>
             </div>
             <div>
                <h5>5,000+</h5>
                <small>Stack Overflow for Teams instances active every day</small>
             </div>
           </div>
        </div>

        <div className="main-absulote-content">
            <div className='stackoverflow-content'>
            <FaStackOverflow className='stck-logo' size={40} color='hsl(27, 89%, 48%)'/> 
            <p>stack<b>overflow</b></p><br />

            <img src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009" alt="" /><br /><br />

            <h3><b>A public platform building the definitive collection of coding questions & answers</b></h3>

            <p id='p-text'>A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world</p>
             <button className='btn btn-primary'>join the community</button><br />
             <a href="?">or search content</a>

            </div>
            <div className='forteams-content'>
            <FaStackOverflow className='stck-logo' size={40} color='hsl(27, 89%, 48%)'/> 
            <b>FOR TEAMS</b><br /><br />

            <img src="https://cdn.sstatic.net/Img/home/illo-teams.svg?v=7e543f14fcc0" alt="" />

            <h3><b>A private collaboration &<br /> knowledge sharing SaaS <br /> platform for companies</b></h3>

            <p id='p-text'>A web-based platform to increase productivity, <br /> decrease cycle times, accelerate time to market, and <br /> protect institutional knowledge.</p>
             
             <small><a href="?">Get started</a></small>
             
             <br />

             <button className='btn btn-primary'>For large organizations <BsFillBuildingFill /></button>
             <button className='btn btn-primary'>For small teams <FaUserFriends /></button>
            </div>
            
        </div>

        <div className='carousel-content'>
             <p>Thousands of organizations around the globe use Stack Overflow for Teams</p>
           
            <CarouselPage></CarouselPage>
            
        </div>

        <div className="tripler-container">
         <img className='img-first' src="https://cdn.sstatic.net/Img/product/teams/screens/illo-question.png?v=14c5863a5550" alt="" />
         <img className='img-second' src="https://cdn.sstatic.net/Img/product/teams/screens/illo-for-you.png?v=ab49238abe04" alt="" />
         <img className='img-third' src="https://cdn.sstatic.net/Img/product/teams/screens/illo-home-search.png?v=1ccd850cd929" alt="" />
        </div>

        <div className="forteams-container-black">
           <ForTeams></ForTeams>
        </div>
    </div>
    </>
  )
}
