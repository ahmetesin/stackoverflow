import React from 'react'
import './homefooter.css'
import { FaStackOverflow } from "react-icons/fa";

export default function HomeFooter() {
  return (
<>
<div className="home-footer-container">
    
    <div className='lg-ul'>
    <ul >
       <li><FaStackOverflow color='hsl(27, 89%, 48%)' size={50}/></li>
    </ul>
    </div>

    <div>
    <ul>
        <a href="?"><li><b>stackoverflow</b></li></a>
        <a href="?"><li>questions</li></a>
        <a href="?"><li>help</li></a>
    </ul>
    </div>

    <div>
        <ul>
            <a href="?"><li><b>Products</b></li></a>
            <a href="?"><li>Teams</li></a>
            <a href="?"><li>Advertising</li></a>
            <a href="?"><li>collectives</li></a>
            <a href="?"><li>Talent</li></a>
        </ul>
    </div>
    <div>
        <ul>
            <a href="?"><li><b>Company</b></li></a>
            <a href="?"><li>About</li></a>
            <a href="?"><li>Press</li></a>
            <a href="?"><li>Work here</li></a>
            <a href="?"><li>Legal</li></a>
            <a href="?"><li>privacy policy</li></a>
            <a href="?"><li>Terms of service</li></a>
            <a href="?"><li>contact us</li></a>
            <a href="?"><li>cookie settings</li></a>
            <a href="?"><li>cookie policy</li></a>

        </ul>
    </div>

    <div>
        <ul>
            <a href="?"><li><b>Stack Exchange Network</b></li></a>
            <a href="?"><li>Technology</li></a>
            <a href="?"><li>Culture & recreation</li></a>
            <a href="?"><li>Life & arts</li></a>
            <a href="?"><li>science</li></a>
            <a href="?"><li>professional</li></a>
            <a href="?"><li>Business</li></a><br />
            <a href="?"><li>contact us</li></a>
            <a href="?"><li>Api</li></a>
            <a href="?"><li>Data</li></a>

        </ul>
    </div>

    <div className='last-text-li'>
        <ul>
            <a href="?"><li>Blog</li></a>
            <a href="?"><li>Facebook</li></a>
            <a href="?"><li>Twitter</li></a>
            <a href="?"><li>Linkedln</li></a>
            <a href="?"><li>Instagram</li></a>
        </ul>
        <p>Site design / logo © 2024 Stack Exchange Inc; user
             contributions licensed under CC BY-SA. rev 2024.5.10.8902</p>
    </div>
    
</div>
</>
  )
}
