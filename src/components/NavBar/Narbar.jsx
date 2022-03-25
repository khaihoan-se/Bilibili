import './style.scss'

import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../asset/icons/Logo';
import SearchIcon from '../../asset/icons/SearchIcon'
import LangIcon from '../../asset/icons/LangIcon'
import DownloadIcon from '../../asset/icons/DownloadIcon'
import BtnDow from '../../asset/icons/BtnDow'
import BtnUpload from '../../asset/icons/BtnUpload'
import Avatar from '../Avatar/Avatar';

const Narbar = () => {
    return (
        <div className="navbar">
            {/* container */}
            <div className="container">
                {/* Header left -- Logo */}
                <Link className="navbar__left" to='/'>
                    <Logo className='navbar__left-logo' />
                </Link>
                {/* Header right -- search -- toool */}
                <div className="navbar__right">
                    {/* Header right --- search */}
                    <div className="comp__search">
                        <div className="comp__search-main">
                            <input className='comp__search-main-input' type="text" />
                            {/* popup search */}
                            {/* icon search */}
                            <SearchIcon className='comp__search-main-search__icon' />
                        </div>
                    </div>
                    {/* Header right -- dropdown */}
                    <div className="comp__dropdown dropdown">
                        <button className="comp__dropdown-btn">
                            <LangIcon className='comp__dropdown-icon__lang' />
                            <DownloadIcon className='comp__dropdown-icon__dow' />
                        </button>
                    </div>
                    {/* Header right -- cell */}
                    <Link to='/download'>
                        <a className='comp__cell' target='_blank'>
                            <BtnDow className='comp__cell-icon' />
                            <div class="comp__cell-title">Tải ứng dụng</div>
                        </a>
                    </Link>
                    <Link to='/'>
                        <a className='comp__cell' target='_blank'>
                            <BtnUpload className='comp__cell-icon' />
                            <div class="comp__cell-title">Tải lên</div>
                        </a>
                    </Link>
                    {/* Header right -- avatar */}
                    <div className="comp__cell">
                        <div className="comp__avatar dropdown">
                            <Avatar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Narbar;
