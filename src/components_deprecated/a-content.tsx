import { Select } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"
import Voting from "../pages_deprecated/voting"
import { NavVote, PermFinance, PermVault, PermVoting } from "../utils/image"
import { Pass, Search } from "../utils/svg-icons"
import FTokenBalance from "./f-token-balance"
import FTransferContent from "./f-transfer-content"
import PTable from "./p-table"

function AContent() {
    function toSystemPerm(e: any) {
        e.stopPropagation()
        var id = (document.getElementById("perm-nav-app")) as HTMLSelectElement
        id.classList.remove("show-highlight")

        var id = (document.getElementById("perm-nav-sys")) as HTMLSelectElement
        id.classList.add("show-highlight")

        // show system perm
        // var id = (document.getElementById("app-perm-id")) as HTMLSelectElement;
        // id.classList.remove("perm-show");

        // var id = (document.getElementById("sys-perm-id")) as HTMLSelectElement;
        // id.classList.add("perm-show");
    }

    function toAppPerm(e: any) {
        e.stopPropagation()
        var id = (document.getElementById("perm-nav-sys")) as HTMLSelectElement
        id.classList.remove("show-highlight")

        var id = (document.getElementById("perm-nav-app")) as HTMLSelectElement
        id.classList.add("show-highlight")

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
        navigate("/app-center-detail")
    }

    return (
        <section className="vote-section">
            <div className="perm-tags">
                <div className="tm-nav">
                    <ul className="tm-nav-list">
                        <li className="tm-nav-item">
                            <button type="button" className="tm-nav-btn-box" onClick={(e: any) => toAppPerm(e)}>
                                <span className="tm-btn-text">Installed Apps</span>
                                <span id="perm-nav-app" className="tm-btn-highlight"></span>
                            </button>
                        </li>
                        <li className="tm-nav-item">
                            <button type="button" className="tm-nav-btn-box" onClick={(e: any) => toSystemPerm(e)}>
                                <span className="tm-btn-text">Discovered Apps</span>
                                <span id="perm-nav-sys" className="tm-btn-highlight"></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="" className="a-vote-list-box">
                <div className="p-vote-item" onClick={toDetail}>
                    <div className="p-vote-icon">
                        <PermVault />
                    </div>
                    <p className="p-vote-name">Vault</p>
                    <div className="p-vote-subtext-box">
                        <span className="a-vote-subtext">up to date</span>
                    </div>
                    <p className="a-vote-des">Store an organization's financial assets.</p>
                </div>

                <div className="p-vote-item">
                    <div className="p-vote-icon">
                        <PermVoting />
                    </div>
                    <p className="p-vote-name">Voting</p>
                    <div className="p-vote-subtext-box">
                        <span className="a-vote-subtext">up to date</span>
                    </div>
                    <p className="a-vote-des">Store an organization's financial assets.</p>
                </div>

                <div className="p-vote-item">
                    <div className="p-vote-icon">
                        <PermFinance />
                    </div>
                    <p className="p-vote-name">Finance</p>
                    <div className="p-vote-subtext-box">
                        <span className="a-vote-subtext">up to date</span>
                    </div>
                    <p className="a-vote-des">Store an organization's financial assets.</p>
                </div>
            </div>

        </section>
    )
}

export default AContent