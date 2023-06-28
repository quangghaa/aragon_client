import React from "react"
import { USDT } from "../utils/image"
import { ETH } from "../utils/image"

interface TokenBalanceItemProps {
    item: any
}
const TokenBalanceItem = ({ item }: TokenBalanceItemProps) => {
    return (
        <div className="ft-item">
            <div className="ft-item-box">
                <div className="fti-head-box">
                    {item.token === "eth" &&
                        <span className="fti-icon-box">
                            <ETH />
                        </span>}
                    {item.token === "usdt" &&
                        <span className="fti-icon-box">
                            <USDT />
                        </span>}
                    <span className="fti-text">{item.token}</span>
                </div>

                <div className="">
                    <div className="fti-balance-box">
                        <span className="fti-pre">~</span>
                        <div className="fti-bignum">
                            <span>{item.value1}</span>
                        </div>
                    </div>

                    <div className="fti-subbalance-box">
                        {item.value2}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TokenBalanceItem