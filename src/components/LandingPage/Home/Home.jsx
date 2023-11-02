import React from 'react'
import NavbarLanding from '../Navbar/NavbarLanding'
import Header from '../Header/Header'
import Carrousel from '../Carrousel/Carrousel'
import Information from '../Information/Information'
import Footer from '../Footer/Footer'
import Reasons from '../Reasons/Reasons'
import Reviews from '../Reviews/Reviews'

const Home = () => {
    return (
        <>
            <NavbarLanding />
            <Header />
            <Carrousel />
            <Reasons />
            <Information />
            <Reviews/>
            <Footer />
        </>
    )
}

export default Home