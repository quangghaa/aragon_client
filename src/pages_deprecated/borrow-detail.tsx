import React, { useEffect } from "react";
import BDBody from "../components_deprecated/borrow-detail/bd-body";
import BDHead from "../components_deprecated/borrow-detail/bd-head";
import BorrowItem from "../components_deprecated/borrow/borrow-item";
import "../components_deprecated/borrow/style.css"
import Tokens from "../components_deprecated/borrow/tokens";
import Navigation from "../components_deprecated/navigation";
import "../components_deprecated/borrow-detail/style.css";

function BorrowDetail(props: any) {
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
                        <BDHead />
                        <BDBody />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BorrowDetail;