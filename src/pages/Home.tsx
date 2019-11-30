import React from 'react'
import { NavBar, Footer } from '../navigation'
import { Body, Image } from '../home'

const Home: React.FC = () => {
    return (
        <div style={{ marginTop:"2vh"}}>
            <Image />
            <NavBar />
            <Body />
            <Footer />
        </div>
    )
}

export default Home