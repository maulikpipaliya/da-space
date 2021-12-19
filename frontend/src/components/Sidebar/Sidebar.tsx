import React from "react"
import "./Sidebar.css"
import { SidebarBottom, SidebarData } from "../Data/SidebarData"
import { SidebarOption } from "./SidebarOption"

const Sidebar = () => {
    const topOptions = SidebarData
    // const more = SidebarMore
    const bottomOptions = SidebarBottom

    return (
        <div className="sidebar-container">
            <div className="text-center">
                <i className="fi-rr-bell"></i>
                <p>Activity</p>
            </div>
            <div className="text-center">
                <i className="fi-rr-comment"></i>
                <p>Chat</p>
            </div>
            <div className="text-center">
                <i className="fi-rr-user"></i>
                <p>Teams</p>
            </div>
            <div className="text-center">
                <i className="fi-rr-briefcase"></i>
                <p>Placements</p>
            </div>
            <div className="text-center">
                <i className="fi-rr-test"></i>
                <p>Exam</p>
            </div>
            <div className="text-center">
                <i className="fi-rr-headset"></i>
                <p>Calls</p>
            </div>

            {/* {topOptions.map((option) => {
                    return (
                        <div>
                            <SidebarOption
                                options={option}
                                isActive={
                                    option.id === 4 ? true : false
                                }
                            />
                        </div>
                    )
                })} */}
            {/* <div className="sidebar-more">
                <i className="fi-rr-menu-dots" />
            </div> */}
            {/* <div className="sidebar-bottom">
                {bottomOptions.map((option) => {
                    return (
                        <SidebarOption
                            options={option}
                            isActive={option.name === "" ? true : false}
                        />
                    )
                })}
            </div> */}
        </div>
    )
}

export default Sidebar
