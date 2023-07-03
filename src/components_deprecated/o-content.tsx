import { Select } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Export, Pass, Search } from "../utils/svg-icons"

function OContent() {
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
        navigate("/permission-detail")
    }

    return (
        <section className="vote-section">
            <section className="org-addr-section">
                <h1 className="od-head">organization address</h1>
                <div className="od-content-box">
                    <p className="od-des">
                        <span>This organization is deployed on Ethereum Mainnet. </span>
                        <span>The current software version is 0.8 Camino. You can see
                            <button className="od-text-btn">what's new here</button>
                        </span>
                    </p>

                    <div className="od-addr-box">
                        <div className="od-addr-small-box">
                            <div className="od-addr-icon"></div>
                            <span className="od-addr">0x2dE83b50Af29678774D5AbC4a7Cb2a588762f28C</span>
                        </div>
                    </div>

                    <div className="od-note-box">
                        <strong>Do not send ETH or ERC20 tokens to this address.</strong>
                        <span>
                            If you’d like to deposit funds into this organization, you can do so from
                            <button className="od-text-btn">Finance</button>
                        </span>
                    </div>
                </div>
            </section>

            <section className="org-addr-section mt">
                <h1 className="od-head">INSTALLED ARAGON APPS</h1>
                <div className="od-content-box">
                    <ul className="ia-list">
                        <li className="ia-item">
                            <label className="ia-item-label">voting</label>
                            <div className="ia-item-btn-box">
                                <button className="ia-item-btn">
                                    <div className="ia-item-box">
                                        <div className="ia-item-icon"></div>
                                        <span className="ia-item-text">0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4</span>
                                    </div>
                                </button>
                            </div>
                        </li>

                        <li className="ia-item">
                            <label className="ia-item-label">voting</label>
                            <div className="ia-item-btn-box">
                                <button className="ia-item-btn">
                                    <div className="ia-item-box">
                                        <div className="ia-item-icon"></div>
                                        <span className="ia-item-text">0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4</span>
                                    </div>
                                </button>
                            </div>
                        </li>

                        <li className="ia-item">
                            <label className="ia-item-label">finance</label>
                            <div className="ia-item-btn-box">
                                <button className="ia-item-btn">
                                    <div className="ia-item-box">
                                        <div className="ia-item-icon"></div>
                                        <span className="ia-item-text">0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4</span>
                                    </div>
                                </button>
                            </div>
                        </li>

                        <li className="ia-item">
                            <label className="ia-item-label">vault (contract-only)</label>
                            <div className="ia-item-btn-box">
                                <button className="ia-item-btn">
                                    <div className="ia-item-box">
                                        <div className="ia-item-icon"></div>
                                        <span className="ia-item-text">0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4</span>
                                    </div>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="org-addr-section mt">
                <h1 className="od-head">import organization into tenderly</h1>
                <div className="od-content-box">
                    <p className="io-des">Import this organization’s smart contracts into your Tenderly dashboard.</p>
                    <a href="#" className="io-a-box">
                        <span className="io-a-icon">
                            <Export />
                        </span>
                        <span className="io-a-text">Import organization into Tenderly</span>
                    </a>

                    <div className="od-note-box">
                        <p><a href="#" className="io-a-text-btn">Tenderly</a>&nbsp;is a real-time monitoring, alerting, and troubleshooting solution for smart contracts.</p>
                        <p>By importing your organization into Tenderly, you will be able to easily inspect, review, and monitor the smart contracts that make up this organization.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default OContent