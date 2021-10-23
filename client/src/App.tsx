import React, { FC } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import WelcomeScreen from "./screens/WelcomeScreen"
import "bootstrap/dist/css/bootstrap.min.css"

const App: FC = () => {
    return (
        <Router>
            <Route path="/" component={WelcomeScreen} />
        </Router>
    )
}

export default App
