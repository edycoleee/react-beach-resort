import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../component/RoomsContainer'

const Room = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="our rooms" subtitle="">
                    <Link to='/' className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </div>
    )
}

export default Room;
