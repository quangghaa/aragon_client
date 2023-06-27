import { Select } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Voting from "../pages_deprecated/voting";
import { NavVote, PermFinance, PermVault, PermVoting } from "../utils/image";
import { Pass, Search } from "../utils/svg-icons";
import FTokenBalance from "./f-token-balance";
import FTransferContent from "./f-transfer-content";
import PTable from "./p-table";

function PContent() {
    function toSystemPerm(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("perm-nav-app")) as HTMLSelectElement;
        id.classList.remove("show-highlight");

        var id = (document.getElementById("perm-nav-sys")) as HTMLSelectElement;
        id.classList.add("show-highlight");

        // show system perm
        // var id = (document.getElementById("app-perm-id")) as HTMLSelectElement;
        // id.classList.remove("perm-show");

        // var id = (document.getElementById("sys-perm-id")) as HTMLSelectElement;
        // id.classList.add("perm-show");
    }

    function toAppPerm(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("perm-nav-sys")) as HTMLSelectElement;
        id.classList.remove("show-highlight");

        var id = (document.getElementById("perm-nav-app")) as HTMLSelectElement;
        id.classList.add("show-highlight");

        // show app perm
        // var id = (document.getElementById("sys-perm-id")) as HTMLSelectElement;
        // id.classList.remove("perm-show");

        // var id = (document.getElementById("app-perm-id")) as HTMLSelectElement;
        // id.classList.add("perm-show");
    }

    function handleChange() {

    }

    const navigate = useNavigate()
    function toDetail() {
        navigate("/permission-detail")
    }

    return (
        <section className="vote-section">
            <div className="perm-tags">
                <div className="tm-nav">
                    <ul className="tm-nav-list">
                        <li className="tm-nav-item">
                            <button type="button" className="tm-nav-btn-box" onClick={(e: any) => toAppPerm(e)}>
                                <span className="tm-btn-text">App Permissions</span>
                                <span id="perm-nav-app" className="tm-btn-highlight"></span>
                            </button>
                        </li>
                        <li className="tm-nav-item">
                            <button type="button" className="tm-nav-btn-box" onClick={(e: any) => toSystemPerm(e)}>
                                <span className="tm-btn-text">System Permissions</span>
                                <span id="perm-nav-sys" className="tm-btn-highlight"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="" className="vote-list-box">
                <div className="p-vote-item" onClick={toDetail}>
                    <div className="p-vote-icon">
                        <PermVoting />
                    </div>
                    <p className="p-vote-name">Voting</p>
                    <div className="p-vote-subtext-box">
                        <span className="p-vote-subtext">ant (50%)</span>
                    </div>
                </div>

                <div className="p-vote-item">
                    <div className="p-vote-icon">
                        <PermVoting />
                    </div>
                    <p className="p-vote-name">Voting</p>
                    <div className="p-vote-subtext-box">
                        <span className="p-vote-subtext">ant (67%)</span>
                    </div>
                </div>

                <div className="p-vote-item">
                    <div className="p-vote-icon">
                        <PermFinance />
                    </div>
                    <p className="p-vote-name">Finance</p>
                    <div className="p-vote-subtext-box">
                        <span className="p-vote-subtext">0xd970…10ff</span>
                    </div>
                </div>

                <div className="p-vote-item">
                    <div className="p-vote-icon">
                        <PermVault />
                    </div>
                    <p className="p-vote-name">Vault</p>
                    <div className="p-vote-subtext-box">
                        <span className="p-vote-subtext">background app</span>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="ft-content">
                    <div className="ftc-header-wrapper">
                        <div className="ftc-header">
                            <div className="ftc-header-title">All assigned permissions</div>
                            <div className="flex">
                                <div className="temp-class mr">
                                    <Select
                                        defaultValue="1"
                                        style={{ width: 128 }}
                                        onChange={handleChange}
                                        options={[
                                            { value: '1', label: 'All entities' },
                                            { value: '2', label: 'Account' },
                                            { value: '3', label: 'App' },
                                        ]}
                                    />
                                </div>
                                <div className="question-input-box">
                                    <input type="text" placeholder="Search by app or role" className="question-input" />
                                    <div className="tm-search-icon-box">
                                        <Search />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <PTable />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PContent;