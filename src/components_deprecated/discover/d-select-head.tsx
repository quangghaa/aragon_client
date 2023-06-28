import React, { useState } from "react"
import { ColorETHIcon } from "../../utils/borrow-detail"
import { CheckIcon } from "../../utils/discover"

interface SelectItem {
    id: number,
    checked: number,
    icon: string,
    name: string,
}

function DSelectHead(props: any) {
    const [selectToken, setSelectToken] = useState([
        {
            id: 1,
            checked: 0,
            icon:"",
            name: "ETH"
        },
        {
            id: 2,
            checked: 1,
            icon:"",
            name: "WBTC"
        },
        {
            id: 3,
            checked: 0,
            icon:"",
            name: "MANA"
        },
        {
            id: 4,
            checked: 0,
            icon:"",
            name: "LINK"
        }
    ])

    const [selectSize, setSelectSize] = useState([
        {
            id: 1,
            checked: 0,
            icon:"",
            name: "Under $100,000"
        },
        {
            id: 2,
            checked: 0,
            icon:"",
            name: "$100,000 - $250,000"
        },
        {
            id: 3,
            checked: 0,
            icon:"",
            name: "$250,000 - $500,000"
        },
        {
            id: 4,
            checked: 0,
            icon:"",
            name: "$500,000 - $1,000,000"
        }
    ])

    const [idList, setIdList] = useState(["l1", "l2"])

    function checkItemClick(e: any, id: any, listId: any) {
        e.stopPropagation()
        let targetList = [] as any[]
        switch (listId) {
            case idList[0]:
                targetList = selectToken
                targetList.forEach((s: SelectItem) => {
                    if (s.id == id) {
                        if (s.checked == 0) {
                            s.checked = 1
                            setSelectToken(Object.assign([], selectToken))
                        } else {
                            s.checked = 0
                            setSelectToken(Object.assign([], selectToken))
                        }
                    }
                })
                break
            case idList[1]:
                targetList = selectSize

                targetList.forEach((s: SelectItem) => {
                    if (s.id == id) {
                        if (s.checked == 0) {
                            s.checked = 1
                            setSelectSize(Object.assign([], selectSize))
                        } else {
                            s.checked = 0
                            setSelectSize(Object.assign([], selectSize))
                        }
                    }
                })
                break
            default: 
                break
        }

        
    }

    function currentSelected(listId: any) {
        let count = 0
        let lastSelectedName = ""
        let targetList

        switch (listId) {
            case idList[0]:
                targetList = selectToken
                break
            case idList[1]:
                targetList = selectSize
                break
            default:
                break
        }

        if (targetList == undefined) {
            console.log("target list undefined")
            return
        }
        targetList.forEach((s: any) => {
            if (s.checked != 0) {
                count++
                lastSelectedName = s.name
            }
        })

        const values = ["All assets", "Selected assets: "]
        switch (count) {
            case 0: {
                return values[0]
            }
            case 1: {
                return lastSelectedName
            }
            default: {
                return values[1] + count
            }
        }
    }

    function showList(listId: any) {
        const id = (document.getElementById(listId)) as HTMLElement
        if (id != null && !id.classList.contains("show-ds-list")) {
            id.classList.add("show-ds-list")
        } else {
            id.classList.remove("show-ds-list")
        }
    }

    function hideList(listId: any) {
        const id = (document.getElementById(listId)) as HTMLElement
        if (id != null && id.classList.contains("show-ds-list")) {
            id.classList.remove("show-ds-list")
        }
    }


    function showSelect(e: any, listId: string) {
        e.stopPropagation()
        showList(listId)
        idList.forEach((i: any) => {
            if (i != listId) {
                hideList(i)
            }
        })
    }

    return (
        <div className="d-select-head-pd">
            <div className="d-select-head">
                <div className="sh-item" onClick={(e: any) => showSelect(e, idList[0])}>
                    <span className="sh-item-a">
                        <span className="sh-icon-box">
                            <ColorETHIcon />
                        </span>
                        {currentSelected(idList[0])}
                        <span className="sh-down-icon">

                        </span>
                    </span>

                    <ul id={idList[0]} className="ds-list">
                        <li className="ds-item-head">
                            Clear selection
                        </li>
                        {
                            selectToken.map((s: any) => {
                                return <li className="ds-item" onClick={(e: any) => checkItemClick(e, s.id, idList[0])}>
                                    <div className="checkbox">
                                        {s.checked != 0 ? <CheckIcon /> : <></>}
                                    </div>
        
                                    <div className="token-icon">
                                        <ColorETHIcon />
                                    </div>
        
                                    {s.name}
                                </li>
                            })
                        }
                    </ul>
                </div>
                
                <div className="sh-item" onClick={(e: any) => showSelect(e, idList[1])}>
                    <span className="sh-item-a">
                        <span className="sh-icon-box">
                            <ColorETHIcon />
                        </span>
                        {currentSelected(idList[1])}
                        <span className="sh-down-icon">

                        </span>
                    </span>

                    <ul id={idList[1]} className="ds-list">
                        <li className="ds-item-head">
                            Clear selection
                        </li>
                        {
                            selectSize.map((s: any) => {
                                return <li className="ds-item" onClick={(e: any) => checkItemClick(e, s.id, idList[1])}>
                                    <div className="checkbox">
                                        {s.checked != 0 ? <CheckIcon /> : <></>}
                                    </div>
        
                                    {/* <div className="token-icon">
                                        <ColorETHIcon />
                                    </div> */}
        
                                    {s.name}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DSelectHead