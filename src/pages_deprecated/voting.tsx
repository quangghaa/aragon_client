import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components_deprecated/navigation";
import VContent from "../components_deprecated/v-content";
import VHeader from "../components_deprecated/v-header";

function Voting(props: any) {
    let IsOwnerAddress = props.isOwnerAddress
    const [question, setQuestion] = useState("");
    let VoteFactoryContract = props.voteFactory;
    let PollID = props.CreatePollID;
    let setPollID = props.SetCreatePollID;
    let CheckLogin = props.checkLogIn;
    let SetMyNumberOfVoter = props.SetNumberOfVoter;
    let NumberOfVoter = props.MyNumberOfVoter
    // const [myList , setMyList] = useState([0]);
    let myList = props.numberOfPoll;
    let setMyList = props.SetNumberOfPoll;
    let polls = props.myPolls;
    let setPolls = props.setMyPolls;
    let i = props.MyI;
    let m = props.MyM;
    let MyCount = props.Count;
    let setMyCount = props.SetCount;

    const CurrentPoll = useRef(0);
    const [IsNewPoll, setIsNewPoll] = useState(false);
    window.onclick = function (event: any) {
        console.log("Voting page clicked")

        if (!event.target.matches('.v-nav-btn')) {
            var dropdowns = document.getElementsByClassName("v-btn-popup");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show-v-popup')) {
                    openDropdown.classList.remove('show-v-popup');
                }
            }
        }

        // close modal
        if (event.target.matches('.vm-bg')) {
            console.log("Close voting modal")
            var dropdowns = document.getElementsByClassName("vm-bg");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('vm-show')) {
                    openDropdown.classList.remove('vm-show');
                }
            }
        }
    }

    useEffect(() => {
        props.setPage("voting")
    }, [])

    return (
        <>
            <div className='ex-body'>
                <div className='ex-nav-wrapper'>
                    <Navigation />
                </div>
                <div className="voting-bg">
                    <div className="voting">
                        <VHeader MyNumberOfVoter={NumberOfVoter} setNumberOfVoter={SetMyNumberOfVoter}
                            MyPollID={PollID} SetMyPollID={setPollID}
                            CheckOwner={IsOwnerAddress} Question={question}
                            SetQuestion={setQuestion} VoteFactory={VoteFactoryContract}
                            SetIsNewPoll={setIsNewPoll} />
                        <VContent checkOwner={IsOwnerAddress} myCount={MyCount} SetMyCount={setMyCount} MyI={i} MyM={m} MyPoll={polls} SetMyPoll={setPolls} VoteFactory={VoteFactoryContract} isNewPoll={IsNewPoll} Question={question} MyPollID={PollID} MyList={myList} SetMyList={setMyList} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voting;