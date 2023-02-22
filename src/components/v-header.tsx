import React from "react";
import { Down } from "../utils/svg-icons";

import { DatePicker, Select, Space } from 'antd';
import {VButtonPopup} from "./v-btn-popup";
import NewvoteModal from "./newvote-modal";
import { useState } from "react";

function VHeader(props : any) {
    let checkOwner = props.CheckOwner;
    console.log(checkOwner);
    const { RangePicker } = DatePicker;
    let MyQuestion = props.Question;
    let MySetQuestion = props.SetQuestion;
    const [QuestionExist , SetQuestionExist] = useState(false);
    let NewPoll = props.CreatePool;
    function vBtnClick(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("status-popup-id")) as HTMLSelectElement;
        id.classList.toggle("show-v-popup");
    }

    function openVoteModal(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("vote-modal")) as HTMLSelectElement;
        id.classList.toggle("vm-show");
    }

    function handleChange(value: any) {
        console.log("select value: ", value)
    }

    return (
        <>
        <div className="v-header-wrapper">
            <div className="v-header">
                <div className="v-title-box">
                    <h1 className="v-title">Voting</h1>
                </div>
                <div className="v-new-vote">
                    {/* <button className="v-new-vote-btn" >Add voter</button> */}
                    {checkOwner ? <button className="v-new-vote-btn" onClick={(e:any) => openVoteModal(e)}>New vote</button> : null}
                    {QuestionExist ? <button className="Add-voter-btn" >Add voter</button> : null}
                </div>
            </div>

            <div className="v-nav">
                <div className="v-nav-box">
                    <div className="temp-class">
                        <Select
                        defaultValue="1"
                        style={{ width: 128 }}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: 'All' },
                            { value: '2', label: 'Open' },
                            { value: '3', label: 'Closed' },
                        ]}
                        />
                    </div>

                    <div className="temp-class">
                        <Select
                        defaultValue="1"
                        style={{ width: 128 }}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: 'All' },
                            { value: '2', label: 'Passed' },
                            { value: '3', label: 'Rejected' },
                            { value: '4', label: 'Enacted' },
                            { value: '5', label: 'Pending' },
                        ]}
                        />
                    </div>

                    <div className="temp-class">
                        <Select
                        defaultValue="1"
                        style={{ width: 128 }}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: 'All' },
                            { value: '2', label: 'Voting' },
                            { value: '3', label: 'External' },
                        ]}
                        />
                    </div>

                    <div className="calendar-box">
                        <RangePicker className="x" />
                    </div>
                </div>
            </div>
        </div>
        <NewvoteModal finnalQuestion={MyQuestion} FinnalSetQuestion={MySetQuestion} setCheckQuestion = {SetQuestionExist} FinnalCreatePoll ={NewPoll}/>
        </>
    )
}

export default VHeader;