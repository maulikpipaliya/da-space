import React from "react"
import "./Sidebar.css"
import { SidebarBottom, SidebarData } from "./SidebarData"
import { SidebarOption } from "./SidebarOption"

const Sidebar = () => {
    const topOptions = SidebarData
    // const more = SidebarMore
    const bottomOptions = SidebarBottom
    return (
        <div className="sidebar-container">
            <div className="sidebar-top">
                <div>
                    {topOptions.map((option) => {
                        return (                                 
                                <SidebarOption options={option} />
                        )
                    })}
                </div>
                <div className="sidebar-more">
                    <i className="fi-rr-menu-dots"></i>
                </div>
                <div className="sidebar-bottom">
                    {bottomOptions.map((option) => {
                        return <SidebarOption options={option} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
