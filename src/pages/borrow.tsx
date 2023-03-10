import React, { useEffect } from "react";
import BorrowItem from "../components/borrow/borrow-item";
import "../components/borrow/style.css"
import Tokens from "../components/borrow/tokens";
import FHeader from "../components/f-header";
import Navigation from "../components/navigation";

function Borrow(props: any) {
    useEffect(() => {
        props.setPage("borrow")
    }, [])

    return (
        <>
            <div id="borrow-id" className='ex-body'>
                <div className='ex-nav-wrapper'>
                    <Navigation />
                </div>
                <div className="borrow-bg">
                    <div className="borrow">
                        <div className="br-head">
                            <h1 className="br-head-title">
                                Oasis Borrow
                            </h1>
                            <div className="br-head-sub">
                            Borrow Dai against your favorite crypto assets. Use the Dai however you like. Browse the featured, or select an asset to view our products.
                            <br/>
                            <a href="#">Learn more about Borrow -&gt;</a>
                            </div>
                        </div>

                        <Tokens />
                        <BorrowItem />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Borrow;