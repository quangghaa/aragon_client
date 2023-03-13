import { Progress } from "antd";
import React, { useRef, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { NavVote, PermVoting } from "../utils/image";
import { Back, Clock, FTIQuestion, Pass } from "../utils/svg-icons";
import contractOwnerAddress from "../abis/contractOwner.json";
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
    const MyNumberAgree = useRef(0);
    const MyNumberDisagree = useRef(0);
    const [tempVar , setTempVar] = useState(0);
    const [VotedNum , setVotedNum] = useState(1);
    
    const [PollsLinkedWithID , setPollsLinkedWithID] = useState([] as any)
    useEffect(()=>{
        const GetList = async () =>{
            if(tempVar<VotedNum){
                    (window as any).ethereum.on('accountsChanged', function (accounts : any){
                    console.log("connected to account : ",accounts[0])
                });
                let Link = await VoteContract.getListPollWithID();
                setPollsLinkedWithID(Link);
                setTempVar(tempVar+1);
            }
        }
        setInterval(GetList,3000);
    })
    function backClick(e: any) {
        e.preventDefault();
        navigate("/voting")
    }
    const agreeVoter= async ()=>{
        if(CheckAccountVoted){
            alert("you already voted")
        }else{
            // setMyNumberAgree(MyNumberAgree+1);
            MyNumberAgree.current=MyNumberAgree.current+1;
            await VoteContract.doVote(true,MyPollID);
            setAgree(MyNumberAgree);
            if(PollsLinkedWithID.length>0){
                console.log('Agree Voter', MyNumberAgree , 'Number of voters' , PollsLinkedWithID[MyPollID-1].countResult.toNumber());
            }
            setVotedNum(VotedNum+1);
            setCheckAccountVoted(true);
        }
    }
    const diagreeVoter = async () =>{
        if(CheckAccountVoted){
            alert("you already voted")
        }else{
            // setMyNumberDisagree(MyNumberDisagree+1);
            MyNumberDisagree.current=MyNumberDisagree.current+1;
            await VoteContract.doVote(false,MyPollID);
            setDisagree(MyNumberDisagree);
            setCheckAccountVoted(true);
            setVotedNum(VotedNum+1);
        }
    }
    const NumberAgreeFromContract = async () =>{
        let MyListOfPolls = await VoteContract.getListPollWithID();
        console.log(typeof(MyPollID));
        console.log(MyListOfPolls[MyPollID-1].countResult.toString());
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
                                        <span className="dc-id-text">Vote #{MyPollID}</span>
                                    </h1>
                                </div>
                                {checkOwner ? null : <div>
                                <button className="v-new-vote-btn" style={{marginRight: '30px'} } onClick={agreeVoter}>Yes</button>
                                <button className="v-new-vote-btn" onClick={diagreeVoter}>No</button>
                                </div>}
                                <button className="v-new-vote-btn" onClick={NumberAgreeFromContract}>Get agree</button>
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
                                    <span className="dex-sec-hash">{contractOwnerAddress.ownerAddress}</span>
                                </div>
                            </div>
                        </section>

                        <div className="progress-vote-section">
                            <h1 className="des-sec-title">votes</h1>
                            <div className="mb">
                                {PollsLinkedWithID.length>0 ? <Progress percent={(PollsLinkedWithID[MyPollID-1].countResult.toNumber()/PollsLinkedWithID[MyPollID-1].totalVoter.toNumber())*100} /> : null}
                            </div>

                            <div className="yesno-box">
                                <div className="yn-row">
                                    <div className="yn-col-a">
                                        <div className="draw-dash"></div>
                                        <div className="yn-col-text">Yes</div>
                                        {PollsLinkedWithID.length>0 ? <div className="yn-col-value">{(PollsLinkedWithID[MyPollID-1].countResult.toNumber()/PollsLinkedWithID[MyPollID-1].totalVoter.toNumber())*100}%</div> : null}
                                    </div>

                                    <div className="yn-col-b">
                                        910656.5899 ANT
                                    </div>
                                </div>

                                <div className="yn-row">
                                    <div className="yn-col-a">
                                        <div className="draw-dash red-dash"></div>
                                        <div className="yn-col-text">No</div>
                                        {PollsLinkedWithID.length>0 ? <div className="yn-col-value">{((PollsLinkedWithID[MyPollID-1].totalVote.toNumber()-PollsLinkedWithID[MyPollID-1].countResult.toNumber())/PollsLinkedWithID[MyPollID-1].totalVoter.toNumber())*100}%</div>:null}
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
                                <p>passed</p>
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
                                {PollsLinkedWithID.length>0 ? <p>{(PollsLinkedWithID[MyPollID-1].countResult.toNumber()/PollsLinkedWithID[MyPollID-1].totalVoter.toNumber())*100}%</p> : <p>0%</p>}
                                <span className="per-light-text">(&gt;50% needed)</span>
                            </div>
                            <div className="pro-box">
                                {PollsLinkedWithID.length>0? <Progress percent={(PollsLinkedWithID[MyPollID-1].countResult.toNumber()/PollsLinkedWithID[MyPollID-1].totalVoter.toNumber())*100} /> : null}   
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
                                {PollsLinkedWithID.length>0 ? <p>{((PollsLinkedWithID[MyPollID-1].totalVote.toNumber()-PollsLinkedWithID[MyPollID-1].countResult.toNumber())/PollsLinkedWithID[MyPollID-1].totalVoter.toNumber())*100}</p> : <p>0%</p>}
                                <span className="per-light-text">(&gt;0% needed)</span>
                            </div>
                            <div className="pro-box">
                                {PollsLinkedWithID.length>0? <Progress percent={((PollsLinkedWithID[MyPollID-1].totalVote.toNumber()-PollsLinkedWithID[MyPollID-1].countResult.toNumber())/PollsLinkedWithID[MyPollID-1].totalVoter.toNumber())*100} />   : null} 
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default VDetailContent;