import { formatTimeStr } from "antd/es/statistic/utils";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Back } from "../utils/svg-icons";
import NewTransModal from "./newtrans-modal";
import PDetailTable from "./p-detail-table";
import NewPermModal from "./perm-modal";

function AHeader() {
    return (
        <>
        <div className="v-header-wrapper">
            <div className="v-header">
                <div className="v-title-box">
                    <h1 className="v-title">App Center</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default AHeader;