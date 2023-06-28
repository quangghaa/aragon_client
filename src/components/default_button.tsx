import { Button } from "antd"
import React, { ReactNode } from "react"

// ---
interface DefaultButtonProps {
    name: string
    icon?: ReactNode
    event: any
}
const DefaultButton = ({ name, event, icon }: DefaultButtonProps) => {
    return (
        <Button onClick={event} type="default">
            {icon && <span>{icon}</span>}
            <span>{name}</span>
        </Button>
    )
}

export default DefaultButton