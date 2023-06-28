import React from "react"
import { useNavigate } from "react-router-dom"
import { NavVote } from "../utils/image"
import { Back } from "../utils/svg-icons"
import PDetailTable from "./p-detail-table"
import NewPermModal from "./perm-modal"

function ADetailHeader() { 
    return (
        <div>
            <div className="v-header-wrapper">
                <div className="v-header">
                    <div className="v-title-box d-y-center">
                        <h1 className="v-title mr">App Center</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ADetailHeader