import React from "react"
import { NavVoteIcon } from "../utils/image"
import { Progress } from "antd"
import { Pass } from "../utils/svg-icons"

interface VoteItemProps {
    item: any
}
const VoteItem = ({ item }: VoteItemProps) => {
    return (
        <div className="vote-item">
            <div className="vi-logo">
                <a href="#" className="vi-logo-wrapper">
                    <div className="vi-logo-box">
                        <span className="vi-like-icon-box"><NavVoteIcon /></span>
                        <span className="vi-voting-text">Voting</span>
                    </div>
                </a>
            </div>

            <div className="vi-content">
                <span className="vi-id">#{item.index}</span>
                <span className="vi-content-text">
                    {item.label}
                </span>
            </div>

            <div className="">
                <div className="pro-row">
                    <span className="pr-name">yes</span>
                    <span className="pr-percent">%</span>
                </div>
                <Progress percent={100} size="small" />

                <div className="pro-row">
                    <span className="pr-name">no</span>
                    <span className="pr-percent">%</span>
                </div>
                <Progress percent={2} size="small" status="exception" />
            </div>

            <div className="vi-state">
                <span className="vs"><Pass /></span>
                <span className="vs-text">Passed</span>
            </div>
        </div>
    )
}

export default VoteItem