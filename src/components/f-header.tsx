import { formatTimeStr } from "antd/es/statistic/utils";
import React from "react";
import NewTransModal from "./newtrans-modal";

import NewvoteModal from "./newvote-modal";

function FHeader() {
    // window.onclick = function (event: any) {
    //     console.log("FHeader click")
    //     if (!event.target.matches('.v-nav-btn')) {
    //         var dropdowns = document.getElementsByClassName("v-btn-popup");
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show-v-popup')) {
    //                 openDropdown.classList.remove('show-v-popup');
    //             }
    //         }
    //     }
    //     // close modal
    //     if (event.target.matches('.vm-bg')) {
    //         console.log("close finance modal")
    //         var dropdowns = document.getElementsByClassName("vm-bg");
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //           var openDropdown = dropdowns[i];
    //           if (openDropdown.classList.contains('vm-show')) {
    //             openDropdown.classList.remove('vm-show');
    //           }
    //         }

    //         // remove highlight
    //         var id = (document.getElementById("tm-nav-withdrawal")) as HTMLSelectElement;
    //         id.classList.remove("show-highlight");

    //         var id = (document.getElementById("tm-nav-deposit")) as HTMLSelectElement;
    //         id.classList.remove("show-highlight");

    //         // remove modal form
    //         var id = (document.getElementById("withdrawal-form")) as HTMLSelectElement;
    //         id.classList.remove("form-show");

    //         var id = (document.getElementById("deposit-form")) as HTMLSelectElement;
    //         id.classList.remove("form-show");
    //     }

    // }

    function openTransferModal(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("trans-modal")) as HTMLSelectElement;
        id.classList.toggle("vm-show");

        // default highlight in deposit modal
        var id = (document.getElementById("tm-nav-deposit")) as HTMLSelectElement;
        id.classList.add("show-highlight");

        // default show deposit modal
        var id = (document.getElementById("deposit-form")) as HTMLSelectElement;
        id.classList.add("form-show");
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
        <NewTransModal />
        </>
    )
}

export default FHeader;