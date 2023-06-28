import React, { useState } from "react"
import ADetailContent from "../components_deprecated/a-detail-content"
import ADetailHeader from "../components_deprecated/a-detail-header"
import FContent from "../components_deprecated/f-content"
import FHeader from "../components_deprecated/f-header"
import Navigation from "../components_deprecated/navigation"
import PContent from "../components_deprecated/p-content"
import PDetailContent from "../components_deprecated/p-detail-content"
import PDetailHeader from "../components_deprecated/p-detail-header"
import PHeader from "../components_deprecated/p-header"
import VDetailContent from "../components_deprecated/v-detail-content"
import VDetailHeader from "../components_deprecated/v-detail-header"
import { useEffect } from "react"
function VotingDetail(props: any) {
    const VoteContract = props.voteFactory
    const checkOwner = props.isOwnerAddress
    const polls = props.MyPolls
    const NumberOfVoter = props.MyNumberOfVoter
    const agree = props.Agree
    const setAgree = props.SetAgreeVoter
    const disagree = props.DisagreeVoter
    const setDisagree = props.SetDisagreeVoter
    const myPollID = props.PollID
    const CheckVoted = props.IsAccountVoted
    const setCheckVoted = props.SetIsAccountVoted
    const CheckLogIn = props.IsLogedIn
    window.onclick = function (event: any) {
        console.log("Permission page clicked")
        if (!event.target.matches(".v-nav-btn")) {
            var dropdowns = document.getElementsByClassName("v-btn-popup")
            var i
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i]
                if (openDropdown.classList.contains("show-v-popup")) {
                    openDropdown.classList.remove("show-v-popup")
                }
            }
        }
        // close modal
        if (event.target.matches(".vm-bg")) {
            console.log("close permission modal")
            var dropdowns = document.getElementsByClassName("vm-bg")
            var i
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i]
                if (openDropdown.classList.contains("vm-show")) {
                    openDropdown.classList.remove("vm-show")
                }
            }

        }

        // -------------
        console.log("Close question popup")
        var dropdowns = document.getElementsByClassName("question-popup")
        var i
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains("qp-show")) {
                openDropdown.classList.remove("qp-show")
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
                            MyNumberOfVoter={NumberOfVoter} check={checkOwner} voteContract={VoteContract} setIsAccountVoted={setCheckVoted} IsAccountVoted={CheckVoted} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VotingDetail