import React, { useEffect, useState } from "react";
import BDBody from "../components/borrow-detail/bd-body";
import BDHead from "../components/borrow-detail/bd-head";
import BorrowItem from "../components/borrow/borrow-item";
import "../components/borrow/style.css"
import Tokens from "../components/borrow/tokens";
import Navigation from "../components/navigation";
import "../components/borrow-detail/style.css";

function BorrowDetail(props: any) {
    let walletAddress = props.MyWalletAddress;
    const [CheckFund , setCheckFund] = useState(0);
    const [spotPrice , setSpotPrice] = useState("");
    const [priceType , setPriceType] = useState(0 as any)
    const [CurrentPrice , setMyCurrentPrice] = useState("");
    const [BATContract , setBATContract] = useState([] as any);
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
                        <BDHead MyCurrentPrice={CurrentPrice} setMyCurrentPrice={setMyCurrentPrice} setMyCheckFund = {setCheckFund} 
                        setMySpotPrice={setSpotPrice} setMyPriceType={setPriceType} 
                        myCheckFund={CheckFund}
                        myBATContract ={BATContract}
                        />
                        <BDBody MyCheckFund = {CheckFund} myWalletAddress={walletAddress} 
                        mySpotPrice={spotPrice} myPriceType={priceType}
                        MyCurrentPrice={CurrentPrice} setMyCheckFund = {setCheckFund}
                        setMyBATContract = {setBATContract} myBATContract ={BATContract}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BorrowDetail;