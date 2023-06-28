import React from "react"
import { WalletProvider } from "../utils/image"
import { Close } from "../utils/svg-icons"

function ConnectModal() {
    return (
        <div id="connect-modal-id" className="connect-modal">
            <div className="cm-wrapper">
                <div className="cm-box">
                    <div className="close-item">
                        <Close />
                    </div>
                    <h1 className="cm-title">Connect your account</h1>
                    <p className="cm-subtitle">You need to connect your account to create an organization</p>
                    <a href="#" className="cm-info">What is a wallet?</a>
                    <div className="wallet-provider-box">
                        <WalletProvider />
                    </div>
                    <button className="modal-close-btn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default ConnectModal