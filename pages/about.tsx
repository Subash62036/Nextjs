import React from 'react'
import Navbar from './Components/Navbar';
import TextImageBox from './Components/TextImageBox';


function About() {
 const data=
     {
       title:'test',
       content:'lkjflsjafl f;sljfl;sj',
       img:'https://cdn-icons-png.flaticon.com/128/7336/7336256.png',
       order1:2,
       order2:1
   }
 
  return (
    <div>
        <Navbar>Contact</Navbar>
       <TextImageBox Data={data}/>
    </div>
  )
}

export default About
