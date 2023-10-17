import React from 'react'
import headerImg from '../../../assets/HomeBannerImg.svg'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
    return (
        <>
            <div className='d-flex position-relative items-center justify-content-center'>
                <img src={headerImg} alt="" />
                <SearchBar />

            </div>
        </>
    )
}

export default Header