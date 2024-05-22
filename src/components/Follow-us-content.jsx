import React from 'react';
import './Follow-us.css';

import { HiOutlineExternalLink } from "react-icons/hi";
 
export default function Follow_us() {
    
  return (
    <div className='follow'>
        <a href="?"><div><p>Blog <HiOutlineExternalLink /></p></div></a>
        <a href="?"><div><p>Podcast <HiOutlineExternalLink /></p></div></a>
        <a href="?"><div><p>Newsletter <HiOutlineExternalLink /></p></div></a>
    </div>
  )
}
