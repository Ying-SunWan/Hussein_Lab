import React from 'react'
import './Style/Home.css';

export default function Home() {
    return (
        <div>
            <HomeHeader />
        </div>
    )
}

function HomeHeader() {
    return(
        <div id='homepage'>
            <div className="title">
                <p id="titlename">Hussein Lab</p>
                <p id="subtitle">Researching High-Intensity Laser-Matter Interactions</p>
            </div>
            <img src="./images/lens_setup.jpg" className="headerimage"></img>
        </div>
    )
}

