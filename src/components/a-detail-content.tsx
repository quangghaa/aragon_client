import React from "react";
import { useNavigate } from "react-router-dom";
import { PermVoting } from "../utils/image";
import { Back } from "../utils/svg-icons";

function ADetailContent() {
    const navigate = useNavigate()

    function backClick(e: any) {
        navigate("/app-center")
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

            <div className="ad-content">
                <div className="detail-section">
                    <div className="detail-section-box">
                        <div className="ds-head">
                            <div className="ds-head-grid">
                                <div className="ds-head-icon"><PermVoting /></div>
                                <div className="ds-head-info">
                                    <div className="ds-info-name">Voting</div>
                                    <div className="ds-info-by">
                                        <span>By</span>
                                        <button className="ds-info-by-btn">
                                            <div className="dibb-box">
                                                <span className="dibb-text">Aragon Association</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="version-section">
                    <section className="vs-box">
                        <h1 className="vs-box-head">
                            <div className="vs-box-head-box">
                                <span className="vbhb-text">app version</span>
                                <span className="vbhb-text">release date</span>
                            </div>
                        </h1>
                        <div className="vs-table-box">
                            <table className="vs-table">
                                <tbody>
                                    <tr className="vst-row">
                                        <td className="vst-left-col">1.0.0</td>
                                        <td className="vst-right-col">
                                            <time>2018-10-27</time>
                                        </td>
                                    </tr>
                                    <tr className="vst-row">
                                        <td className="vst-left-col">1.0.1</td>
                                        <td className="vst-right-col">
                                            <time>2018-10-27</time>
                                        </td>
                                    </tr>
                                    <tr className="vst-row">
                                        <td className="vst-left-col">1.0.2</td>
                                        <td className="vst-right-col">
                                            <time>2018-10-27</time>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ADetailContent;