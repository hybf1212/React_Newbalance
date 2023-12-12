import React from 'react';
import { IoCart, IoSearch, IoMenu } from "react-icons/io5";

const Header = () => {
    return(
        <>
        <header id='MO-header'>
            <div className='MO-top-header bg-white'>
                <img className='MO-top-logo d-block' src={`${process.env.PUBLIC_URL}/img/logo/newbalance-logo-b.svg`} alt="검정색 뉴발란스 로고" />
            </div>
            <div className='MO-nav-background fixed-bottom'>
                <nav className='MO-navbar bg-white d-flex justify-content-around align-items-center'>
                    <div className='d-flex justify-content-center'>
                        <button className='MO-nav-search d-block'><IoSearch className='d-block' color='black'/></button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='MO-nav-menu d-block'><IoMenu className='d-block' color='black'/></button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='MO-nav-cart d-block'><IoCart className='d-block' color='black'/></button>
                    </div>
                </nav>
            </div>

            
        </header>
        </>
    )
}

export default Header;