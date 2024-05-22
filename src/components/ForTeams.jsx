import React, { useEffect } from 'react'
import './forteams.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import ForTeams_2 from './ForTeams_2';
import { FaStackOverflow } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { IoAnalyticsOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoLogoWechat } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { BsShieldLockFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import { CgChanel } from "react-icons/cg";
import { FaNewspaper } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { MdHealthAndSafety } from "react-icons/md";
import { FaWrench } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FaMountain } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { TbMessageQuestion } from "react-icons/tb";
import { PiQuotesLight } from "react-icons/pi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoIosLock } from "react-icons/io";
import HomeFooter from './HomeFooter';





export default function ForTeams() {
    
    useEffect(()=>{
        Aos.init({duration: 3000})

    },[])

    function myFunction() {
        var element = document.getElementById("myDIV");
        element.classList.toggle("mystyle")
         
         
     }

     function myFunction2() {
        var element = document.getElementById("myDIV2");
        element.classList.toggle("mystyle2");
        
     }

     function myFunction3() {
        var element = document.getElementById("myDIV3");
        element.classList.toggle("mystyle3");
        
     }

     function myFunction4() {
        var element = document.getElementById("myDIV4");
        element.classList.toggle("mystyle4");
        
     }

     function myFunction5() {
        var element = document.getElementById("myDIV5");
        element.classList.toggle("mystyle5");
        
     }

  return (
    <>

    <div className='for-teams-container'>
    <FaStackOverflow size={50} className='stackoverflow-logo-forteams'/>
    <p>stack<b>overflow</b></p>
    <b className='bold-text'>FOR TEAMS</b>
    <h2 >Capture your company’s knowledge and context in a discoverable format to  
    <b style={{color: "hsl( 27 , 89% , 48% )"}}> unblock your team</b>
    </h2>

    <button className='btn btn-primary'>Take a tour of Teams</button>


    <div className="terible-animation-div">
        <div data-aos="fade-right">
        <FaCheckCircle size={20} color='green'/><br />
        <b>Increase productivity</b><br />
        <small>If somebody somewhere has the right answer,
         suddenly you have it too. Collaborate better in a remote-first world.
         </small>
        </div>

        <div data-aos="fade-right">
        <FaCheckCircle size={20} color='green'/><br />
        <b>Accelerate time to market</b><br />
        <small>Shorten the time between initial idea and complete product.
             Take delays and misinformation out of the equation.
         </small>
        </div>

        <div data-aos="fade-right">
        <FaCheckCircle size={20} color='green'/><br />
        <b>Protect institutional knowledge</b><br />
        <small>People come and people go, but if you capture
             their contributions in one central place, that expertise sticks around.
         </small>
        </div>
    </div>

    <div className='page-text-introduction'>
    <h2>Ensure your company stays on course</h2>
        <p>Here are just a few types of technologists that we help.</p>
    </div>

    <div className="stackoverflow-introduction-content">
        <div id='myDIV' onClick={myFunction} >
        <IoRocketOutline className='rocket-logo' color='#a7adb4' size={90}/><br />
        <h3><b>DevOps engineers</b></h3>
        <p className='text-p-1'>Shipping new products and features requires teamwork and coordination.
             Forget checklists and long docs no one ever reads.</p>
        </div>

        <div onClick={myFunction2} id='myDIV2'>
        <IoAnalyticsOutline className='rocket-logo2' color='#a7adb4' size={90}/><br />
        <h3><b>Data scientists</b></h3>
        <p className='text-p-2'>Business decisions are better when backed by
         data. Give visibility to the data that support your strategies.</p>
            
        </div>
        <div onClick={myFunction3} id='myDIV3'>
        <CiSettings className='rocket-logo3' color='#a7adb4' size={90}/><br />
        <h3><b>Software engineers</b></h3>
        <p className='text-p-3'>Help engineers be more efficient and streamline knowledge 
        sharing using a tool they already love and trust..</p>
        </div>

        <div id='myDIV4' onClick={myFunction4}>
        <TfiHeadphoneAlt className='rocket-logo4' color='#a7adb4' size={90}/><br />
        <h3><b>Support teams</b></h3>
        <p className='text-p-4'>Level up your support by providing information to your 
        customers using a natural interface: questions and answers.</p>
        </div>

        <div id='myDIV5' onClick={myFunction5}>
        <IoLogoWechat className='rocket-logo5' color='#a7adb4' size={90}/><br />
        <h3><b>Engineering leaders</b></h3>
        <p className='text-p-5'>Help your team get the information they need to do their job
         - reduce burnout and help engineers grow and learn together..</p>
        </div>
        
    </div>

    <div className="felx-wrap-content">
        
        <div className='div-key'>
            <div className="felx-wrap-contents-1">
                <div className="small-div-1-1"> Free</div>

                <h3>Free</h3>
                <small>No credit card required</small>
            </div>

            <div className="felx-wrap-contents-2">
                <ul>
                    <li> <HiSpeakerphone size={18}/> ChatOps integrations - Slack & Microsoft Teams</li>
                    <li> <BsShieldLockFill size={18} /> Your own private space hosted on stackoverflowteams.com</li>
                    <li> <FaTrash size={18}/> Structured and searchable knowledge base</li>
                </ul>
                <button className='btn btn-primary'>Create a free Team</button><br />
                <p>Always free up to 50 teammates</p>
            </div>

        </div>


        <div className='div-key'>
            <div className="flex-div-2">
                <div className="small-div-basic"> Basic</div>

                <h3>$6.50 USD</h3>
                <small>per teammate / month</small>
            </div>

            <div className="flex-content-1-">
                <ul>
                    <li><IoKey size={18}/> Single sign-on (SSO) with SAML + Okta integration</li>
                    <li> <HiSpeakerphone size={18}/> ChatOps integrations - Slack & Microsoft Teams</li>
                    <li> <BsShieldLockFill size={18} /> Your own private space hosted on stackoverflowteams.com</li>
                    <li> <FaTrash size={18}/> Structured and searchable knowledge base</li>
                </ul>
                <button className='btn'>Create a free Team</button><br />
                <p>Up to 250 teammates</p>
            </div>

        </div>

        
        
        <div className='div-key' id='flex-diffrent-content'>
            <div className="top-div">
                <small>RECOMMENDED</small> <FaBuilding className='build-lg'/>
            </div>

            <div className="business-div-content">
            <div className="small-div-bussines">Business </div>
            <h3>$15.40 USD</h3>
            <small>per teammate / month</small>
            </div>

            <div className="business-div-content-2">
                <ul>
                    <li><IoAdd size={18}/> All the features of Basic plus…</li>
                    <li><SiGoogleforms size={18}/> Long-form knowledge with Articles</li>
                    <li><CgChanel size={18}/> Additional integrations — ChatOps, Jira, GitHub & Okta</li>
                    <li><FaNewspaper size={18}/> Group content together into Collections</li>
                    <li><VscGraphLine size={18}/> Usage and adoption metrics</li>
                    <li><MdHealthAndSafety size={18}/> Priority customer support</li>
                    <li><FaWrench size={18}/> Content Health tools</li>
                </ul>

                <button className='btn btn-dark'>Get started</button>
                <p>Unlimited teammates</p>
            </div>

        </div>


        <div className='div-key'>
            <div id="custom-content">
                 <div className="enterprise-content">Enterprise</div><br />
                 <h3>Custom pricing</h3>
                 <small>Let’s talk about what you need</small>
            </div>

            <div id="last-custom-content">
                 <ul>
                    <li><IoAdd size={18}/> Premium features of Business plus…</li>
                    <li><HiUsers size={18}/> Unlimited Teams within your instance</li>
                    <li><FaMountain size={18}/> Flexible hosting options — cloud or on-premises</li>
                    <li><IoMdCode size={18}/> Robust read and write API</li>
                    <li><TbMessageQuestion size={18}/> Your own customer success and community building representative</li>
                    <li><MdHealthAndSafety size={18}/> 99.5% uptime SLA and priority support</li>
                 </ul>

                 <button className='btn btn-primary'>Requeste a demo</button>
                 <small>Unlimited teammates</small>
            </div>
        </div>
        
        

    </div>

    <div className='for-teams-component'>
            <ForTeams_2></ForTeams_2>
        </div>
    </div>

    <div className="text-flex-wrap-container">
    <div className='sabit-div'>
        <PiQuotesLight color='blue' size={50}/>
        <p>Stack Overflow for Teams has been a resource for our entire company. Not only for developers to solve problems,
             it’s also enabled our sales field to answer technical questions that help them close deals.</p>
             <div>
                <b>Director of Product Management</b><br />
                <small>Microsoft</small>
             </div>
        </div>

        <div className='sabit-div'>
        <PiQuotesLight color='blue' size={50}/>
        <p>Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. 
            That’s where Stack Overflow for Teams really helps.</p>
            <div>
                <b>Director of Engineering</b><br />
                <small>Elastic Cloud</small>
            </div>
        </div>

        <div className='sabit-div'>
        <PiQuotesLight color='blue' size={50}/>
        <p>As we started to use [Stack Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, 
            next thing we knew, we had [Slack] integrations all over the place.</p>
            <div>
                <b>Engineering</b><br />
                <small>Expensify</small>
            </div>
        </div>

        <div className='sabit-div div-last-text'>
        <PiQuotesLight color='blue' size={50}/>
        <p>What we love about Stack Overflow for Teams is that it’s a very dynamic tool…there’s just 
            so many ways to use this as a liaison between different teams and different knowledge bases.</p>
             <div>
                <b>Software Engineer</b><br />
                <small>Box</small>
             </div>
        </div>
    </div>

    <div className="last-section-div-content">
        <div className="div-logo-stack">
        <FaStackOverflow className='lg-advertsng' size={50} />
        <p>stack<b>overflow</b></p>
        </div>

        <h1>Additional products that reach and engage developers & technologists…</h1>

        <div className='div-div-smaller'>

        <div >
        <FaStackOverflow color='hsl(27, 89%, 48%)' className='lg-advertsng1' size={40} />
        <b className='text-b-text'>Reac the world's largest audience of developers and technologist.</b>
        </div>
        <div>
        <FaStackOverflow color='hsl(27, 89%, 48%)' className='lg-advertsng1' size={40} />
        <b  className='text-b-text'>connecting communities with the spesific tecnolorgies they use the most.</b>
        </div>
        <div >
        <FaStackOverflow color='hsl(27, 89%, 48%)' className='lg-advertsng1 lg-advertsng2' size={40} />
        <b  className='text-b-text'>Build your employer brand</b>
        </div><br />
        

        </div>

        <button className='btn btn-primary btn-text'>About the company</button><br />
        <button className='btn'>want to work here <a href="?">Current job openings</a></button>

        
    </div>

    <Container className='content-c-row'>
      <Row>
        <Col id='img-col-2'><br /><br />
        <img src="https://cdn.sstatic.net/Sites/apple/Img/apple-touch-icon.png?v=daa7ff1d953e" alt="" />
        <img src="https://cdn.sstatic.net/Sites/unix/Img/apple-touch-icon.png?v=5cf7fe716a89" alt="" /><br /><br /><br />
        <img src="https://cdn.sstatic.net/Sites/ai/Img/apple-touch-icon.png?v=f14d741b295c" alt="" />
        <img src="https://cdn.sstatic.net/Sites/softwareengineering/Img/apple-touch-icon.png?v=5e581fc45e58" alt="" /><br /><br /><br /> <br />
        <img src="https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon.png?v=e16e1315edd6" alt="" />
        <img src="https://cdn.sstatic.net/Sites/salesforce/Img/apple-touch-icon.png?v=4c87c90207b3" alt="" />
        </Col>

        <Col className='col6-6' xs={6}>
            <b id='exchange-small'>StackExchange</b>
            <h3>Explore technical topics and other disciplines across 170+ Q&A communities</h3>

            <p>From Server Fault to Super User, much of the Stack Exchange network continues our mission to empower the world to develop technology through collective knowledge. Other sites on the Stack Exchange
                 network further encourage knowledge sharing across topics such as cooking and medicine.</p>
                 <button className='btn btn-primary'>Explore the network</button>
        </Col>
        <Col id='img-col-3'> 
        <img loading='lazy' src="https://cdn.sstatic.net/Sites/serverfault/Img/apple-touch-icon.png?v=6c3100d858bb" alt="" />
        <img src="https://cdn.sstatic.net/Sites/superuser/Img/apple-touch-icon.png?v=0ad5b7a83e49" alt="" /><br />
        <img src="https://cdn.sstatic.net/Sites/dba/Img/apple-touch-icon.png?v=cdcd5ff7b29e" alt="" />
        <img src="https://cdn.sstatic.net/Sites/quantumcomputing/Img/apple-touch-icon.png?v=2af3cc2b87e8" alt="" /><br />
        <img src="https://cdn.sstatic.net/Sites/gamedev/Img/apple-touch-icon.png?v=0cfb55927bd2" alt="" />
        <img src="https://cdn.sstatic.net/Sites/networkengineering/Img/apple-touch-icon.png?v=d66b1118cec8" alt="" />
        </Col>
      </Row>
    </Container>

    <div className="last-content-text-icon">
    <IoIosLock size={60}/>
    <p>Build a private community to share technical or non-technical knowledge.</p>
    <button className='btn btn-outline-primary'>Create a free team</button>
    </div>

     <HomeFooter></HomeFooter>

    </>
  )
}
