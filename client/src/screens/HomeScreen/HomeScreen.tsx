import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./HomeScreen.css"

const HomeScreen = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>
                <div className="home-leftside">
                    This is left side
                </div>
                <div className="home-rightside">
                    This is right side
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
