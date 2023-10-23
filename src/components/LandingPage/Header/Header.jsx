import React from 'react'
import headerImg from '../../../assets/HomeBannerImg.svg'
import logo from '../../../assets/logo.png'
import SearchBar from '../SearchBar/SearchBar'
import styles from './header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <picture className={styles.logo}>
                    <img src={logo} alt="" />
                </picture>
                <img src={headerImg} alt="" />
            </div>
            <SearchBar />
        </>
    )
}

export default Header