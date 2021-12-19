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
            <div className="sidebar-top">
                {topOptions.map((option) => {
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
                })}
            </div>
            {/* <div className="sidebar-more">
                <i className="fi-rr-menu-dots" />
            </div> */}
            <div className="sidebar-bottom">
                {bottomOptions.map((option) => {
                    return (
                        <SidebarOption
                            options={option}
                            isActive={option.name === "" ? true : false}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
