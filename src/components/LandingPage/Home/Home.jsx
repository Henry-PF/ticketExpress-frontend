import React from 'react'
import NavbarLanding from '../Navbar/NavbarLanding'
import Header from '../Header/Header'
import Carrousel from '../Carrousel/Carrousel'
import Information from '../Information/Information'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <NavbarLanding />
            <Header />
            <Carrousel />
            <Information />
            <Footer />
        </>
    )
}

export default Home