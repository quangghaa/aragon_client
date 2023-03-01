import React, { useEffect } from "react";
import DOption from "../components/discover/d-option";
import DSelectHead from "../components/discover/d-select-head";
import DTable from "../components/discover/d-table";
import "../components/discover/style.css"
import Navigation from "../components/navigation";

function Discover(props: any) {
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
                            Discover Oasis.app
                            </h1>
                            <div className="br-head-sub">
                            Discover and find the most interesting Vaults on Oasis.app in real-time.
                            <br/>
                            <a href="#">Learn more about Discover -&gt;</a>
                            </div>
                        </div>

                        <DOption />
                        
                        <div className="d-body">
                            <DSelectHead />
                            <DTable />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover;