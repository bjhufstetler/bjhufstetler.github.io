import React from 'react';
import './Navbar.css'
import { 
    AiFillGithub,
    AiFillQuestionCircle,
    AiFillSetting,
    AiOutlineAreaChart
 } from 'react-icons/ai'

function Header() {
    return(
        <header>
            <div className="nav-left">
                <button data-testid="nav-github"><AiFillGithub /></button>
                <button data-testid="nav-help"><AiFillQuestionCircle /></button>
            </div>
            <div className="nav-center" data-testid="nav-title">
                {"\u03A8"}
            </div>
            <div className="nav-right">    
                    <button data-testid="nav-profile"><AiOutlineAreaChart /></button>
                    <button data-testid="nav-settings"><AiFillSetting /></button>
            </div>
        </header>
    )
}

export default Header;