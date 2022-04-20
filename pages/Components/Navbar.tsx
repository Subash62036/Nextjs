import Link from 'next/link'
import React from 'react'

function Navbar() {
    const Menu = [
        { Name: 'Home', Link: '/home' },
        { Name: 'About', Link: '/about' },
        { Name: 'Contact', Link: '/contact' },
        { Name: 'Services', Link: '/service' },

    ]
    return (
        <div>
            <nav>
                <li className='font-bold font-[Poppins] text-lg uppercase ml-5 flex justify-end'>
                    {Menu.map((data) => (
                        <Link  href={data.Link} >
                            <a>{data.Name}</a>
                        </Link>
                    ))}
                </li>
            </nav>
        </div>
    )
}

export default Navbar;
