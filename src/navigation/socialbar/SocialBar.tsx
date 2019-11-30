import React from 'react'
import { GitHub, LinkedIn } from '.'
import './icons.css'
import '../../home/body.css'

interface props {
}

const SocialBar: React.FC<props> = (props) => {
    return (
        <div className="socialIcons fadeIn animated delay-four">
            <GitHub fill={"#aaaaaa"} height={"40px"} link={"https://github.com/jamiehaywood"} />
            <LinkedIn fill={"#aaaaaa"} height={"40px"} link={"https://www.linkedin.com/in/jamiehaywood/"} />
        </div>
    )
}

export default SocialBar