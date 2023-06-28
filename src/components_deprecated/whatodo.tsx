import React from "react"
import { HomeImg1, HomeImg2, HomeImg3 } from "../utils/image"

function WhatTodo() {
    return (
        <>
            <div className="what-todo">
                <div className="todo-item">
                    <div className="todo-img-box">
                        <HomeImg1 />
                    </div>
                    <p className="todo-name">Vote</p>
                </div>

                <div className="todo-item">
                    <div className="todo-img-box">
                        <HomeImg2 />
                    </div>
                    <p className="todo-name">Check Finance</p>
                </div>

                <div className="todo-item">
                    <div className="todo-img-box">
                        <HomeImg3 />
                    </div>
                    <p className="todo-name">New Payment</p>
                </div>

            </div>
        </>
    )
}

export default WhatTodo