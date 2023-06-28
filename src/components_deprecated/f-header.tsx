import { formatTimeStr } from "antd/es/statistic/utils"
import React from "react"
import NewTransModal from "./newtrans-modal"

import NewvoteModal from "./newvote-modal"

function FHeader() {
    function openTransferModal(e: any) {
        e.stopPropagation()
        var id = (document.getElementById("trans-modal")) as HTMLSelectElement
        id.classList.toggle("vm-show")

        // default highlight in deposit modal
        var id = (document.getElementById("tm-nav-deposit")) as HTMLSelectElement
        id.classList.add("show-highlight")

        // default show deposit modal
        var id = (document.getElementById("deposit-form")) as HTMLSelectElement
        id.classList.add("form-show")
    }

    return (
        <>
            <div className="v-header-wrapper">
                <div className="v-header">
                    <div className="v-title-box">
                        <h1 className="v-title">Finance</h1>
                    </div>
                    <div className="v-new-vote">
                        <button className="v-new-vote-btn" onClick={(e:any) => openTransferModal(e)}>New transfer</button>
                    </div>
                </div>
            </div>
            <NewTransModal />
        </>
    )
}

export default FHeader