import React from "react"

function NetworkModal(props: any) {
    function handleClick(value: any) {
        props.setNetwork(value)
    }

    return (
        <div className="nm-content">
            <div className="nm-header">
                <h2 className="nmh-title">Select a Network</h2>
                <p className="nmh-sub">You are currently connected to the Ethereum Mainnet network</p>
            </div>
            <div className="nm-body-wrapper">
                <div>
                    <p className="network-title">Mainnets</p>
                    <div className="network-list">
                        <button className="network-btn" onClick={() => handleClick("Ethereum")}>
                            Ethereum
                        </button>
                        <button className="network-btn" onClick={() => handleClick("Polygon")}>
                            Polygon
                        </button>
                        <button className="network-btn" onClick={() => handleClick("Harmony")}>
                            Harmony
                        </button>
                        <button className="network-btn" onClick={() => handleClick("Andromeda")}>
                            Andromeda
                        </button>
                    </div>
                </div>

                <div>
                    <p className="network-title">Testnets</p>
                    <div className="network-list">
                        <button className="network-btn" onClick={() => handleClick("Goerli")}>
                            Goerli
                        </button>
                        <button className="network-btn" onClick={() => handleClick("Mumbai")}>
                            Mumbai
                        </button>
                        <button className="network-btn" onClick={() => handleClick("BSC Testnet")}>
                            BSC Testnet
                        </button>
                        <button className="network-btn" onClick={() => handleClick("Stardust")}>
                            Stardust
                        </button>
                        <button className="network-btn" onClick={() => handleClick("Harmony Testnet")}>
                            Harmony Testnet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetworkModal