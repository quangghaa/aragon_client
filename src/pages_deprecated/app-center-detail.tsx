import React from "react";
import ADetailContent from "../components_deprecated/a-detail-content";
import ADetailHeader from "../components_deprecated/a-detail-header";
import FContent from "../components_deprecated/f-content";
import FHeader from "../components_deprecated/f-header";
import Navigation from "../components_deprecated/navigation";
import PContent from "../components_deprecated/p-content";
import PDetailContent from "../components_deprecated/p-detail-content";
import PDetailHeader from "../components_deprecated/p-detail-header";
import PHeader from "../components_deprecated/p-header";
function AppCenterDetail() {
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
                        <ADetailHeader />
                        <ADetailContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppCenterDetail;