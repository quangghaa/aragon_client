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

function FButtonTypePopup() {
    return (
        <div id="f-type-popup-id" className="v-btn-popup">
            <div className="v-btn-head">Type</div>
            <ul className="v-btn-list">
                <li className="v-btn-item">All</li>
                <li className="v-btn-item">Incomming</li>
                <li className="v-btn-item">Outcomming</li>
            </ul>
        </div>
    )
}

function FButtonTokenPopup() {
    return (
        <div id="f-token-popup-id" className="v-btn-popup">
            <div className="v-btn-head">Token</div>
            <ul className="v-btn-list">
                <li className="v-btn-item">All</li>
                <li className="v-btn-item">Eth</li>
                <li className="v-btn-item">Usdt</li>
            </ul>
        </div>
    )
}

export {VButtonPopup, FButtonTypePopup, FButtonTokenPopup};