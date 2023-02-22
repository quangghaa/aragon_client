import React, { useState } from "react";
import Navigation from "../components/navigation";
import VContent from "../components/v-content";
import VHeader from "../components/v-header";

function Voting(props : any) {
    let IsOwnerAddress = props.isOwnerAddress
    console.log(IsOwnerAddress);
    const [question , setQuestion] = useState("");
    let VoteFactoryContract = props.voteFactory;
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

    return (
        <>
            <div className='ex-body'>
                <div className='ex-nav-wrapper'>
                    <Navigation />
                </div>
                <div className="voting-bg">
                    <div className="voting">
                        <VHeader CheckOwner={IsOwnerAddress} Question={question} SetQuestion={setQuestion} CreatePool={VoteFactoryContract}/>
                        <VContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voting;