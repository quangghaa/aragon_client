import { formatTimeStr } from "antd/es/statistic/utils"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Back } from "../utils/svg-icons"
import NewTransModal from "./newtrans-modal"
import PDetailTable from "./p-detail-table"
import NewPermModal from "./perm-modal"

function PHeader() {
    function openTransferModal(e: any) {
        e.stopPropagation()
        const id = (document.getElementById("perm-modal")) as HTMLSelectElement
        id.classList.toggle("vm-show")
    }

    return (
        <>
            <div className="v-header-wrapper">
                <div className="v-header">
                    <div className="v-title-box">
                        <h1 className="v-title">Permissions</h1>
                    </div>
                    <div className="v-new-vote">
                        <button className="v-new-vote-btn" onClick={(e:any) => openTransferModal(e)}>New Permission</button>
                    </div>
                </div>
            </div>
            <NewPermModal />
        </>
    )
}

export default PHeader