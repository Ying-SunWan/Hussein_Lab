import React from 'react'
import { interaction, layer, custom, control, Interactions, Overlays, Controls, Map, Layers, Overlay, Util  } from "react-openlayers";
import { fromLonLat } from "ol/proj";
import './Style/Contact.css';

export default function Contact() {
    return (
        <div id ="contactpage">
            <Location />
            <Footer />
        </div>
    )
}

function Location() {

    return (
        <div className='map'>
            <Map view={{ center: fromLonLat([-113.52975330348869, 53.5283420524856]), zoom: 17 }}>
                <Layers>
                    <layer.Tile></layer.Tile>
                </Layers>
            </Map>
        </div>
    )
}

function Footer() {
    return (
        <div id='contactinfo'>
            <div className='contact'>
                <h3>Amina Hussein, PhD</h3>
                <h3>aehussein@ualberta.ca</h3>
            </div>
            <br />
            <br />
            <div className='address'>
                <p>11-368 Donadeo ICE</p>
                <p>9211-116 St</p>
                <p>Edmonton, AB</p>
                <p>T6G 2H5</p>
            </div>
        </div>
    )
}