import { Modal, Popover } from "antd";
import React, { useState } from "react";
import { SettingBtn1 } from "../utils/image";
import { DotDotDot, DotEditLabel, DotTransaction, Down } from "../utils/svg-icons";
import { VButtonPopup } from "./v-btn-popup";

interface Transfer {
    label: string,
    date: string,
    source: string,
    reference: string,
    amount: number
}

function FTable() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        var id = (document.getElementById("c-label")) as HTMLInputElement
        console.log("LABEL: ", id.value)

        if (id.value.length == 0) {
            setIsModalOpen(false);
            return
        }

        trans[rowIndex].label = id.value
        
        setTrans(Object.assign([], trans))

        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [trans, setTrans] = useState(
        [
            {
                label: "",
                date: "2022-12-26",
                source: "0x8EdA…e290",
                reference: "membership",
                amount: 0.0001
            },
            {
                label: "",
                date: "2022-12-27",
                source: "0x8EdA…e291",
                reference: "membership",
                amount: 0.0001
            },
            {
                label: "",
                date: "2022-12-28",
                source: "0x8EdA…e292",
                reference: "membership",
                amount: 0.0001
            },
            {
                label: "",
                date: "2022-12-29",
                source: "0x8EdA…e293",
                reference: "membership",
                amount: 0.0001
            },
        ] as Transfer[]
    )

    const [rowIndex, setRowIndex] = useState(-1)

    function selectRow(index: any) {
        setRowIndex(index)
    }

    function demo(ind: any) {
        setRowIndex(ind)
        setIsModalOpen(true)
        console.log("DEMO >> ", ind)
    }

    const dotBtn = (ind: any) => (
        <div className="dot-btn-wrapper">
            <button className="dot-btn">
                <span><DotTransaction /></span>
                <span className="dot-btn-name">View transaction</span>
            </button>

            <button className="dot-btn" onClick={() => demo(ind)}>
                <span><DotEditLabel /></span>
                <span className="dot-btn-name">Edit custom label</span>
            </button>
        </div>
    )

    const sourcePopup = (v: any) => (
        <div id="setting-id" className="setting-popup-wrapper">
            <h1 className="cf-title">
                <div className="">{trans[rowIndex].label.length == 0 ? "" : trans[rowIndex].label}</div>
                <div className="custom-label-tag">custom label</div>
            </h1>
            <div>
                <div>COPY</div>
                <div className="edit-label-row">
                    <button className="setting-item-btn edit-label-btn">
                        <div className="sib-content-box c-padding">
                            <div>
                                <SettingBtn1 />
                            </div>
                            <div className="sibc-text">Custom labels</div>
                        </div>
                    </button>
                    <a href="#">See on explorer</a>
                </div>
            </div>
            
        </div>
    )

    return (
        <div>
            <table className="f-table">
                <thead className="ftb-head">
                    <tr>
                        <th className="th-item">
                            date
                        </th>
                        <th className="th-item">
                            source/recipient
                        </th>
                        <th className="th-item">
                            reference
                        </th>
                        <th className="th-item th-amount">
                            amount
                        </th>
                        <th className="th-item">

                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        trans.map((v, i) => {
                            return (
                                <tr className="body-row">
                                    <td className="tb-item">
                                        <div className="tb-item-box">
                                            <time className="time-box">{v.date}</time>
                                        </div>
                                    </td>

                                    <td className="tb-item">
                                        <div className="tb-item-box">
                                            <button className="sr-btn">
                                                <div className="srb-btn-box">
                                                    <div className="srb-icon-box">
                                                        <canvas className="identicon" width="24" height="24" style={{ width: "24px", height: "24px" }}></canvas>
                                                    </div>
                                                    {/* <span className="srb-btn-text">{v.source}</span> */}
                                                
                                                    <Popover id="source-id" placement="bottomRight" content={() => sourcePopup(i)} trigger="click">
                                                        <button className="src-btn" onClick={() => setRowIndex(i)}>
                                                            <span className="srb-btn-text">{(v.label == undefined || v.label.length == 0) ? v.source : v.label}</span>
                                                        </button>
                                                    </Popover>

                                                </div>
                                            </button>
                                        </div>
                                    </td>

                                    <td className="tb-item">
                                        <div className="tb-item-box">
                                            <div className="reference">
                                                membership
                                            </div>
                                        </div>
                                    </td>

                                    <td className="tb-item">
                                        <div className="tb-item-box tb-amount">
                                            <span className="item-amount">+{v.amount}&nbsp;eth</span>
                                        </div>
                                    </td>

                                    <td className="tb-item">
                                        <div className="tb-item-box">
                                            <div className="item-select-box">
                                                <Popover id="setting-id" placement="bottomRight" content={() => dotBtn(i)} trigger="click">
                                                    <button className="tb-item-btn-box" onClick={() => selectRow(i)}>
                                                        <div className="tb-item-btn-text">
                                                            <DotDotDot />
                                                        </div>
                                                        <div className="tb-item-btn-icon"><Down /></div>
                                                    </button>
                                                </Popover>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Modal title="Edit custom label" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className="el-des">This label would be displayed instead of the following address and only be <strong>stored on this device.</strong></p>
                <button className="sr-btn">
                    <div className="srb-btn-box">
                        <div className="srb-icon-box">
                            <canvas className="identicon" width="24" height="24" style={{ width: "24px", height: "24px" }}></canvas>
                        </div>
                        <span className="srb-btn-text">{rowIndex != -1 ? trans[rowIndex].source : "???"}</span>
                    </div>
                </button>
                <div>
                    <label className="el-label">custom label</label>
                    <input type="text" className="el-input" id="c-label" />
                </div>
            </Modal>
        </div>
    )
}

export default FTable;