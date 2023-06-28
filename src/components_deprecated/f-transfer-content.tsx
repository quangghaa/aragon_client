import { DatePicker, Select } from "antd"
import React from "react"
import { Down, Export } from "../utils/svg-icons"
import FTable from "./f-table"
import { FButtonTokenPopup, FButtonTypePopup, VButtonPopup } from "./v-btn-popup"

function FTransferContent() {
    const { RangePicker } = DatePicker

    function fBtnTypeClick(e: any) {
        e.stopPropagation()
        const id = (document.getElementById("f-type-popup-id")) as HTMLSelectElement
        id.classList.toggle("show-v-popup")
    }

    function fBtnTokenClick(e: any) {
        e.stopPropagation()
        const id = (document.getElementById("f-token-popup-id")) as HTMLSelectElement
        id.classList.toggle("show-v-popup")
    }

    function handleChange() {
        console.log("handle onchange")
    }

    return (
        <div className="ft-content">
            <div className="ftc-header-wrapper">
                <div className="ftc-header">
                    <div className="ftc-header-title">Transfers</div>
                    <div>
                        <button className="ftc-btn">
                            <span className="ftc-btn-icon-box"><Export /></span>
                            Export
                        </button>
                    </div>
                </div>

                <div className="v-nav-box ft-vnb">
                    <div className="temp-class">
                        <Select
                            defaultValue="1"
                            style={{ width: 128 }}
                            onChange={handleChange}
                            options={[
                                { value: "1", label: "All" },
                                { value: "2", label: "Incomming" },
                                { value: "3", label: "Outgoing" },
                            ]}
                        />
                    </div>

                    <div className="temp-class">
                        <Select
                            defaultValue="1"
                            style={{ width: 128 }}
                            onChange={handleChange}
                            options={[
                                { value: "1", label: "All tokens" },
                                { value: "2", label: "ETH" },
                                { value: "3", label: "ANJ" },
                                { value: "4", label: "ANT" },
                                { value: "5", label: "DAI" },
                                { value: "6", label: "DANA" },
                                { value: "7", label: "SAI" },
                                { value: "8", label: "USDC" },
                                { value: "9", label: "USDT" },
                            ]}
                        />
                    </div>

                    <div className="calendar-box">
                        <RangePicker className="x" />
                    </div>
                </div>
            </div>

            <div>
                <FTable />
            </div>
        </div>
    )
}

export default FTransferContent