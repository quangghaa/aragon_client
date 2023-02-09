import React from "react";
import Navigation from "../components/navigation";
import VContent from "../components/v-content";
import VHeader from "../components/v-header";

function Voting() {
    return (
        <>
            <div className='ex-body'>
                <div className='ex-nav-wrapper'>
                    <Navigation />
                </div>
                <div className="voting-bg">
                    <div className="voting">
                        <VHeader />
                        <VContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Voting;