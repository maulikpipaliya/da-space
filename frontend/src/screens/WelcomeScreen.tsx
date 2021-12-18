import React, { FC } from "react"

const WelcomeScreen: FC = () => {
    return (
        <div>
            <div className="welcome-page">
                <img
                    src="./DASpaceLogo.svg"
                    className="wp-logo"
                    alt="DAIICT Logo"
                />
                <div className="text-center">
                    <div className="wp-text bold">Welcome to DASpace</div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen
