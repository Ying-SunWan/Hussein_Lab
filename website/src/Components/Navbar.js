import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';
import './Style/Navbar.css';

export default function Navbar() {

    const [cancel, setCancel] = useState(false)
    const [navlinksState, setNavlinksState] = useState('navlinks')
    const [navcontentState, setNavcontentState] = useState('navcontent')
    const [navborderState, setNavborderState] = useState('navborder')
    const [linkState, setLinkState] = useState('link')
    const [navtextState, setNavtextState] = useState('navtext')

    const UpdateMenu = () => {
        if (cancel) {
            setCancel(false)
            setNavlinksState('navlinks')
            setNavcontentState('navcontent')
            setNavborderState('navborder')
            setLinkState('link')
            setNavtextState('navtext')
        } else {
            setCancel(true)
            setNavlinksState('navlinks-visible')
            setNavcontentState('navcontent-visible')
            setNavborderState('navborder-visible')
            setLinkState('link-visible')
            setNavtextState('navtext-visible')
        }
    }

    return (
        <div>
            {cancel ? <BsXLg className='navicon' onClick={UpdateMenu} /> : <FaBars className='navicon' onClick={UpdateMenu} />}
            <div className={navlinksState}>
                <ul className={navcontentState}>
                    <li className={linkState}>
                        <Link 
                            activeClass='active' 
                            to='homepage' spy={true} 
                            smooth={true}
                            offset={-10}
                            duration={500}><div className={navborderState}><div className={navtextState}>Home</div></div></Link>
                    </li>
                    <li className={linkState} >
                        <Link
                            activeClass='active'
                            to='projectspage' spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}><div className={navborderState}><div className={navtextState}>Research</div></div></Link>
                    </li>
                    <li className={linkState}>
                        <Link
                            activeClass='active'
                            to='teampage' spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}><div className={navborderState}><div className={navtextState}>Team</div></div></Link>
                    </li>
                    <li className={linkState}>
                        <Link
                            activeClass='active'
                            to='newspage' spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}><div className={navborderState}><div className={navtextState}>News</div></div></Link>
                    </li>
                    <li className={linkState}>
                        <Link
                            activeClass='active'
                            to='contactpage' spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}><div className={navborderState}><div className='navtext'>Contact</div></div></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}