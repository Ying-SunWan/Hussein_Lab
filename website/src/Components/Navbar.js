import React from 'react';
import { Link } from 'react-scroll';
import './Style/Navbar.css';

export default function Navbar() {
    return (
        <div className="navlinks">
            <ul className='navcontent'>
                <li className="link">
                    <Link 
                        activeClass='active' 
                        to='homepage' spy={true} 
                        smooth={true}
                        offset={-10}
                        duration={500}><div className='navborder'><div className='navtext'>Home</div></div></Link>
                </li>
                <li className="link">
                    <Link
                        activeClass='active'
                        to='projectspage' spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}><div className='navborder'><div className='navtext'>Research</div></div></Link>
                </li>
                <li className="link">
                    <Link
                        activeClass='active'
                        to='teampage' spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}><div className='navborder'><div className='navtext'>Team</div></div></Link>
                </li>
                <li className="link">
                    <Link
                        activeClass='active'
                        to='newspage' spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}><div className='navborder'><div className='navtext'>News</div></div></Link>
                </li>
                <li className="link">
                    <Link
                        activeClass='active'
                        to='contactpage' spy={true}
                        smooth={true}
                        offset={-10}
                        duration={500}><div className='navborder'><div className='navtext'>Contact</div></div></Link>
                </li>
            </ul>
        </div>
        
    )
}