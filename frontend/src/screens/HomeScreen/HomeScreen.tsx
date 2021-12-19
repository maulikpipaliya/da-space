import React, {useState} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "../../components/Header/Header"
import { LeftSide } from "../../components/LeftSide/LeftSide"
import Sidebar from "../../components/Sidebar/Sidebar"
import { ExamForm } from "../ExamForm/ExamForm"
import { PlacementForm } from "../PlacementForm/PlacementForm"
import "./HomeScreen.css"

const HomeScreen = () => {

    

    return (
        <div className="home-container">
            <Header />
            <div className="home-body">
                <div className="home-sidebar">
                    <Sidebar />
                </div>
                <div className="home-rightside">
                    {/* <ExamForm /> */}
                    <PlacementForm />
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
