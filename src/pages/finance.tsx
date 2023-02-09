import React from "react";
import FContent from "../components/f-content";
import FHeader from "../components/f-header";
import Navigation from "../components/navigation";
function Finance() {
    return (
        <>
            <div className='ex-body'>
                <div className='ex-nav-wrapper'>
                    <Navigation />
                </div>
                <div className="voting-bg">
                    <div className="voting">
                        <FHeader />
                        <FContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finance;