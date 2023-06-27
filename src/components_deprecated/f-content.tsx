import React from "react";
import Voting from "../pages_deprecated/voting";
import { NavVote } from "../utils/image";
import { Pass } from "../utils/svg-icons";
import FTokenBalance from "./f-token-balance";
import FTransferContent from "./f-transfer-content";

function FContent() {
    return (
        <section className="vote-section">
            <FTokenBalance />
            <FTransferContent />
        </section>
    )
}

export default FContent;