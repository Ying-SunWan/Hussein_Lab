import React, { useState } from 'react'
import team from './Data/TeamMembers'
import './Style/Team.css'
import { ImageList, ImageListItem } from '@mui/material'
import useWindowDimensions from './hooks/useWindowDimensions';
import { BsXLg } from 'react-icons/bs';


export default function Team() {
    return (
        <div>
            <TeamGallery />
        </div>
    )
}

function TeamGallery() {

    const [clickedImg, setClickedImg] = useState(null)
    const [clickedBio, setClickedBio] = useState(null)
    const [clickedName, setClickedName] = useState(null)
    const [clickedPosition, setClickedPosition] = useState(null)
    const [clickedDegree, setClickedDegree] = useState(null)

    const handleClick = (image, bio, name, position, degree) => {
        setClickedBio(bio)
        setClickedImg(image)
        setClickedName(name)
        setClickedPosition(position)
        setClickedDegree(degree)
    }

    const { height, } = useWindowDimensions();

    return (
        <div>
            {clickedImg && <Modal 
                clickedImg={clickedImg} 
                clickedBio={clickedBio}
                clickedName={clickedName} 
                clickedPosition={clickedPosition}
                clickedDegree={clickedDegree}  
                setClickedImg={setClickedImg}/>}
            <div id='teampage'>
                <ImageList
                    className='gallery'
                    sx = {{ width: '82.4vw', height: '84vh' }}
                    // rowHeight = { 227 }
                    rowHeight = { (height*0.84)/3-3 }
                    cols={6}
                    variant="quilted">
                    {team.map((item) => (
                        <ImageListItem 
                            cols={item.cols || 1} 
                            rows={item.rows || 1}>
                            <img className='galleryimg'
                                src={item.image} 
                                onClick={() => handleClick(item.image, item.bio, item.name, item.position, item.degree)}></img>
                        </ImageListItem>
                    ))}
                </ImageList>  
            </div>
        
        </div>
    )
}

const Modal = ({ clickedImg, clickedBio, clickedName, clickedPosition, clickedDegree, setClickedImg}) => {
    
    const handleClick = (e) => {
        setClickedImg(null)
        console.log('kkk')
    }

    return (
        <div className='testmodal'>
            <div className='memberinfo'>
                <div className='cancel'>
                    <BsXLg size={'2em'} onClick={handleClick} />
                </div>
                <img src={clickedImg}/>
                <div className='modaltext'>
                    <p className='name'>{clickedName}</p>
                    <p className='position'>{clickedPosition}</p>
                    <p className='degree'>{clickedDegree}</p>
                    <br />
                    <p className='bio'>{clickedBio}</p>
                </div>
            </div>     
        </div>
    )
}
