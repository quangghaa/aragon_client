import React from "react";
import { useNavigate } from "react-router-dom";
import { Finance, NavApp, NavHome, NavOrg, NavVote, Permission } from "../utils/image";
import { Down } from "../utils/svg-icons";

function Navigation() {
    const navigate = useNavigate()

    function toHome() {
        navigate("/home")
    }

    function toVotePage() {
        navigate("/voting")
    }

    function toFinance() {
        navigate("/finance")
    }
    
    return (
        <nav className="ex-nav">
            <h1 className="nav-title">apps</h1>
            <div className="app-box">

                <div className="home-box">
                    <div className="nav-item">
                        <span className="nav-icon-box">
                            <NavHome />
                        </span>
                        <span className="nav-item-name" onClick={toHome}>Home</span>
                    </div>
                </div>

                <div className="other-box">
                    <div className="nav-item">
                        <span className="nav-icon-box">
                            <NavVote />
                        </span>
                        <span className="nav-item-name" onClick={toVotePage}>Voting</span>
                    </div>
                    <ul className="child-list">
                        <li className="nav-child-item">ant (50%)</li>
                        <li className="nav-child-item">ant (67%)</li>
                    </ul>
                    <div className="nav-item">
                        <span className="nav-icon-box">
                            <Finance />
                        </span>
                        <span className="nav-item-name" onClick={toFinance}>
                            Finance
                        </span>
                    </div>
                </div>

            </div>

            <div className="system-box">
                <h1 className="sys-title">system <span><Down /></span></h1>
                <div className="system-list">
                    <div className="nav-item">
                        <span className="nav-icon-box">
                            <Permission />
                        </span>
                        <span className="nav-item-name">Permissions</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon-box">
                            <NavApp />
                        </span>
                        <span className="nav-item-name">App Center</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon-box">
                            <NavOrg />
                        </span>
                        <span className="nav-item-name">Organization</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;