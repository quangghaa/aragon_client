import React from "react";
import { Down } from "../utils/svg-icons";

import { DatePicker, Space } from 'antd';
import VButtonPopup from "./v-btn-popup";
import NewvoteModal from "./newvote-modal";


function VHeader() {
    const { RangePicker } = DatePicker;

    function vBtnClick(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("status-popup-id")) as HTMLSelectElement;
        id.classList.toggle("show-v-popup");
    }

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

    function openVoteModal(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("vote-modal")) as HTMLSelectElement;
        id.classList.toggle("vm-show");
    }

    return (
        <>
        <div className="v-header-wrapper">
            <div className="v-header">
                <div className="v-title-box">
                    <h1 className="v-title">Voting</h1>
                </div>
                <div className="v-new-vote">
                    <button className="v-new-vote-btn" onClick={(e:any) => openVoteModal(e)}>New vote</button>
                </div>
            </div>

            <div className="v-nav">
                <div className="v-nav-box">
                    <button className="v-nav-btn" onClick={(e: any) => vBtnClick(e)}>
                        <div className="v-btn-name">Status</div>
                        <div className="v-btn-icon"><Down /></div>
                        <VButtonPopup />
                    </button>

                    <button className="v-nav-btn">
                        <div className="v-btn-name">Outcome</div>
                        <div className="v-btn-icon"><Down /></div>
                    </button>

                    <button className="v-nav-btn">
                        <div className="v-btn-name">App</div>
                        <div className="v-btn-icon"><Down /></div>
                    </button>

                    <div className="calendar-box">
                        <RangePicker className="x" />
                    </div>
                </div>
            </div>
        </div>
        <NewvoteModal />
        </>
    )
}

export default VHeader;