import { Progress } from "antd"
import { ethers } from "ethers"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Voting from "../pages_deprecated/voting"
import { NavVoteIcon } from "../utils/image"
import { Pass } from "../utils/svg-icons"

function VContent(props: any) {
    const navigate = useNavigate()
    const PollQuestion = props.Question
    const IsNewPoll = props.isNewPoll
    const PollID = props.MyPollID
    const list = props.MyList
    const setList = props.SetMyList
    const CheckOwner = props.checkOwner
    const items = [] as any
    const VoteContract = props.VoteFactory
    const polls = props.MyPoll
    const setPolls = props.SetMyPoll
    const i = props.MyI
    const m = props.MyM
    const counting = 0
    const count = props.myCount
    const setCount = props.SetMyCount
    function toDetail() {
        navigate("/vote-detail")
    }
    const update = async () => {
        const myPolls: any = await VoteContract.getListPoll()
        setCount(myPolls.length)
        console.log("This is count and mypolls.length", count, myPolls.length)
        for (let k = 0; k < myPolls.length; k++) {
            if (myPolls.length > m.current) {
                polls.push(myPolls[m.current])

                m.current++
            }
        }
        setPolls(Object.assign([], polls))
        console.log("already added", polls)
        while (i.current < myPolls.length) {

            list.push(i.current)
            setList(Object.assign([], list))
            i.current++
        }
        console.log(typeof (polls[0]))
        await VoteContract.startVote(PollID)
        console.log("started poll id :", PollID)
    }
    const stopVote = async () => {
        await VoteContract.endVote(PollID)
        console.log("Ended pollID :", PollID)
    }
    const Count = async () => {
        const NumberOfAgreeVoter = await VoteContract.getListPoll()
        console.log("This is number of agree voter", ethers.BigNumber.from(NumberOfAgreeVoter[0].countResult))
    }
    return (
        <section className="vote-section">
            <h2 className="vs-title">
                <div>
                    {CheckOwner ? <button onClick={update} className="v-new-vote-btn">Start Vote</button> : null}

                    {CheckOwner ? <button onClick={stopVote} className="v-new-vote-btn end-vote-btn">End Vote</button> : null}
                </div>
            </h2>

            <div className="vote-list">
                {
                    list.map((v: any, i: any) => {
                        return (
                            <div className="vote-item" onClick={toDetail}>
                                <div className="vi-logo">
                                    <a href="#" className="vi-logo-wrapper">
                                        <div className="vi-logo-box">
                                            <span className="vi-like-icon-box"><NavVoteIcon /></span>
                                            <span className="vi-voting-text">Voting</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="vi-content">
                                    <span className="vi-id">#{i + 1}</span>
                                    <span className="vi-content-text">
                                        {polls.length > 0 ? <p>{polls[i].proposal}</p> : <p>sai</p>}
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
                    })
                }

            </div>


        </section>
    )
}

export default VContent