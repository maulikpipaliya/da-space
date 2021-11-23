import React from "react"
import "./Header.css"

const Header = () => {
    return <div className="header-container">
        <div className="header-left">
            <i className="fi-rr-layout-fluid"></i>
        </div>
        <div className="header-center">
            <label className="header-title">DASpace</label>
        </div>
        <div className="header-right">
            <div className="header-search">
                <i className="fi-rr-search"></i>
                <input type="text" placeholder="Search"/>
            </div>
            <div className="header-profile">
                <div className="header-options">
                    <i className="fi-rr-menu-dots"></i>
                </div>
                <img className="header-avatar"src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1637653456~hmac=adc9779712f2ad625393e7c932e67f4a" alt="None" />
            </div>
        </div>
    </div>
}

export default Header
