import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import Services from '../component/Services'
import FeaturedRooms from '../component/FeaturedRooms'

const Home = () => {
    return (

        <div>
            <Hero>
                <Banner title="luxurious rooms" 
                    subtitle="deluxe rooms starting at Rp100">
                        <Link to='/rooms' className="btn-primary">
                            our rooms
                        </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>
    )
}

export default Home