import React from 'react'
import './forteams2.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSlack } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiOkta } from "react-icons/si";
import { MdOutlineVpnKey } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";


export default function ForTeams_2() {
  
    window.addEventListener("scroll",function(){
       const df= document.getElementById("df")
       
        if(this.pageYOffset = 5733){
            df.style.display ="block"
        }

    })
    

  return (
    <>
    <div className="divs-flex-contents">
        <div>
            <p>A Forrester Consulting study shows <b>191% return on 
                investment</b> with Stack Overflow for Teams.</p>
        </div>

        <div>
            <p>The world’s largest telecom firm <b>saved $10M</b> in deflected support cases 
                with our centralized knowledge base.</p>
        </div>

        <div>
            <p>Subject-matter experts at software platform
                 Unqork had <b>27% more time</b> to work on projects after using Teams.</p>
        </div>
        <div>
            <p>You can save time and money with stack overflow for teams</p>
            <button className='btn btn-outline-primary'>colculate your ROI</button>
        </div>
    </div>

    <Container className='container-row'>
      <Row className='row'>
        <Col id='col-1'>
          <img id='img-col' src="https://cdn.sstatic.net/Img/home/illo-integrations-left.png?v=0a97d470e180" alt="" />
        </Col>
        <Col className='col6-z' xs={6}>
            <h2><b>Integrates with and improves other tools</b></h2>
            <p id='text-row'>
            All plans come with integrations for ChatOps tools Slack & Microsoft Teams in order to cut down on pings, 
            limit distractions and make the tools even more powerful. 
            Business and Enterprise customers get access to Jira, GitHub & Okta integrations.
            </p>
            <div className='logos-social'>
            <FaSlack size={50} className='lg-slack'/>
            <BsMicrosoftTeams size={50} className='lg-micrsft'/>
            <FaGithub size={50}  className='lg-git'/>
            <SiJira size={50} className='lg-jira'/>
            <SiOkta size={50} className='lg-okta'/>
            <p>Some of the premium features available with paid tiers</p>
            </div>

            
        </Col>
        <Col className='last-col'>
        
        <img className='col-img' src="https://cdn.sstatic.net/Img/home/illo-integrations-right.png?v=90c26b9154c7" alt="" />
        </Col>
      </Row>
    </Container>

    <div className="animate-divs-3">
        <div id='df'>
        <MdOutlineVpnKey size={40} /><br />
        <p id='f'>Robust read and write API</p>
        </div>

        <div>
        <IoIosLock size={40}/><br />
        <p>Single sign-on with AD or SAML</p>
        </div>
        <div>
        <FaPeopleGroup size={40}/><br />
        <p>Your own customer success representative</p>
        </div>
        <div>
        <FaHeadset size={40}/>
        <p>99.5% uptime SLA and priority support</p>
        </div>
    </div>

    </>
  )
}
