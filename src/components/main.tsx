import React from "react";
import { useNavigate } from "react-router-dom";
import OpenExistingOrg from "../pages/open-existing-org";
import { ImageCreate, ImageOpen } from "../utils/image";
import ConnectModal from "./connect-modal";

function Main() {
    const navigate = useNavigate()

    function openConnectModal(e: any) {
        e.stopPropagation();
        console.log("modal click")
        var id = (document.getElementById("connect-modal-id")) as HTMLSelectElement;
        id.classList.toggle("show-modal");
    }

    function openOrg(e: any) {
        navigate("/open")
    }

    window.onclick = function(event: any) {
        console.log("modal outer click")
        if (!event.target.matches('.close-item')) {
          var dropdowns = document.getElementsByClassName("connect-modal");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-modal')) {
              openDropdown.classList.remove('show-modal');
            }
          }
        }
    }

    return (
        <>
        <div className="main">
            <div className="main-box" onClick={(e: any) => openConnectModal(e)}>
                <div className="round-image-box">
                <ImageCreate />
                </div>
                <div className="title-box">
                <h1 className="small-title">Create an organization</h1>
                <p className="small-subtitle">Start your organization with Aragon</p>
                </div>
            </div>

            <div className="main-box" onClick={(e: any) => openOrg(e)}>
                <div className="round-image-box"> 
                <ImageOpen />
                </div>
                <div className="title-box">
                <h1 className="small-title">Open an existing organization</h1>
                </div>
            </div>
        </div>

        <ConnectModal />
        </>
    )
}

export default Main;