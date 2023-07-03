import React from "react"
import FTokenBalance from "./f-token-balance"
import FTransferContent from "./f-transfer-content"

function FContent() {
    return (
        <section className="vote-section">
            <FTokenBalance />
            <FTransferContent />
        </section>
    )
}

export default FContent