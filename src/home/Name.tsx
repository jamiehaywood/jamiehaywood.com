import React from 'react'

interface props { }

const Name: React.FC<props> = (props) => {
    return (
        <div style={{ color:"#222", fontSize: "calc(5px + 5vw)"}}>Jamie Haywood</div>
    )
}

export default Name