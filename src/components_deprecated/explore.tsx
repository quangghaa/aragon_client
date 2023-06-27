import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExploreItem } from "../utils/image";
import { Star } from "../utils/svg-icons";

function Explore(props: any) {
    console.log("network: ", props)
    const navigate = useNavigate()

    function clickEvent() {
        props.setPage("explore")
        navigate("/explore1")
    }

    const [list, setList] = useState([1, 2, 3, 4, 5, 6])

    return (
        <>
        {props.network.name == "Ethereum" && <div className="explore">
            <h1 className="e-title">explore</h1>
            <ul className="e-list">
                {
                    list.map((v, i) => {
                        return (
                            <>
                                <li className="e-item">
                                    <div className="e-info" onClick={() => clickEvent()}>
                                        <div className="image-item">
                                            <ExploreItem />
                                        </div>
                                        <div className="e-textbox">
                                            <div className="e-text">
                                                Aragon Governance
                                            </div>
                                            <div className="e-subtext">
                                                democracy
                                            </div>
                                        </div>
                                    </div>

                                    <div className="e-star">
                                        <Star />
                                    </div>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>}
        </>
    )
}

export default Explore;