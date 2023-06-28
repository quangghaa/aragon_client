import React from "react"
import { useNavigate } from "react-router-dom"
import { Back } from "../utils/svg-icons"
import PDetailTable from "./p-detail-table"

function PDetailContent() {
    const navigate = useNavigate()

    function backClick(e: any) {
        navigate("/permission")
    }

    return (
        <div>
            <div className="eo-header pd-back-header">
                <div className="back-box">
                    <button className="back-btn" onClick={(e: any) => backClick(e)}>
                        <span className="back-icon-box"><Back /></span>
                        <span className="back-name">Back</span>
                    </button>
                </div>
            </div>
            
            <div className="ft-content">
                <div className="ftc-header-wrapper">
                    <div className="ftc-header">
                        <div className="ftc-header-title">Available permissions</div>
                            
                    </div>

                </div>

                <div>
                    <PDetailTable />
                </div>
            </div>
        </div>
    )
}

export default PDetailContent