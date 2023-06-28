import React from "react"
import { Fortmatic, Frame, Metamask, Portis, WalletConnect } from "../utils/image"

function ConnectForm() {
    function metamaskClick(e: any) {
        e.stopPropagation()
        console.log("metamask clicked")
    }

    return (
        <div id="wallet-list" className="connect-form">
            <h1 className="cf-title">
                use account from
            </h1>
            <div className="wallet-box">
                <div className="w-item" onClick={(e: any) => metamaskClick(e)}>
                    <Metamask />
                    <div className="w-name" >Metamask</div>
                </div>
                <div className="w-item">
                    <Frame />
                    <div className="w-name">Frame</div>
                </div>
                <div className="w-item">
                    <Fortmatic />
                    <div className="w-name">Fortmatic</div>
                </div>
                <div className="w-item">
                    <Portis />
                    <div className="w-name">Portis</div>
                </div>
                <div className="w-item">
                    <WalletConnect />
                    <div className="w-name">WalletConnect</div>
                </div>
            </div>
        </div>
    )
}

export default ConnectForm