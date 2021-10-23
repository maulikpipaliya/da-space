import React, { FC } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
import WelcomeScreen from "./screens/WelcomeScreen"

import "./index.css"

const App: FC = () => {
    return (
        <Router>
            <Route path="/" component={WelcomeScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
        </Router>
    )
}

export default App
