import { DatePicker } from "antd";
import React from "react";
import { Down, Export } from "../utils/svg-icons";
import FTable from "./f-table";
import {FButtonTokenPopup, FButtonTypePopup, VButtonPopup} from "./v-btn-popup";

function FTransferContent() {
    const { RangePicker } = DatePicker;

    function fBtnTypeClick(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("f-type-popup-id")) as HTMLSelectElement;
        id.classList.toggle("show-v-popup");
    }

    function fBtnTokenClick(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("f-token-popup-id")) as HTMLSelectElement;
        id.classList.toggle("show-v-popup");
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
                    <button className="v-nav-btn" onClick={(e: any) => fBtnTypeClick(e)}>
                        <div className="v-btn-name">Type</div>
                        <div className="v-btn-icon"><Down /></div>
                        <FButtonTypePopup />
                    </button>

                    <button className="v-nav-btn">
                        <div className="v-btn-name" onClick={(e: any) => fBtnTokenClick(e)}>Token</div>
                        <div className="v-btn-icon"><Down /></div>
                        <FButtonTokenPopup />
                    </button>

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

export default FTransferContent;