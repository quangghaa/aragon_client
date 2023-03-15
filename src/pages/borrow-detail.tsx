import React, { useEffect, useState } from "react";
import BDBody from "../components/borrow-detail/bd-body";
import BDHead from "../components/borrow-detail/bd-head";
import BorrowItem from "../components/borrow/borrow-item";
import "../components/borrow/style.css"
import Tokens from "../components/borrow/tokens";
import Navigation from "../components/navigation";
import "../components/borrow-detail/style.css";

function BorrowDetail(props: any) {
    const [CheckFund , setCheckFund] = useState("");
    useEffect(() => {
        props.setPage("borrow")
    }, [])

    return (
        <>
            <div id="borrow-id" className='ex-body'>
                <div className='ex-nav-wrapper'>
                    <Navigation />
                </div>
                <div className="borrow-bg borrow-padding">
                    <div className="borrow">
                        <BDHead setMyCheckFund = {setCheckFund} />
                        <BDBody MyCheckFund = {CheckFund} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BorrowDetail;