import { Progress } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavVote, PermVoting } from "../utils/image";
import { Back, Clock, FTIQuestion, Pass } from "../utils/svg-icons";

function VDetailContent(props : any) {
    const navigate = useNavigate()
    let checkOwner = props.check;
    let VoteContract=props.voteContract;
    let polls = props.MyPolls;
    let NumberOfVoter = props.MyNumberOfVoter;
    let Agree = props.AgreeVoter;
    let setAgree = props.setAgreeVoter;
    let Disagree = props.DisagreeVoter;
    let setDisagree = props.setDisagreeVoter;
    let MyPollID = props.PollID;
    let CheckAccountVoted = props.IsAccountVoted;
    let setCheckAccountVoted = props.setIsAccountVoted;
    const [MyNumberAgree , setMyNumberAgree] = useState(0);
    const [MyNumberDisagree, setMyNumberDisagree] = useState(0);
    // console.log('Number of voters',NumberOfVoter);
//     const  GetListPolls = () =>{
//         // console.log(typeof(NumberOfVoter));
//         setMyNumberAgree(MyNumberAgree+1);
//         console.log(MyNumberAgree)
//    }
    function backClick(e: any) {
        e.preventDefault();
        navigate("/voting")
    }
    const agreeVoter= async ()=>{
        if(CheckAccountVoted){
            alert("you already voted")
        }else{
            setMyNumberAgree(MyNumberAgree+1);
            await VoteContract.doVote(true,MyPollID);
            setAgree(MyNumberAgree);
            console.log('Agree Voter', MyNumberAgree , 'Number of voters' , NumberOfVoter);
            setCheckAccountVoted(true)
        }
    }
    const diagreeVoter = async () =>{
        if(CheckAccountVoted){
            alert("you already voted")
        }else{
            setMyNumberDisagree(MyNumberDisagree+1);
            await VoteContract.doVote(false,MyPollID);
            setDisagree(MyNumberDisagree);
            setCheckAccountVoted(true)
        }
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
                            <div className="Vote-option-container">
                                <div>
                                    <h1 className="dc-id">
                                        <span className="dc-id-text">Vote #39</span>
                                    </h1>
                                </div>
                                {checkOwner ? null : <div>
                                <button className="v-new-vote-btn" style={{marginRight: '30px'} } onClick={agreeVoter}>Yes</button>
                                <button className="v-new-vote-btn" onClick={diagreeVoter}>No</button>
                                </div>}
                                {/* <button className="v-new-vote-btn" onClick={GetListPolls}>Get list polls</button> */}
                            </div>
                            <div className="des-cre-section">
                                <div className="des-section">
                                    <h1 className="des-sec-title">description</h1>
                                    <span className="des-sec-text">
                                        {/* {polls.length > 0 ? <p>{polls[i].proposal}</p> : <p>sai</p>} */}
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
                                <Progress percent={(MyNumberAgree/NumberOfVoter)*100} />
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
                                {(MyNumberAgree/NumberOfVoter)*100}
                                <span className="per-light-text">(&gt;50% needed)</span>
                            </div>
                            <div className="pro-box">
                                <Progress percent={(MyNumberAgree/NumberOfVoter)*100} />    
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
                                {(MyNumberDisagree/NumberOfVoter)*100}
                                <span className="per-light-text">(&gt;0% needed)</span>
                            </div>
                            <div className="pro-box">
                                <Progress percent={(MyNumberDisagree/NumberOfVoter)*100} />    
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default VDetailContent;