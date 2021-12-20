import React from "react"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"

const MyProfile = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <Sidebar />
                <div className="home-main home-rightside">
                    Edit Profile Here
                </div>
            </div>
        </div>
    )
}

export default MyProfile
