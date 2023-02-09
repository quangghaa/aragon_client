import React from "react";

function VButtonPopup() {
    return (
        <div id="status-popup-id" className="v-btn-popup">
            <div className="v-btn-head">Status</div>
            <ul className="v-btn-list">
                <li className="v-btn-item">All</li>
                <li className="v-btn-item">Open</li>
                <li className="v-btn-item">Closed</li>
            </ul>
        </div>
    )
}

export default VButtonPopup;