import React from "react";
import { QuestionIcon } from "../../utils/borrow-detail";

function BDBody(props: any) {
    return (
        <div className="bd-body-wrapper">
            <div className="bd-overview">
                <div className="o-head">
                    <div className="o-head-text">
                        <p>Overview</p>
                    </div>
                </div>
                <div className="o-body-pd">
                    <div className="o-body">
                        <div className="ob-item">
                            <h3>
                                Liquidation Price
                                <div className="qs-icon-box">
                                    <QuestionIcon />
                                </div>

                            </h3>

                            <p>
                                $0.00
                            </p>

                            <div className="calculate">
                                <p>
                                    $0.00 after
                                </p>
                            </div>
                        </div>

                        <div className="ob-item">
                            <h3>
                            Collateralization Ratio
                                <div className="qs-icon-box">
                                    <QuestionIcon />
                                </div>

                            </h3>

                            <p>
                                $0.00
                            </p>

                            <div className="calculate">
                                <p>
                                    $0.00 after
                                </p>
                            </div>
                        </div>

                        <div className="ob-item">
                            <h3>
                            Collateral Locked
                                <div className="qs-icon-box">
                                    <QuestionIcon />
                                </div>

                            </h3>

                            <p>
                                $0.00
                            </p>

                            <div className="calculate">
                                <p>
                                    $0.00 after
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="o-foot">
                    <ul className="of-list">
                        <li className="of-item">
                            <div className="of-label">
                                Vault Dai Debt
                            </div>
                            <p className="of-value">0.00000 DAI</p>
                            <div className="calculate">
                                <p>
                                    0.00000 DAI after
                                </p>
                            </div>
                        </li>

                        <li className="of-item">
                            <div className="of-label">
                                Available to Withdraw
                            </div>
                            <p className="of-value">0.00000 ETH</p>
                            <div className="calculate">
                                <p>
                                    0.00000 ETH after
                                </p>
                            </div>
                        </li>

                        <li className="of-item">
                            <div className="of-label">
                                Available to Generate
                            </div>
                            <p className="of-value">0.00000 DAI</p>
                            <div className="calculate">
                                <p>
                                    0.00000 DAI after
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bd-configure">

            </div>
        </div>
    )
}

export default BDBody;