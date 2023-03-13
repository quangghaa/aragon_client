import React, { useState } from "react";
import ADetailContent from "../components/a-detail-content";
import ADetailHeader from "../components/a-detail-header";
import FContent from "../components/f-content";
import FHeader from "../components/f-header";
import Navigation from "../components/navigation";
import PContent from "../components/p-content";
import PDetailContent from "../components/p-detail-content";
import PDetailHeader from "../components/p-detail-header";
import PHeader from "../components/p-header";
import VDetailContent from "../components/v-detail-content";
import VDetailHeader from "../components/v-detail-header";
import {useEffect}  from "react";
function VotingDetail(props : any) {
    let VoteContract = props.voteFactory;
    let checkOwner = props.isOwnerAddress;
    let polls = props.MyPolls;
    let NumberOfVoter = props.MyNumberOfVoter;
    let agree = props.Agree;
    let setAgree = props.SetAgreeVoter;
    let disagree = props.DisagreeVoter;
    let setDisagree = props.SetDisagreeVoter;
    let myPollID = props.PollID;
    let CheckVoted = props.IsAccountVoted;
    let setCheckVoted = props.SetIsAccountVoted;
    let CheckLogIn = props.IsLogedIn;
    window.onclick = function (event: any) {
        console.log("Permission page clicked")
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
            console.log("close permission modal")
            var dropdowns = document.getElementsByClassName("vm-bg");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('vm-show')) {
                openDropdown.classList.remove('vm-show');
              }
            }

        }

        // -------------
        console.log("Close question popup")
        var dropdowns = document.getElementsByClassName("question-popup");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('qp-show')) {
              openDropdown.classList.remove('qp-show');
            }
          }
        
        // close type button popup
        
    }

    return (
        <>
            <div className='ex-body'>
                <div className='ex-nav-wrapper'>
                    <Navigation />
                </div>
                <div className="voting-bg">
                    <div className="voting">
                        <VDetailHeader />
                        <VDetailContent AgreeVoter={agree} setAgreeVoter={setAgree} MyPolls={polls} 
                        DisagreeVoter={disagree} setDisagreeVoter={setDisagree} PollID={myPollID}
                        MyNumberOfVoter={NumberOfVoter} check={checkOwner} voteContract={VoteContract} setIsAccountVoted={setCheckVoted} IsAccountVoted={CheckVoted}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VotingDetail;