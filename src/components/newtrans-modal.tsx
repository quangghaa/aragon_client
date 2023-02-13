import React, { useEffect, useState } from "react";
import { Close, Down, Search } from "../utils/svg-icons";
import {VButtonPopup} from "./v-btn-popup";

function NewTransModal() {
    const [isDeposit, setIsDeposit] = useState(true)

    // useEffect(() => {
    //     console.log("call me once")
        
    //     var id = (document.getElementById("tm-nav-deposit")) as HTMLSelectElement;
    //     id.classList.add("show-highlight");
    // }, [])

    function selectClick(e: any) {
        e.stopPropagation();
        console.log("btn click")
    }

    function toWithdrawalModal(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("tm-nav-deposit")) as HTMLSelectElement;
        id.classList.remove("show-highlight");

        var id = (document.getElementById("tm-nav-withdrawal")) as HTMLSelectElement;
        id.classList.add("show-highlight");

        // show withdrawal form
        var id = (document.getElementById("deposit-form")) as HTMLSelectElement;
        id.classList.remove("form-show");

        var id = (document.getElementById("withdrawal-form")) as HTMLSelectElement;
        id.classList.add("form-show");
    }

    function toDepositModal(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("tm-nav-withdrawal")) as HTMLSelectElement;
        id.classList.remove("show-highlight");

        var id = (document.getElementById("tm-nav-deposit")) as HTMLSelectElement;
        id.classList.add("show-highlight");

        // show deposit form
        var id = (document.getElementById("withdrawal-form")) as HTMLSelectElement;
        id.classList.remove("form-show");

        var id = (document.getElementById("deposit-form")) as HTMLSelectElement;
        id.classList.add("form-show");
    }

    function vBtnClick(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("status-popup-id")) as HTMLSelectElement;
        id.classList.toggle("show-v-popup");
    }

    return (
        <div id="trans-modal" className="vm-bg">
            <aside className="vm-content">
                <div className="vm-head">
                    <h1 className="vm-head-title">New transfer</h1>
                    <button className="vm-head-btn">
                        <Close />
                    </button>
                </div>

                <div className="tm-nav">
                    <ul className="tm-nav-list">
                        <li className="tm-nav-item">
                            <button type="button" className="tm-nav-btn-box" onClick={(e:any) => toDepositModal(e)}>
                                <span className="tm-btn-text">Deposit</span>
                                <span id="tm-nav-deposit" className="tm-btn-highlight"></span>
                            </button>
                        </li>
                        <li className="tm-nav-item">
                            <button type="button" className="tm-nav-btn-box" onClick={(e:any) => toWithdrawalModal(e)}>
                                <span className="tm-btn-text">Withdrawal</span>
                                <span id="tm-nav-withdrawal" className="tm-btn-highlight"></span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="vm-body">
                    <form id="deposit-form" className="vm-form form-hidden">
                        <div className="question-field">
                            <label className="question-label">token <span className="required">*</span></label>
                            <button type="button" className="tm-select" onClick={(e: any) => selectClick(e)}>
                                <div className="tm-select-text">Select a token</div>
                                <span className="tm-select-icon"><Down /></span>
                            </button>
                        </div>

                        <div className="question-field">
                            <label className="question-label">amount <span className="required">*</span></label>
                            <input type="text" placeholder="" className="question-input" />
                        </div>

                        <div className="question-field">
                            <label className="question-label">reference (optional) <span className="required">&nbsp;*</span></label>
                            <input type="text" placeholder="" className="question-input" />
                        </div>

                        <button className="vm-submit-btn">
                            Submit deposit
                        </button>

                        <section className="vn-note">
                        <p>Remember, Mainnet organizations use <strong>real funds</strong>.</p>
                        <p>Configure your deposit above, and sign the transaction with your wallet after clicking “Submit Transfer”. It will then show up in your Finance app once processed.</p>
                        </section>
                    </form>

                    <form id="withdrawal-form" className="vm-form form-hidden">
                        <div className="question-field">
                            <label className="question-label">recipient (must be a valid ethereum address) <span className="required">*</span></label>
                            <div className="question-input-box">
                                <input type="text" placeholder="" className="question-input" />
                                <div className="tm-search-icon-box">
                                    <Search />
                                </div>
                            </div>
                        </div>

                        <div className="question-field">
                            <label className="question-label">amount (optional) <span className="required">&nbsp;*</span></label>
                            <div className="flex">
                                <input type="text" placeholder="" className="question-input" />
                                <button type="button" className="v-nav-btn ml-12" onClick={(e: any) => vBtnClick(e)}>
                                    <div className="v-btn-name">Token</div>
                                    <div className="v-btn-icon"><Down /></div>
                                    <VButtonPopup />
                                </button>
                            </div>
                        </div>

                        <div className="question-field">
                            <label className="question-label">reference (optional) <span className="required">&nbsp;*</span></label>
                            <input type="text" placeholder="" className="question-input" />
                        </div>

                        <button className="vm-submit-btn">
                            Submit withdrawal
                        </button>
                        
                    </form>
                </div>
            </aside>
        </div>
    )
}

export default NewTransModal;