import React from "react";
import { BTCIcon, ETHIcon, FeatureIcon } from "../../utils/borrow";
import { HMIcon, HRIcon, LDIcon, MYEIcon } from "../../utils/discover";

function DOption(props: any) {
    return (
        <div className="d-nav-wrapper">
            <div className="token-nav">
                <button className="token-btn">
                    <div className="token-btn-content">
                        <div className="tbc-icon">
                            <HRIcon />
                        </div>
                        <div className="tbc-text">
                            Highest-Risk Positions
                        </div>
                    </div>
                </button>
                <button className="token-btn">
                    <div className="token-btn-content">
                        <div className="tbc-icon">
                            <HMIcon />
                        </div>
                        <div className="tbc-text">
                            Highest Multiply P&L
                        </div>
                    </div>
                </button>
                <button className="token-btn">
                    <div className="token-btn-content">
                        <div className="tbc-icon">
                            <MYEIcon />
                        </div>
                        <div className="tbc-text">
                            MOst Yield Earned
                        </div>
                    </div>
                </button>

                <button className="token-btn">
                    <div className="token-btn-content">
                        <div className="tbc-icon">
                            <LDIcon />
                        </div>
                        <div className="tbc-text">
                            Largest Debt
                        </div>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default DOption;