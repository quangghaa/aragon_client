import React from "react";
import { useNavigate } from "react-router-dom";
import { Back } from "../utils/svg-icons";

function ExistingOrg() {
    const navigate = useNavigate()

    function backClick(e: any) {
        navigate("/")
    }

    return (
        <div className="eo">
            <div className="eo-header">
                <div className="back-box">
                    <button className="back-btn" onClick={(e: any) => backClick(e)}>
                        <span className="back-icon-box"><Back /></span>
                        <span className="back-name">Back</span>
                    </button>
                </div>
            </div>

            <form className="eo-form">
                <div className="eo-form-box">
                    <div className="eo-form-box-child">
                        <label className="eo-label">name of existing organization</label>
                        <div className="eo-search-box">
                            <input placeholder="Type an organization name" className="eo-input"></input>
                            <div className="tail-box">
                                .aragonid.eth
                            </div>
                        </div>
                    </div>
                </div>
                <button className="eo-open-btn">Open organization</button>
            </form>
        </div>
    )
}

export default ExistingOrg;