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
                <img className="header-avatar" src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1638257833~hmac=e1788c23ce83f8d394de8dfca8fcb42f" alt="None" />
            </div>
        </div>
    </div>
}

export default Header
