import React from "react"

const ExploreItem = (props: any) => {
    const { image, label } = props
    return (
        <div className="todo-item">
            <div className="todo-img-box">
                {image}
            </div>
            <p className="todo-name">{label}</p>
        </div>
    )
}

export default ExploreItem