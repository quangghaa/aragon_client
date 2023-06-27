import React from "react";
import { ColorETHIcon, InfoIcon } from "../../utils/borrow-detail";

function BDHead(props: any) {
    return (
        <div className="bd-head-wrapper">
            <div className="hr-1">
                <h1 className="hr1-left">
                    <div className="hr1-left-icon">
                        <ColorETHIcon />
                    </div>
                    Open ETH-C Vault
                    <div className="hr1-left-empty">

                    </div>
                </h1>

                <div className="hr1-right">
                    <div className="r-a">
                        <span className="ra-label">Current Price</span>
                        <span className="ra-value">$1,628.60</span>
                    </div>

                    <div className="r-b">
                        <span className="ra-label">Next Price</span>
                        <span className="ra-value">$1,628.60</span>
                        <span className="rb-text">in 29 min</span>
                        <span className="rb-text">(0.00%)</span>
                    </div>
                </div>
            </div>

            <div className="hr-2">
                <div className="hr2-item-box">
                    <div className="hr2-item">
                        VaultID
                        <span>T.B.D</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

                <div className="hr2-item-box">
                    <div className="hr2-item">
                        Stability Fee
                        <span>0.50%</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

                <div className="hr2-item-box">
                    <div className="hr2-item">
                        Liquidation
                        <span>13%</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

                <div className="hr2-item-box">
                    <div className="hr2-item">
                        Min. collateral ratio
                        <span>170%</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

                <div className="hr2-item-box">
                    <div className="hr2-item">
                        Dust Limit
                        <span>$3,500.00</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BDHead;