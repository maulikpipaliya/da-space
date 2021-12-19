import React, { FC } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import WelcomeScreen from "./screens/WelcomeScreen"

import "./index.css"
import RegistrationScreen from "./screens/LoginScreen/RegistrationScreen"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import { ExamForm } from "./screens/ExamForm/ExamForm"

const App: FC = () => {
    return (
        <Router>
            <Route path="/" component={WelcomeScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/register" component={RegistrationScreen} exact />
            <Route path="/home" component={HomeScreen} exact />
        </Router>
    )
}

export default App
