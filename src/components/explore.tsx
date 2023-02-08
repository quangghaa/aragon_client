import React from "react";
import { useNavigate } from "react-router-dom";
import { ExploreItem } from "../utils/image";
import { Star } from "../utils/svg-icons";

function Explore() {
    const navigate = useNavigate()

    function clickEvent() {
        navigate("/explore1")
    }

    return (
        <div className="explore">
            <h1 className="e-title">explore</h1>
            <ul className="e-list">
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

                <li className="e-item">
                    <div className="e-info">
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

            </ul>
        </div>
    )
}

export default Explore;