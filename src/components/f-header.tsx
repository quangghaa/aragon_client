import React from "react";

import NewvoteModal from "./newvote-modal";

function FHeader() {
    window.onclick = function (event: any) {
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
        if (!event.target.matches('.v-new-vote-btn')) {
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

    function openTransferModal(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("vote-modal")) as HTMLSelectElement;
        id.classList.toggle("vm-show");
    }

    return (
        <>
        <div className="v-header-wrapper">
            <div className="v-header">
                <div className="v-title-box">
                    <h1 className="v-title">Finance</h1>
                </div>
                <div className="v-new-vote">
                    <button className="v-new-vote-btn" onClick={(e:any) => openTransferModal(e)}>New transfer</button>
                </div>
            </div>
        </div>
        <NewvoteModal />
        </>
    )
}

export default FHeader;