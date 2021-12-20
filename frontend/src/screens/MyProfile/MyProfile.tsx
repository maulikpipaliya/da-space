import React from "react"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import "../HomeScreen/HomeScreen.css"

const MyProfile = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <Sidebar />
                <div className="home-main home-rightside">
                    {/* Edit Profile Here */}
                    <div className="col-md-9 personal-info container">
                        <h3>Personal info</h3>

                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">
                                    First name:
                                </label>
                                <div className="col-lg-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value="Jane"
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label className="col-lg-3 control-label">
                                    Last name:
                                </label>
                                <div className="col-lg-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value="Bishop"
                                    />
                                </div>
                            </div>    
                            <div className="form-group mt-2">
                                <label className="col-lg-3 control-label">
                                    Email:
                                </label>
                                <div className="col-lg-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value="janesemail@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <label className="col-md-3 control-label">
                                    Username:
                                </label>
                                <div className="col-md-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        value="janeuser"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label"></label>
                                <div className="col-md-8">
                                    <input
                                        type="button"
                                        className="btn btn-primary"
                                        value="Save Changes"
                                    />
                                    <span></span>
                                    <input
                                        type="reset"
                                        className="btn btn-default"
                                        value="Cancel"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
