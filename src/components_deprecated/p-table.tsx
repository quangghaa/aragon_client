import { Select } from "antd"
import React from "react"
import { NavVote } from "../utils/image"
import { DotDotDot, Down } from "../utils/svg-icons"
import { VButtonPopup } from "./v-btn-popup"

function PTable() {
    function vBtnClick(e: any) {
        e.stopPropagation()
        const id = (document.getElementById("status-popup-id")) as HTMLSelectElement
        id.classList.toggle("show-v-popup")
    }

    function handleChange() {
        console.log("handle change")
    }

    return (
        <table className="f-table">
            <thead className="ftb-head">
                <tr>
                    <th className="th-item">
                        
                    </th>
                    <th className="th-item">
                        Action
                    </th>
                    <th className="th-item">
                        on app
                    </th>
                    <th className="th-item">
                        ASSIGNED TO ENTITY
                    </th>
                    <th className="th-item th-amount">
                        managed by
                    </th>
                    <th className="th-item">
                        
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr className="body-row">
                    <td className="tb-item">
                        <div className="tb-item-box">
                            
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            Create new votes
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <div className="vote-with-icon-box">
                                <button className="vote-with-icon">
                                    <div className="vwi-small-box">
                                        <span className="vwi-icon"><NavVote /></span>
                                        <span className="vwi-text">Voting</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <div className="vote-with-icon-box">
                                <button className="vote-with-icon">
                                    <div className="vwi-small-box">
                                        <span className="vwi-icon"><NavVote /></span>
                                        <span className="vwi-text">Voting</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box tb-amount">
                            <div className="item-select-box">
                                <div className="vote-with-icon-box">
                                    <button className="vote-with-icon">
                                        <div className="vwi-small-box">
                                            <span className="vwi-icon"><NavVote /></span>
                                            <span className="vwi-text">Voting</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <div className="item-select-box">
                                <button className="tb-item-btn-box" onClick={(e: any) => vBtnClick(e)}>
                                    <div className="tb-item-btn-text">
                                        <DotDotDot />
                                    </div>
                                    <div className="tb-item-btn-icon"><Down /></div>
                                    <VButtonPopup />
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>

                {/* ------- */}
                <tr className="body-row">
                    <td className="tb-item">
                        <div className="tb-item-box">
                            
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            Create new votes
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <div className="vote-with-icon-box">
                                <button className="vote-with-icon">
                                    <div className="vwi-small-box">
                                        <span className="vwi-icon"><NavVote /></span>
                                        <span className="vwi-text">Voting</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <div className="vote-with-icon-box">
                                <button className="vote-with-icon">
                                    <div className="vwi-small-box">
                                        <span className="vwi-icon"><NavVote /></span>
                                        <span className="vwi-text">Voting</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box tb-amount">
                            <div className="item-select-box">
                                <div className="vote-with-icon-box">
                                    <button className="vote-with-icon">
                                        <div className="vwi-small-box">
                                            <span className="vwi-icon"><NavVote /></span>
                                            <span className="vwi-text">Voting</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <div className="item-select-box">
                                <button className="tb-item-btn-box" onClick={(e: any) => vBtnClick(e)}>
                                    <div className="tb-item-btn-text">
                                        <DotDotDot />
                                    </div>
                                    <div className="tb-item-btn-icon"><Down /></div>
                                    <VButtonPopup />
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default PTable