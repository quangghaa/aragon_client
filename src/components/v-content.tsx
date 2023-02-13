import React from "react";
import { useNavigate } from "react-router-dom";
import Voting from "../pages/voting";
import { NavVote } from "../utils/image";
import { Pass } from "../utils/svg-icons";

function VContent() {
    const navigate = useNavigate()

    function toDetail() {
        navigate("/vote-detail")
    }

    return (
        <section className="vote-section">
            <h2 className="vs-title">
                <div className="vs-title-text">Closed votes</div>
                <span className="vs-title-count-box">
                    <span className="vs-title-count">40</span>
                </span>
            </h2>
            <div className="vote-list">
                <div className="vote-item" onClick={toDetail}>
                    <div className="vi-logo">
                        <a href="#" className="vi-logo-wrapper">
                            <div className="vi-logo-box">
                                <span className="vi-like-icon-box"><NavVote /></span>
                                <span className="vi-voting-text">Voting</span>
                            </div>
                        </a>
                    </div>

                    <div className="vi-content">
                        <span className="vi-id">#38</span>
                        <span className="vi-content-text">
                            Do you approve AGP-143: Fundraising Maintenance? (Link: https://raw.githubusercontent.com/aragon/AGPs/bf5a8eb0a3436072bcb5b2fa818c94cd507e2121/AGPs/AGP-143.md) (SHA256: 69d7e593d6324358b40e2aa61dfef636f4c04a11d8afaae012e79a1ae4161e0f)
                        </span>
                    </div>

                    <div className="">
                        PROGRESS BAR
                    </div>

                    <div className="vi-state">
                        <span className="vs"><Pass /></span>
                        <span className="vs-text">Passed</span>
                    </div>
                </div>

                {/* ----------- */}
                <div className="vote-item">
                    <div className="vi-logo">
                        <a href="#" className="vi-logo-wrapper">
                            <div className="vi-logo-box">
                                <span className="vi-like-icon-box"><NavVote /></span>
                                <span className="vi-voting-text">Voting</span>
                            </div>
                        </a>
                    </div>

                    <div className="vi-content">
                        <span className="vi-id">#38</span>
                        <span className="vi-content-text">
                            Do you approve AGP-143: Fundraising Maintenance? (Link: https://raw.githubusercontent.com/aragon/AGPs/bf5a8eb0a3436072bcb5b2fa818c94cd507e2121/AGPs/AGP-143.md) (SHA256: 69d7e593d6324358b40e2aa61dfef636f4c04a11d8afaae012e79a1ae4161e0f)
                        </span>
                    </div>

                    <div className="">
                        PROGRESS BAR
                    </div>

                    <div className="vi-state">
                        <span className="vs"><Pass /></span>
                        <span className="vs-text">Passed</span>
                    </div>
                </div>

                <div className="vote-item">
                    <div className="vi-logo">
                        <a href="#" className="vi-logo-wrapper">
                            <div className="vi-logo-box">
                                <span className="vi-like-icon-box"><NavVote /></span>
                                <span className="vi-voting-text">Voting</span>
                            </div>
                        </a>
                    </div>

                    <div className="vi-content">
                        <span className="vi-id">#38</span>
                        <span className="vi-content-text">
                            Do you approve AGP-143: Fundraising Maintenance? (Link: https://raw.githubusercontent.com/aragon/AGPs/bf5a8eb0a3436072bcb5b2fa818c94cd507e2121/AGPs/AGP-143.md) (SHA256: 69d7e593d6324358b40e2aa61dfef636f4c04a11d8afaae012e79a1ae4161e0f)
                        </span>
                    </div>

                    <div className="">
                        PROGRESS BAR
                    </div>

                    <div className="vi-state">
                        <span className="vs"><Pass /></span>
                        <span className="vs-text">Passed</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VContent;