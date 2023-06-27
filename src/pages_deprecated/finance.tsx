import { PropertySafetyFilled } from "@ant-design/icons";
import React, { useEffect } from "react";
import FContent from "../components_deprecated/f-content";
import FHeader from "../components_deprecated/f-header";
import Navigation from "../components_deprecated/navigation";
function Finance(props: any) {
    window.onclick = function (event: any) {
        console.log("Finance page clicked: ", event.target.className)
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
            console.log("close finance modal")
            var dropdowns = document.getElementsByClassName("vm-bg");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('vm-show')) {
                    openDropdown.classList.remove('vm-show');
                }
            }

            // remove highlight
            var id = (document.getElementById("tm-nav-withdrawal")) as HTMLSelectElement;
            id.classList.remove("show-highlight");

            var id = (document.getElementById("tm-nav-deposit")) as HTMLSelectElement;
            id.classList.remove("show-highlight");

            // remove modal form
            var id = (document.getElementById("withdrawal-form")) as HTMLSelectElement;
            id.classList.remove("form-show");

            var id = (document.getElementById("deposit-form")) as HTMLSelectElement;
            id.classList.remove("form-show");
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

    useEffect(() => {
        props.setPage("finance")
    }, [])

    return (
        <>
            <div className='ex-body'>
                <div className='ex-nav-wrapper'>
                    <Navigation />
                </div>
                <div className="voting-bg">
                    <div className="voting">
                        <FHeader />
                        <FContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finance;