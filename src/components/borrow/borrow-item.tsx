import React from "react";
import { useNavigate } from "react-router";
import { BTCImg, ETHImg } from "../../utils/borrow";

function BorrowItem(props: any) {
    const navigate = useNavigate()

    function toBorrowDetail() {
        navigate("/borrow/detail")
    }
    
    return (
        <div className="br-items">
            <div className="br-item-bg">
                <div className="br-item">
                    <div className="item-head">
                        <div className="head-tag">
                            <div className="head-tag-text">
                                Lowest fees for Borrowing
                            </div>
                        </div>

                        <div className="head-row-1">
                            <div className="head-row-1-box">
                                <div className="r1-left">
                                    <p>
                                        Lowest ETH borrowing cost
                                    </p>
                                    <div className="r1-left-sub-text">
                                        The lowest Stability Fee and cheapest Vault for borrowing using ETH
                                    </div>
                                </div>

                                <div className="r1-right">
                                    <ETHImg />
                                </div>
                            </div>
                        </div>

                        <div className="head-row-2">
                            <div className="r2-content">
                                <div className="r2-with">
                                    With 157.00 ETH 👇
                                </div>
                                <div className="r2-bor">
                                    Borrow up to 150,000.00 DAI
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-info">
                        <div className="ii-row">
                            <div className="iir-text">
                                Min Coll. Ratio
                            </div>

                            <div className="iir-num">
                                170.00%
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                                Current Liquidity Available
                            </div>

                            <div className="iir-num">
                                98.61M
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                                Variable Annual Fee
                            </div>

                            <div className="iir-num">
                                0.50%
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                                Protocol
                            </div>

                            <div className="maker-box">
                                <div className="maker-pd">
                                    <a href="#" className="">
                                        <div className="maker-text">
                                            <div className="mt-a">
                                                Maker
                                            </div>
                                            <div className="mt-b">
                                                →
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-btn-box">
                        <button className="item-btn" onClick={toBorrowDetail}>
                            Borrow
                        </button>
                    </div>
                </div>
            </div>
            <div className="br-item-bg br-item-bg-yellow">
                <div className="br-item">
                    <div className="item-head">
                        <div className="head-tag">
                            <div className="head-tag-text">
                            Lowest wBTC borrowing cost
                            </div>
                        </div>

                        <div className="head-row-1">
                            <div className="head-row-1-box">
                                <div className="r1-left">
                                    <p>
                                        Lowest ETH borrowing cost
                                    </p>
                                    <div className="r1-left-sub-text">
                                        The lowest Stability Fee and cheapest Vault for borrowing using ETH
                                    </div>
                                </div>

                                <div className="r1-right">
                                    <BTCImg />
                                </div>
                            </div>
                        </div>

                        <div className="head-row-2">
                            <div className="r2-content">
                                <div className="r2-with">
                                    With 157.00 ETH 👇
                                </div>
                                <div className="r2-bor">
                                    Borrow up to 150,000.00 DAI
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-info">
                        <div className="ii-row">
                            <div className="iir-text">
                                Min Coll. Ratio
                            </div>

                            <div className="iir-num">
                                170.00%
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                                Current Liquidity Available
                            </div>

                            <div className="iir-num">
                                98.61M
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                                Variable Annual Fee
                            </div>

                            <div className="iir-num">
                                0.50%
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                                Protocol
                            </div>

                            <div className="maker-box">
                                <div className="maker-pd">
                                    <a href="#" className="">
                                        <div className="maker-text">
                                            <div className="mt-a">
                                                Maker
                                            </div>
                                            <div className="mt-b">
                                                →
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-btn-box">
                        <button className="item-btn" onClick={toBorrowDetail}>
                            Borrow
                        </button>
                    </div>
                </div>
            </div>
            <div className="br-item-bg br-item-bg-blue">
            <div className="br-item">
                    <div className="item-head">
                        <div className="head-tag">
                            <div className="head-tag-text">
                            Lowest fees for Borrowing
                            </div>
                        </div>

                        <div className="head-row-1">
                            <div className="head-row-1-box">
                                <div className="r1-left">
                                    <p>
                                    Lowest ETH borrowing cost
                                    </p>
                                    <div className="r1-left-sub-text">
                                    The lowest Stability Fee and cheapest Vault for borrowing using ETH
                                    </div>
                                </div>

                                <div className="r1-right">
                                    <ETHImg />
                                </div>
                            </div>
                        </div>

                        <div className="head-row-2">
                            <div className="r2-content">
                                <div className="r2-with">
                                With 157.00 ETH 👇
                                </div>
                                <div className="r2-bor">
                                Borrow up to 150,000.00 DAI
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-info">
                        <div className="ii-row">
                            <div className="iir-text">
                            Min Coll. Ratio
                            </div>

                            <div className="iir-num">
                            170.00%
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                            Current Liquidity Available
                            </div>

                            <div className="iir-num">
                            98.61M
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                            Variable Annual Fee
                            </div>

                            <div className="iir-num">
                            0.50%
                            </div>
                        </div>
                        <div className="ii-row">
                            <div className="iir-text">
                            Protocol
                            </div>

                            <div className="maker-box">
                                <div className="maker-pd">
                                    <a href="#" className="">
                                        <div className="maker-text">
                                            <div className="mt-a">
                                                Maker
                                            </div>
                                            <div className="mt-b">
                                                →
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-btn-box">
                        <button className="item-btn" onClick={toBorrowDetail}>
                            Borrow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BorrowItem