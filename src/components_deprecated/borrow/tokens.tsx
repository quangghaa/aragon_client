import React from "react";
import { BTCIcon, ETHIcon, FeatureIcon } from "../../utils/borrow";

function Tokens(props: any) {
    return (
        <div className="token-nav-wrapper">
            <div className="token-nav">
                <button className="token-btn">
                    <div className="token-btn-content">
                        <div className="tbc-icon">
                            <FeatureIcon />
                        </div>
                        <div className="tbc-text">
                            Featured
                        </div>
                    </div>
                </button>
                <button className="token-btn">
                    <div className="token-btn-content">
                        <div className="tbc-icon">
                            <ETHIcon />
                        </div>
                        <div className="tbc-text">
                            ETH
                        </div>
                    </div>
                </button>
                <button className="token-btn">
                    <div className="token-btn-content">
                        <div className="tbc-icon">
                            <BTCIcon />
                        </div>
                        <div className="tbc-text">
                            BTC
                        </div>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default Tokens;