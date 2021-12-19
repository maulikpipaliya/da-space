import React, { FC, useEffect, useState } from "react"
import axios from "axios"

const WelcomeScreen: FC = () => {
    const [text, setText] = useState<string>("initialState")

    const clickHandler = async () => {
        const { data } = await axios.get(`/api/`)
        setText(JSON.stringify(data))
    }

    useEffect(() => {
        return () => {}
    }, [])

    return (
        <div>
            <div className="welcome-page">
                <img
                    src="./DASpaceLogo.svg"
                    className="wp-logo"
                    alt="DAIICT Logo"
                />
                <div className="text-center">
                    <div className="wp-text bold">
                        Welcome to DASpace
                        {text}
                    </div>
                    <button onClick={clickHandler}>Haha</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen
