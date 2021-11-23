import React, { FC } from 'react'
import { ISidebarData } from './SidebarData'
import "./SidebarOption.css"


interface SidebarProps {
    options: ISidebarData;
}
export const SidebarOption : FC<SidebarProps> = ({options}) => {
    return (
        <div className="sidebar-options">
            <div className="sidebar-icon">
                {options.icon}
            </div>
            {options.name&&<label className="sidebar-label">{options.name}</label>}
        </div>
    )
}
