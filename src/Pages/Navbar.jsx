

import './Nav.css'


//icons
import { TfiMenu } from "react-icons/tfi";
import { IoMdHome } from "react-icons/io";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";

<RiCloseFill />
function NavbarCmpnt() {
    const size= 20
    const searchicon = 23
   

    function openmenu(){
        const menu = document.querySelector(".new-content")
        menu.style.display = "block"
        const close = document.getElementById("menu-1")
        close.style.display = "none"
        const closefile = document.querySelector(".closefile")
        closefile.style.display = "block"
        
    }


    function closemenu(){
   
        const menu = document.querySelector(".new-content")
        menu.style.display = "none"
        const close = document.getElementById("menu-1")
        close.style.display = "block"
        const closefile = document.querySelector(".closefile")
        closefile.style.display = "none"

    }


    function openinput(){
     const secondinput = document.querySelector(".form-control1")
     secondinput.style.display= "block"

    }
     
   //login function
    function login(){
        
        window.location = "/login"
    }


    //signUp function
    function signUp(){
        window.location = "/signup"
    }
    


   

    

  return (
    <>
    <div className="nav">

        

        <ul >
            
            <li className="menu">
                <div className='close'>
                <RiCloseFill onClick={closemenu} className='closefile'  size="30px"/>
                <TfiMenu onClick={openmenu}  id="menu-1" size={size} />
                </div>
           


            <div className="new-content">
              <ul className='dropdown-ul'>
               <li className='home' style={{marginTop : "1rem"}}>
                <a href="?"><IoMdHome size="18px"></IoMdHome> Home</a>
               </li>

               <li className='li-background'>
               <a href="?"> <RiQuestionAnswerFill  size="18px"/>Questions</a>
               </li>

               <li className='li-background'>
                <a href="?"> <FaTags  size="18px"/> Tags</a>
                </li><br />

                <li className='li-background'>
                <a href="?"><HiUsers  size="18px"/>Users</a>
               </li>

                <li className='li-background'>
                <a href="?"><FaBuilding  size="18px"/>Companies</a>
                </li><br />

               <li className='li-background'>
                <a href="?">LABS  <FaInfoCircle style={{marginLeft: "7rem"}}  /></a> 
                </li>

                <li className='li-background'>
                <a href="?"><MdOutlineMessage  size="18px"/> Discussion</a> 
                </li>

                <li  className='add'>
                <a href="?" style={{textDecoration: "none"}}>COLLECTİVES <IoMdAdd style={{marginLeft: "4rem"}}/></a> <br />
                <small>Communities for your favorite technologies. <a href="?"> Explore all Collectives</a></small>
                </li>

                <li>
                    <b>TEAMS</b>
                </li>

                <li>
                    <img style={{width: "150px", marginLeft: "2rem"}} 
                    src="https://cdn.sstatic.net/Img/teams/teams-promo.svg?v=e507948b81bf" alt="icons" /> <br />
                </li>

                <li>
                <small style={{textAlign: "center"}}>Ask questions, find answers and collaborate at work with Stack Overflow for Teams.</small>
                </li>

                <li className='btnmenu'>
                    <button className='btnorange'>Explore Teams</button><br />
                    <button className='btntry'>Try Teams For Free</button>
                </li>

                
              </ul>

            </div>
             </li>

            <li className="text"> 
                <a href="/">
                
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsi1ofIME_NyhhzIqVXdeDssjkhfarpwHYQ&usqp=CAU" alt="" />
                <small className='responsive-small' style={{fontSize: "15px"}}>stack <b style={{fontSize: "18px"}}>overflow</b></small> 
                </a>
            </li>

            <li className='list-1  response'>
                <a href="/about">About</a>
            </li>

            <li className='list-1'>
                <a href="?">products</a>
            </li>

            <li className='list-1  response'>
                <a href="?">For Teams</a>
            </li>

            <li className="form-control1" id="form">
              <form className='inputwithicon'>
              <IoSearch size={searchicon}  className='search'/>

                 <input className='focusinput' type="search" placeholder="search..." />
                 
                 
             </form>
             
            </li>

            <li><button onClick={openinput} className='search-botton btn btn-light'> <IoSearch size={searchicon} /></button></li>
            
        </ul>
         
       
        
        

        <div className="btn">
          <button onClick={login} id="login-btn" className="btn btn-light">Login</button>
          <button onClick={signUp} className="btn btn-primary">Sign up</button>
        </div>

        
        

    </div>
    </>
  );
}

export default NavbarCmpnt;