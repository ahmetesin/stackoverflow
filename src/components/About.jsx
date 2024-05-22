import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './About.css'


import { BsStackOverflow } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { FaNewspaper } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaConnectdevelop } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { BiMessageEdit } from "react-icons/bi";
import StackoverflowFooter from './StackoverflowFooter';
import Follow_us from './Follow-us-content';
import { Si4D } from 'react-icons/si';


function About() {
    
    //hover olduğunda 
    function mouseOver (){
        const icondown = document.querySelector(".icondown")
        icondown.style.webkitTransform = "rotate(180deg)";
        icondown.style.transition="all 0.3s"
        const showNewContent= document.querySelector(".new-content-about")
        showNewContent.style.display= "block"

    }


    const mouseout=()=>{
        const icondown = document.querySelector(".icondown")
        const showNewContent= document.querySelector(".new-content-about");
        icondown.style.webkitTransform = "rotate(0deg)";
        showNewContent.style.display = "none"              
    }
    

    function mouseOver2 (){
        const icondown = document.querySelector(".icondown2")
        icondown.style.webkitTransform = "rotate(180deg)";  
        const follow = document.querySelector(".follow-us")
        follow.style.display="block"
  
    }

  setTimeout(()=>{
    mouseout2()
  },2000)

    function mouseout2(){
        const icondown = document.querySelector(".icondown2")
        icondown.style.webkitTransform = "rotate(0deg)";
        const follow = document.querySelector(".follow-us")
        follow.style.display="none"
    }
    


    function activeDiv(){
        const icon = document.querySelector(".teamicon")
        
    }

   
    
    function introductionColor(){
        const changecolor = document.querySelectorAll(".int-lg1")
        changecolor.forEach((change)=>{
              change.style.color ="#f48024"
        })
    }

    function introductionColor2(){
        const changecolor = document.querySelectorAll(".int-lg2")
        changecolor.forEach((change)=>{
              change.style.color ="#f48024"
        })
    }

    function introductionColor3(){
        const changecolor = document.querySelectorAll(".int-lg3")
        changecolor.forEach((change)=>{
              change.style.color ="#f48024"
        })
    }

    function introductionColor4(){
        const changecolor = document.querySelectorAll(".int-lg4")
        changecolor.forEach((change)=>{
              change.style.color ="#f48024"
        })
    }


    function changecolor1(){
        const changecolor = document.querySelectorAll(".int-lg1")
        changecolor.forEach((change)=>{
              change.style.color ="black"
        })
    }

    function changecolor2(){
        const changecolor = document.querySelectorAll(".int-lg2")
        changecolor.forEach((change)=>{
              change.style.color ="black"
        })
    }

    function changecolor3(){
        const changecolor = document.querySelectorAll(".int-lg3")
        changecolor.forEach((change)=>{
              change.style.color ="black"
        })
    }

    function changecolor4(){
        const changecolor = document.querySelectorAll(".int-lg4")
        changecolor.forEach((change)=>{
              change.style.color ="black"
        })
    }
    
   



    
    
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" id='navbar'>
      <ul id='ul-control'>
        <li className='logo '>
            <a href="">
            <BsStackOverflow size="30" color='orange'/>
                <small className='small'>Stack<b>overflow</b></small>
            </a>
        </li>
        <li onMouseOut={mouseout} onMouseOver={mouseOver} className='icons lists'>
            Our products <IoIosArrowDown className='icondown'/>

            <div className="new-content-about">

                <div onMouseOver={activeDiv} className="new-div1">
                    <div className='div-icon'><RiTeamFill className='teamicon' size="35px" style={{marginTop: "2rem"}}/></div>
                    <div className='icon-2'>
                        <small><small className='iconarrow-right'>Stack overflow for Teams <IoIosArrowForward size="10px"/></small><br />
                            Where developers and technologist share private knowledge with coworkers.</small>
                    </div>
                </div>

                <div className="new-div2">
                   <div className='div-icon'><FaNewspaper size="35px" style={{marginTop: "2rem"}}/></div>
                    <div className='icon-2'>
                        <small><small className='iconarrow-right'>Stack overflow advertising <IoIosArrowForward size="10px"/></small><br />
                            Where companies reach the world's largest audience of developers and technologist.</small>
                    </div>
                </div>

                <div className="new-div3">
                 <div className='div-icon'><FaStackOverflow color='#ff7200' size="35px" style={{marginTop: "2rem"}}/></div>
                    <div className='icon-2'>
                        <small><small className='iconarrow-right'>Join the community <IoIosArrowForward size="10px"/></small><br />
                            Where developers and technologist go to gain and share knowledge.</small>
                    </div>
                </div>
                <div className="new-div4">
                    
                    <FaStackOverflow color='#ff7200' size="25px" style={{marginLeft: "1rem"}}/> <b>overflow</b><br />
                    
                    <small>GenAl features for temas and  our public platform.</small><br />
                    <IoIosArrowForward size="10px" style={{marginLeft:"1rem"}}/>
                   
                </div>
                <div className="new-div5">
                   <div>
                   <FaStackOverflow color='#ff7200' size="25px" style={{marginLeft: "1rem"}}/>
                    <b>overflow</b><IoIosSettings color='#ff7200' size="25px"/><b style={{color:"#ff7200"}}>API</b><br />
                    <small>Train and fine-tune large language models  </small><IoIosArrowForward size="10px"/>
                   </div>
                </div>
                <div className="new-div6">
                    <div>
                        <b style={{fontSize: "14px"}}>Blog</b><IoIosArrowForward size="10px"/><br />
                        <small> Writing on software and technology along with company news and product updates.</small>
                    </div>
                    <div>
                       <b style={{fontSize: "14px"}}>Labs</b><IoIosArrowForward size="10px"/><br />
                       <small>Keep up-to-date and explore the future of collective knowledge sharing.</small>
                    </div>
                </div>
            </div>
        </li> 
        <li className='lists'>
            <a href="?">Creers</a>
        </li>
        <li className='lists'>
            <a href="?">Leadership</a>
        </li>
        <li className='lists'>
            <a href="?">Social impact</a>
        </li>

        <li onMouseOver={mouseOver2} onMouseOut={mouseout2} className='flex-auto lists'>
            Follow us <IoIosArrowDown size="13" className='icondown2'/>
            <div className="follow-us">
            <Follow_us ></Follow_us>
            </div>
        </li>

        <button className='btn btn-primary lists'>contacts</button>
      </ul>
    </Navbar>
   
    <div className="container">
        <div className='div-1'>
            <div className='small-div'></div>
            <div  className='div-small'></div>
        </div>


        <div className='div-2'>
            <div className='small-div1'></div>
            <div  className='div-small1'></div>
        </div>

        <div className="text-container">
            <img src="https://stackoverflow.design/assets/img/favicons/apple-touch-icon.png" alt="logo" />
            <h1>Empowering the world to develop technology <b>through collective knowledge.</b></h1>
            <div className='s-1'>
            <small>
            Our products and tools enable people to ask, share and learn at work or at home.
            </small>
            </div>
        </div>

        <div className="flex-container">
            <div className='border-r'>
                <h3>15 years</h3>
                <small>of trusted and high-quality knowledge</small>
            </div>
            <div className='border-r'>
                <h3>14 seconds</h3>
                <small>average time between new questions</small>
            </div>
            <div className='border-r'>
                <h3>58 million</h3>
                <small>total questions and answers so far</small>
            </div>
            <div>
                <h3>51 billion</h3>
                <small>times knowledge has been reused</small>
            </div>
        </div>

        <div className="logot">
            
            <p>Supporting the innovative teams at…</p>

            <div className="logot-slide">

             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/87f6a35b5b34b08e293d965b8aca21f4b1a4f885-123x28.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/d4733a934a5104ac45c14d108cd37b425afdddf4-220x44.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/acdc9477bbb591618777d6464cb7412fcdb3edc1-165x41.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/bf99da124792539fa71dba0a06a8f0afcef3743e-313x70.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/b90ff39d33a71c10861c70f5feab093cafb5d230-155x47.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/83a2ce7a80f20c5b78c941d5acf57624548691dd-217x40.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/6b3daf9ee3910d99348126c9fe4435909c18cd39-151x66.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/0b8428147651a934888f818b26db3044daa62f20-139x43.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/a96001cdcd0d4a56b88c6452e77b0a6efe387a9d-192x41.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/7795d036597430c7825f03a40b35ab53b92c39b3-102x55.svg?auto=format" alt="" />
             </div>

             <div className="logot-slide">

             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/87f6a35b5b34b08e293d965b8aca21f4b1a4f885-123x28.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/d4733a934a5104ac45c14d108cd37b425afdddf4-220x44.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/acdc9477bbb591618777d6464cb7412fcdb3edc1-165x41.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/bf99da124792539fa71dba0a06a8f0afcef3743e-313x70.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/b90ff39d33a71c10861c70f5feab093cafb5d230-155x47.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/83a2ce7a80f20c5b78c941d5acf57624548691dd-217x40.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/6b3daf9ee3910d99348126c9fe4435909c18cd39-151x66.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/0b8428147651a934888f818b26db3044daa62f20-139x43.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/a96001cdcd0d4a56b88c6452e77b0a6efe387a9d-192x41.svg?auto=format" alt="" />
             <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/7795d036597430c7825f03a40b35ab53b92c39b3-102x55.svg?auto=format" alt="" />
             </div>
             

            </div>

        <div className='stackoverflow-AI'>
            <FaStackOverflow style={{marginTop: "-1rem"}} color=' #f48024' size="50px"/><b>overflow</b>
            
                <b className='a-i'>AI</b>
           

            <div className='over-text'>
                <p>We’re integrating GenAI into our public platform, Stack Overflow for Teams, and brand new product areas, like an IDE integration that brings knowledge
                     from our community right into the area where developers find focus and get work done.</p>

                <button className='btn btn-primary'>Learn more</button>
                <a href="?">What we're working on <IoIosArrowForward /></a>

            </div>
          
        </div>

        <div className='stackoverflow-content-2'>
         <div className="stack-episode-1">
         <FaStackOverflow className='stack-logo1'  color=' #f48024' size="50px"/>
         <h3>stack<b>overflow</b></h3>
         <p>We’re best known for our public Q&A platform that millions of people
             visit every month to ask questions, learn, and share technical knowledge.</p>

            <button className='btn btn-primary'>join the community</button>

         </div>
         <div className="stack-episode-2">
            <img  src='./stack.png' alt="stack1"  />
         </div>
        </div>

        <div className="stackoverflow-content-3">
            <div className="introducing-1">
            <IoIosSettings />
            <b> Introducing OverflowAPI</b>
            <p>A subscription-based API service that provides continuous access to 
                Stack Overflow’s public dataset to train and fine-tune large language models.</p>
            </div>
            <div className="introducing-2">
                <button className='btn btn-primary'>Learn more</button>
            </div>
        </div>

        <div className="stackoverflow-forteams">
            <div className="forteams-content-1">
            <FaStackOverflow className='f-logo' size="60px" color='f48024'/>
            <h4>Stack<b>overflow</b></h4>
            <b id='for-teams-e'>FOR TEAMS</b>
            <p>Where developers and technologists share private knowledge with coworkers.</p>
            <button className='btn btn-primary'>Learn more</button>
            <a href="?">Talk to an expert  <IoIosArrowForward /></a>
            <img src="https://stackoverflow.co/img/product/home/g2.svg" alt="" />
            </div>


            <div className="forteams-content-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTXewdqEvpBLGgIboTZu6mXCAXY77lEw4fIfdWE1M5icKvcq7" alt="" />
            </div>
        </div>

        <div className="stackoverflow-advertising">
            <div className="advertising-content-1">
            <FaStackOverflow className='advertising-logo' size="60px" color='f48024'/>
            <h4>Stack<b>overflow</b></h4>
            <b className='advertising-text'>ADVERTISING</b><br />

            <p>Reach the world’s largest audience of developers and technologists.</p>

            <button className='btn btn-primary'>Explore solutions</button><br />

            <small><a href="?">Advertise to developers </a> <a className='js-a' href="?">Attract tech talent</a></small>
            </div>

            <div className="advertising-content-2">
                 <img src="./advertising.png" alt="foto" />
            </div>
        </div>



        <div className="stackoverflow-introduction">
            <a href="?">
                <div onMouseOut={changecolor1} onMouseOver={introductionColor} className='introduction-div'>
                <BiMessageEdit className='int-lg int-lg1' size="70px"/><br />

                <p>Check out our <b> FAQ about how Stack overflow</b> works.</p>

                <a href="?"> <b>Visit Help Center</b> <IoIosArrowForward /></a>
                </div>
            </a>

            <a href="?">
                <div onMouseOut={changecolor2} onMouseOver={introductionColor2} className='introduction-div'>
                <FaConnectdevelop className='int-lg int-lg2'  size="70px"/><br />
                <p>To share <b>feedback about your platform</b>, please visit our meta comminty</p>

                <a href="?"><b>Visit Meta</b> <IoIosArrowForward /></a>
                </div>
            </a>

            <a href="?">
                <div onMouseOut={changecolor3} onMouseOver={introductionColor3} className='introduction-div'>
                <RiTeamLine className='int-lg int-lg3'   size="70px"/>

                <p>Looking for help with <b>Stack Overflow For Teams</b></p>

                <a href="?"><b>Visit Temas Help Center</b> <IoIosArrowForward /></a>
                </div>
            </a>

            <a href="?">
                <div onMouseOut={changecolor4} onMouseOver={introductionColor4} className='introduction-div'>
                <TiDocumentText className='int-lg int-lg4'  size="70px"/>

                <p>Find <b>legal document</b> for our products and services</p>

                <a href="?"><b>Visit Legal</b> <IoIosArrowForward /></a>
                </div>
            </a>
        </div>

        <div className="stack-footer">

        </div>
         <StackoverflowFooter></StackoverflowFooter>
    </div>

    </>
  );
}

export default About;