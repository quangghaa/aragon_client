import React from "react";
import { DotDotDot, Down } from "../utils/svg-icons";
import {VButtonPopup} from "./v-btn-popup";

function FTable() {
    function vBtnClick(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("status-popup-id")) as HTMLSelectElement;
        id.classList.toggle("show-v-popup");
    }

    return (
        <table className="f-table">
            <thead className="ftb-head">
                <tr>
                    <th className="th-item">
                        date
                    </th>
                    <th className="th-item">
                        source/recipient
                    </th>
                    <th className="th-item">
                        reference
                    </th>
                    <th className="th-item th-amount">
                        amount
                    </th>
                    <th className="th-item">
                        
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr className="body-row">
                    <td className="tb-item">
                        <div className="tb-item-box">
                            <time className="time-box">2022-12-26</time>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <button className="sr-btn">
                                <div className="srb-btn-box">
                                    <div className="srb-icon-box">
                                        <canvas className="identicon" width="24" height="24" style={{width: "24px", height: "24px"}}></canvas>
                                    </div>
                                    <span className="srb-btn-text">0x8EdA…e290</span>
                                </div>
                            </button>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <div className="reference">
                                membership
                            </div>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box tb-amount">
                            <span className="item-amount">+0.0001&nbsp;eth</span>
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
                            <time className="time-box">2022-12-26</time>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <button className="sr-btn">
                                <div className="srb-btn-box">
                                    <div className="srb-icon-box">
                                        <canvas className="identicon" width="24" height="24" style={{width: "24px", height: "24px"}}></canvas>
                                    </div>
                                    <span className="srb-btn-text">0x8EdA…e290</span>
                                </div>
                            </button>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box">
                            <div className="reference">
                                membership
                            </div>
                        </div>
                    </td>

                    <td className="tb-item">
                        <div className="tb-item-box tb-amount">
                            <span className="item-amount">+0.0001&nbsp;eth</span>
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

export default FTable;