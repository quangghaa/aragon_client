import { Progress } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Voting from "../pages/voting";
import { NavVote } from "../utils/image";
import { Pass } from "../utils/svg-icons";

function VContent(props : any) {
    const navigate = useNavigate();
    const PollQuestion = props.Question;
    const IsNewPoll =props.isNewPoll;
    const PollID=props.MyPollID;
    const list = props.MyList;
    const setList = props.SetMyList;
    let CheckOwner = props.checkOwner;
    let items = [] as any;
    const VoteContract = props.VoteFactory;
    // let polls : any = [];
    // const [polls , setPolls] = useState([] as any);
    let polls = props.MyPoll;
    let setPolls = props.SetMyPoll;
    let i = props.MyI;
    let m = props.MyM;
    let counting = 0;
    let count = props.myCount;
    let setCount = props.SetMyCount;
    // const [MyList , setMyList] = useState([] as number[]);
    function toDetail() {
        navigate("/vote-detail")
    }
    const [testList , setTestList] = useState([1]);
    const update = async () => {
        let myPolls : any = await VoteContract.getListPoll()
        setCount( myPolls.length);
        myPolls.forEach(()=>{
            if(count>m.current){
                polls.push(myPolls[m.current]);
                
                m.current++;
            }
            
            
        })
        setPolls(Object.assign([],polls));
        console.log('already added',polls);
        // console.log(Object.keys(polls[0]));
        while(i.current<count){
                    
                    list.push(i.current);
                    setList(Object.assign([],list))
                    i.current++;
        }
        console.log(typeof(polls[0]))
        await VoteContract.startVote(PollID);
        console.log('started poll id :' , PollID);
        // console.log(polls[0].proposal);
    }
    const stopVote = async () =>{
        await VoteContract.endVote(PollID)
        console.log('Ended pollID :' , PollID);
    }
    return (
        <section className="vote-section">
            <h2 className="vs-title">
                <div className="vs-title-text">Closed votes</div>
                <span className="vs-title-count-box">
                    <span className="vs-title-count">40</span>
                </span>
                <div>
                {CheckOwner ?<button onClick={update} className="v-new-vote-btn">Start Vote</button> : null}
                {CheckOwner ?<button onClick={stopVote} className="v-new-vote-btn">End Vote</button> : null}
            </div>
            </h2>
            
            <div className="vote-list">
                {
                    list.map((v : any, i : any) => {
                        return (
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
                                    <span className="vi-id">#{i+1}</span>
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

export default VContent;