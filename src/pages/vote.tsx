import { Card, Col, DatePicker, Row, Select, Space } from "antd"
import React from "react"
import PrimaryButton from "../components/primary_button"
import VoteItem from "../components/vote_item"

interface VoteHeadProps {
    title: string
}
const voteHeadStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 0",
}
const VoteHead = ({ title }: VoteHeadProps) => {
    return (
        <div style={voteHeadStyle}>
            <span style={{ fontSize: "24px" }}>{title}</span>
            <PrimaryButton {...{ name: "New vote", event: () => console.log("implement me") }} />
        </div>
    )
}

// ---
interface VoteFilterProps {
    filterList: any // list data of selects: {id: , options: }[]
}
const { RangePicker } = DatePicker
const { Option } = Select
const VoteFilter = ({ filterList }: VoteFilterProps) => {
    return (
        <Card>
            <Space>
                {filterList.map((item: any) => {
                    return (
                        <Select key={item.id}>
                            {item.options.map((op: any, ind: number) => (
                                <Option key={item.id + "-" + ind} value={op.value}>{op.label}</Option>
                            ))}
                        </Select>
                    )
                })}
                <RangePicker />
            </Space>
        </Card>
    )
}

// -- 
const VotePage = () => {
    const filterList = [
        {
            id: 1,
            options: [{ value: 1, label: "Label A" }, { value: 2, label: "Label B" }]
        },
        {
            id: 2,
            options: [{ value: 1, label: "Label A" }, { value: 2, label: "Label B" }]
        },
        {
            id: 3,
            options: [{ value: 1, label: "Label A" }, { value: 2, label: "Label B" }]
        },
    ]
    const itemList = []
    for (let i = 1; i <= 16; i++) itemList.push({ index: i, label: "My name" })

    return (
        <div className='ex-body' style={{ backgroundImage: "none", background: "rgb(249, 250, 252)" }}>
            <div className="ex-content">
                <VoteHead {...{ title: "Voting" }} />
                <VoteFilter {...{ filterList: filterList }} />
                <div>Closed votes <span>40</span></div>
                <Row gutter={[16, 16]}>
                    {itemList.map((item: any) => (
                        <Col span={6}>
                            <VoteItem key={item.index} item={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default VotePage