import React from 'react'
import './image.css'

interface props {
}

const Image: React.FC<props> = (props) => {
    return (
        <div className="photoContainer fadeIn animated delay-quick">
            <img className="profile" alt="me" src="https://media.licdn.com/dms/image/C4D03AQEOCOhR2MNXJQ/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=TPu5B-PpE5yL-ZlSUA68TpTTKdbuxItBDQ3DwitTgR0">
            </img>
        </div>
    )
}

export default Image