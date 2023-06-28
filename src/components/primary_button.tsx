import { Button } from "antd"
import React from "react"

// ---
interface PrimaryButtonProps {
    name: string
    event: any
}
const PrimaryButton = ({ name, event }: PrimaryButtonProps) => {
    return (
        <Button onClick={event} type="primary">
            {name}
        </Button>
    )
}

export default PrimaryButton