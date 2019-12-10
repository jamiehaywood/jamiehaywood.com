import React from 'react'
import { underConstruction } from '../images'

interface props { }

const Blog: React.FC<props> = (props) => {
  return (
    <div style={{ display: "flex", height:"100vh" }}>
      <div style={{ margin: "auto" }}>
        <img src={underConstruction} width={"300px"} style={{ textAlign: "center" }} />
      </div>
    </div>
  )
}

export default Blog