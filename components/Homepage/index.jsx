import React from 'react'
import Navbar from './Navbar'
import VideoBackground from './VideoBackground'
import Categories from './Categories'
import Vendors from './Vendors'
import Products from './Products'

const Homepage = () => {
    return (
        <div className='bg-purple-100'>
            <Navbar />
            <VideoBackground />
            <Categories />
            <Vendors />
            <Products />
        </div>
    )
}

export default Homepage