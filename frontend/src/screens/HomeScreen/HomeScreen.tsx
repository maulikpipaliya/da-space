import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
    useParams,
} from "react-router-dom"
import Header from "../../components/Header/Header"
import { LeftSide } from "../../components/LeftSide/LeftSide"
import Sidebar from "../../components/Sidebar/Sidebar"
import { RootState } from "../../store"
import ChatApp from "../ChatBox/ChatApp"
import ChatBox from "../ChatBox/ChatBox"
import { ExamForm } from "../ExamForm/ExamForm"
import { PlacementForm } from "../PlacementForm/PlacementForm"
import "./HomeScreen.css"

const HomeScreen = () => {
    const screenState = useSelector((state: RootState) => state.uiState)

    const histroy = useHistory()

    const params = useParams()

    console.log("params")
    console.log(params)

    const screenName = screenState?.data?.screenName

    console.log(screenName)

    const [screenViewName, setScreenViewName] = useState(screenName)

    useEffect(() => {
        setScreenViewName(screenState.data.screenName)
        return () => {}
    }, [screenState])

    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>

                <div className="home-main home-rightside">
                    <ChatBox />
                    {screenViewName === "chat" && <ChatBox />}
                    {screenViewName === "exam" && <ExamForm />}

                    {/* <PlacementForm /> */}
                </div>
                {/* <Router>
                    <div className="home-leftside">
                        <LeftSide />
                    </div>
                    <div className="home-rightside">
                        <PlacementForm />
                    </div>
                </Router> */}
            </div>
        </div>
    )
}

export default HomeScreen
