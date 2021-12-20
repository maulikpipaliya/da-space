import React, {useState} from "react"
import "./Sidebar.css"
// import { SidebarBottom, SidebarData } from "../Data/SidebarData"
// import { SidebarOption } from "./SidebarOption"

const Sidebar = () => {
    // const topOptions = SidebarData
    // const more = SidebarMore
    // const bottomOptions = SidebarBottom

    const [selectedTagBell, setSelectedTagBell] = useState(false)
    const [selectedTagChat, setSelectedTagChat] = useState(false)
    const [selectedTagTeams, setSelectedTagTeams] = useState(false)
    const [selectedTagPlacements, setSelectedTagPlacements] = useState(false)
    const [selectedTagExam, setSelectedTagExam] = useState(false)
    const [selectedTagCalls, setSelectedTagCalls] = useState(false)

    function eventHandlerBell() {
        setSelectedTagBell(selectedTagBell ? false : true)
        setSelectedTagChat(false)
        setSelectedTagTeams(false)
        setSelectedTagPlacements(false)
        setSelectedTagExam(false)
        setSelectedTagCalls(false)
    }

    function eventHandlerChat() {
        setSelectedTagChat(selectedTagChat ? false : true)
        setSelectedTagBell(false)
        setSelectedTagTeams(false)
        setSelectedTagPlacements(false)
        setSelectedTagExam(false)
        setSelectedTagCalls(false)
    }
    function eventHandlerTeams() {
        setSelectedTagTeams(selectedTagTeams ? false : true)
        setSelectedTagBell(false)
        setSelectedTagChat(false)
        setSelectedTagPlacements(false)
        setSelectedTagExam(false)
        setSelectedTagCalls(false)
    }
    function eventHandlerPlacements() {
        setSelectedTagPlacements(selectedTagPlacements ? false : true)
        setSelectedTagBell(false)
        setSelectedTagChat(false)
        setSelectedTagTeams(false)
        setSelectedTagExam(false)
        setSelectedTagCalls(false)
    }
    function eventHandlerExam() {
        setSelectedTagExam(selectedTagExam ? false : true)
        setSelectedTagBell(false)
        setSelectedTagChat(false)
        setSelectedTagTeams(false)
        setSelectedTagPlacements(false)
        setSelectedTagCalls(false)
    }
    function eventHandlerCalls() {
        setSelectedTagCalls(selectedTagCalls ? false : true)
        setSelectedTagBell(false)
        setSelectedTagChat(false)
        setSelectedTagTeams(false)
        setSelectedTagPlacements(false)
        setSelectedTagExam(false)
    }

    return (
        <div className="sidebar-container">
            <div className={selectedTagBell ? "text-center active abc" : "text-center abc"} onClick={eventHandlerBell}>
                <i className="fi-rr-bell"></i>
                <p>Activity</p>
            </div>
            <div className={selectedTagChat ? "text-center active abc" : "text-center abc"} onClick={eventHandlerChat}>
                <i className="fi-rr-comment"></i>
                <p>Chat</p>
            </div>
            <div className={selectedTagTeams ? "text-center active abc" : "text-center abc"} onClick={eventHandlerTeams}>
                <i className="fi-rr-user"></i>
                <p>Teams</p>
            </div>
            <div className={selectedTagPlacements ? "text-center active abc" : "text-center abc"} onClick={eventHandlerPlacements}>
                <i className="fi-rr-briefcase"></i>
                <p>Placements</p>
            </div>
            <div className={selectedTagExam ? "text-center active abc" : "text-center abc"} onClick={eventHandlerExam}>
                <i className="fi-rr-test"></i>
                <p>Exam</p>
            </div>
            <div className={selectedTagCalls ? "text-center active abc" : "text-center abc"} onClick={eventHandlerCalls}>
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
