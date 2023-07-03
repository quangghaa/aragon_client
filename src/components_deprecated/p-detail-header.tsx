import React from "react"
import { useNavigate } from "react-router-dom"
import { NavVoteIcon } from "../utils/image"
import { Back } from "../utils/svg-icons"
import PDetailTable from "./p-detail-table"
import NewPermModal from "./perm-modal"

function PDetailHeader() {
    function openTransferModal(e: any) {
        e.stopPropagation()
        const id = (document.getElementById("perm-modal")) as HTMLSelectElement
        id.classList.toggle("vm-show")
    }

    return (
        <div>
            <div className="v-header-wrapper">
                <div className="v-header">
                    <div className="v-title-box d-y-center">
                        <h1 className="v-title mr">Voting Permissions</h1>
                        <div className="vote-with-icon-box">
                            <button className="vote-with-icon">
                                <div className="vwi-small-box">
                                    <span className="vwi-icon"><NavVoteIcon /></span>
                                    <span className="vwi-text">Voting</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="v-new-vote">
                        <button className="v-new-vote-btn" onClick={(e: any) => openTransferModal(e)}>New Permission</button>
                    </div>
                </div>
            </div>
            <NewPermModal />

        </div>
    )
}

export default PDetailHeader