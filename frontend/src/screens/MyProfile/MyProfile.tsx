import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import { RootState } from "../../store"
import "../HomeScreen/HomeScreen.css"

function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search])
}

const MyProfile = () => {
    const screenState = useSelector((state: RootState) => state.uiState)

    const location = useQuery()

    console.log(location.get("view"))

    const screenName = screenState?.data?.screenName

    console.log(screenName)

    const [screenViewName, setScreenViewName] = useState(location.get("view"))

    useEffect(() => {
        // console.log("screenViewName")
        // console.log(screenViewName)
        setScreenViewName(screenState.data.screenName)
        return () => {}
    }, [])
    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>
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
