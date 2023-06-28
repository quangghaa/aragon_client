import React from "react"
import { ETH, USDT } from "../utils/image"
import { FTIQuestion } from "../utils/svg-icons"
import QuestionPopup from "./question-popup"

function FTokenBalance() {
    function showQuestionPopup(e: any) {
        e.stopPropagation()
        const id = (document.getElementById("qp-id")) as HTMLElement
        id.classList.add("qp-show")
    }
    
    return (
        <section className="f-token-balance">
            <h1 className="ft-head">token balances</h1>
            <div className="ft-wrapper">
                <div className="ft-box">
                    <ul className="ft-list">
                        <li className="ft-item">
                            <div className="ft-item-box">
                                <div className="fti-head-box">
                                    <span className="fti-icon-box">
                                        <ETH />
                                    </span>
                                    <span className="fti-text">eth</span>
                                </div>

                                <div className="">
                                    <div className="fti-balance-box">
                                        <span className="fti-pre">~</span>
                                        <div className="fti-bignum">
                                            <span>2</span>
                                            <span className="fti-small-text">.201</span>
                                        </div>
                                        <div className="fti-question-box">
                                            <button className="fti-question" onClick={(e: any) => showQuestionPopup(e)}>
                                                <FTIQuestion />
                                                <QuestionPopup />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="fti-subbalance-box">
                                        $3,411.13
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="ft-item">
                            <div className="ft-item-box">
                                <div className="fti-head-box">
                                    <span className="fti-text">dana</span>
                                </div>

                                <div className="">
                                    <div className="fti-balance-box">
                                        <span className="fti-pre">~</span>
                                        <div className="fti-bignum">
                                            <span>1,000</span>
                                        </div>
                                    </div>

                                    <div className="fti-subbalance-box">
                                        _
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="ft-item">
                            <div className="ft-item-box">
                                <div className="fti-head-box">
                                    <span className="fti-icon-box">
                                        <USDT />
                                    </span>
                                    <span className="fti-text">USDT</span>
                                </div>

                                <div className="">
                                    <div className="fti-balance-box">
                                        <span className="fti-pre">~</span>
                                        <div className="fti-bignum">
                                            <span>5,000</span>
                                        </div>
                                    </div>

                                    <div className="fti-subbalance-box">
                                        $3,411.13
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default FTokenBalance