import React from "react";
import { useNavigate } from "react-router-dom";
import OpenExistingOrg from "../pages_deprecated/open-existing-org";
import { ImageCreate, ImageOpen } from "../utils/image";
import ConnectModal from "./connect-modal";

function Main(props: any) {
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