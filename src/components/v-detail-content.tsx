import { Progress } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { NavVote, PermVoting } from "../utils/image";
import { Back, Clock, FTIQuestion, Pass } from "../utils/svg-icons";

function VDetailContent() {
    const navigate = useNavigate()

    function backClick(e: any) {
        navigate("/voting")
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

            <div className="ad-content mt">
                <div className="detail-section">
                    <div className="ds-box">
                        <div className="vote-with-icon-box flex">
                            <button className="vote-with-icon">
                                <div className="vwi-small-box">
                                    <span className="vwi-icon"><NavVote /></span>
                                    <span className="vwi-text">Voting</span>
                                </div>
                            </button>
                        </div>

                        <section className="ds-content">
                            <h1 className="dc-id">
                                <span className="dc-id-text">Vote #39</span>
                            </h1>

                            <div className="des-cre-section">
                                <div className="des-section">
                                    <h1 className="des-sec-title">description</h1>
                                    <span className="des-sec-text">
                                        Do you approve AGP-143: Fundraising Maintenance? (Link:
                                        <a href="#">https://raw.githubusercontent.com/aragon/AGPs/bf5a8eb0a3436072bcb5b2fa818c94cd507e2121/AGPs/AGP-143.md</a>
                                        ) (SHA256: 69d7e593d6324358b40e2aa61dfef636f4c04a11d8afaae012e79a1ae4161e0f)
                                    </span>
                                </div>

                                <div className="cre-section">
                                    <h1 className="des-sec-title">create by</h1>
                                    <span className="dex-sec-hash">0xE53c…380e</span>
                                </div>
                            </div>
                        </section>

                        <div className="progress-vote-section">
                            <h1 className="des-sec-title">votes</h1>
                            <div className="mb">
                                <Progress percent={100} />
                            </div>

                            <div className="yesno-box">
                                <div className="yn-row">
                                    <div className="yn-col-a">
                                        <div className="draw-dash"></div>
                                        <div className="yn-col-text">Yes</div>
                                        <div className="yn-col-value">100%</div>
                                    </div>

                                    <div className="yn-col-b">
                                        910656.5899 ANT
                                    </div>
                                </div>

                                <div className="yn-row">
                                    <div className="yn-col-a">
                                        <div className="draw-dash red-dash"></div>
                                        <div className="yn-col-text">No</div>
                                        <div className="yn-col-value">0%</div>
                                    </div>

                                    <div className="yn-col-b">
                                        2900 ANT
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="version-section">
                    <section className="vs-box">
                        <h1 className="vd-box-head">status
                        </h1>
                        <div className="vd-pd-box-content">
                            <span className="vd-status">
                                <Pass />
                                Passed
                            </span>
                            <div className="vd-time">
                                <Clock />
                                <span>2019-12-13, 23:00</span>
                            </div>
                        </div>
                    </section>

                    <section className="vs-box mt">
                        <h1 className="vd-box-head">
                            support %
                            <button className="fti-question ml">
                                <FTIQuestion />
                            </button>
                        </h1>

                        <div className="vd-pd-box-content">
                            <div className="per-box">
                                99.68%
                                <span className="per-light-text">(&gt;50% needed)</span>
                            </div>
                            <div className="pro-box">
                                <Progress percent={100} />    
                            </div>
                        </div>
                    </section>

                    <section className="vs-box mt">
                        <h1 className="vd-box-head">
                            minimum approval %
                            <button className="fti-question ml">
                                <FTIQuestion />
                            </button>
                        </h1>

                        <div className="vd-pd-box-content">
                            <div className="per-box">
                                2.3%
                                <span className="per-light-text">(&gt;0% needed)</span>
                            </div>
                            <div className="pro-box">
                                <Progress percent={2} />    
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default VDetailContent;