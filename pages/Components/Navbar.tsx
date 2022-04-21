import Link from 'next/link'
import React, {useEffect, useState } from 'react'
import Image from 'next/image';
import { addListener } from 'process';

function Navbar() {
    const Menu = [
        { Name: 'About Us', Link: '/about', Id: 2 },
        { Name: 'Services', Link: '/service', Id: 3 },
        { Name: 'Packages', Link: '/packages', Id: 4 },
        { Name: 'Why Us', Link: '/why', Id: 5 },
        { Name: 'Careers', Link: '/career', Id: 6 }
    ];
   // code for the getting window size
   function useWindowSize(){
       const[size,setSize]=useState(window.innerWidth);
       useEffect(()=>{
           const handleResize=()=>{
               setSize(window.innerWidth);
           }
        window.addEventListener("resize",handleResize);
       },[])
       
   }
   
    let width=760; 
    const [open, setOpen] = useState(false);
    
    return (
        <div className='w-full p-1 md:p-3' style={{ background: '#FDD4BF' }} id="header">
            <nav className='flex justify-between ml-3 mr-3 md:mr-10 md:ml-10 '>
                <div className='logo mt-auto mb-auto grid'>
                    <Image src="/Images/logo.png" alt="brand-image" width="227" height="40" />
                </div>
                <div className='navigation '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden " onClick={() => setOpen(!open)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' :'M4 6h16M4 12h16m-7 6h7'} />
                    </svg>
                    <ul className='md:flex mt-' >
                        {Menu.map((data) => (
                            <li key={data.Id} className=' hidden md:block font-bold font-[Poppins] text-xs md:text-lg uppercase mt-auto mb-auto ' style={open && width>600? { display: 'none' }:{ display: 'block' }} >
                                <Link href={data.Link} >
                                    <a className='ml-5 '>{data.Name}</a>
                                </Link>
                            </li>))}
                    </ul>

                </div>
            </nav>
        </div>
    )
} export default Navbar;
