import React from 'react';
import logoImg from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={'/'}>
            <img src={logoImg} alt="" width={100} height={100} className='hidden md:block' />
        </Link>
    );
};

export default Logo;