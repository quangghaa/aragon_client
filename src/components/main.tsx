import React from "react";
import { ImageCreate, ImageOpen } from "../utils/image";

function Main() {
    return (
        <div className="main">
            <div className="main-box">
                <div className="round-image-box">
                <ImageCreate />
                </div>
                <div className="title-box">
                <h1 className="small-title">Create an organization</h1>
                <p className="small-subtitle">Start your organization with Aragon</p>
                </div>
            </div>

            <div className="main-box">
                <div className="round-image-box">
                <ImageOpen />
                </div>
                <div className="title-box">
                <h1 className="small-title">Open an existing organization</h1>
                </div>
            </div>
        </div>
    )
}

export default Main;