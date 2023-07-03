import React from "react"
import PrimaryButton from "../components/primary_button"
import { Card, DatePicker, Select, Space, Table } from "antd"
import TokenBalanceItem from "../components/token_balance_item"
import DefaultButton from "../components/default_button"
import { Export } from "../utils/svg-icons"
import { ColumnsType } from "antd/es/table"

// --
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
            <PrimaryButton {...{ name: "New transfer", event: () => console.log("implement me") }} />
        </div>
    )
}

// --
interface SummaryProps {
    summary: any // {token: 'eth', value1: 2.201, value2: 4111.32}[]
}
const Summary = ({ summary }: SummaryProps) => {
    let eth, dana, usdt
    summary.forEach((e: any) => {
        if (e.token === "eth") eth = e
        if (e.token === "dana") dana = e
        if (e.token === "usdt") usdt = e
    })
    return (
        <Card size="small" title="TOKEN BALANCES">
            <Space>
                {summary.map((item: any, ind: number) => (
                    <TokenBalanceItem key={ind} {...{ item: item }} />
                ))}
            </Space>
        </Card>
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
        <Space style={{ padding: "16px 0" }}>
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
    )
}

const financeTableHeadlineStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}

// -- 
interface DataType {
    key: string
    date: string
    recipient: string
    reference: string
    amount: number
}
const FinancePage = () => {
    const summary = [
        { token: "eth", value1: 2.201, value2: 4111.32 },
        { token: "dana", value1: 1000, value2: -1 },
        { token: "usdt", value1: 5000, value2: 5000 },
    ]
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
    const columns: ColumnsType<DataType> = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date"
        },
        {
            title: "Source/Recipient",
            dataIndex: "recipient",
            key: "recipient",
        },
        {
            title: "Reference",
            dataIndex: "reference",
            key: "reference",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "#",
            dataIndex: "",
            key: "",
        },
    ]
    const data: DataType[] = [
        { key: "1", date: "27-06-2023", recipient: "0x8EdA...e290", reference: "love", amount: 0.1 },
        { key: "2", date: "27-06-2023", recipient: "0x8EdA...e290", reference: "love", amount: 0.1 },
        { key: "3", date: "27-06-2023", recipient: "0x8EdA...e290", reference: "love", amount: 0.1 },
        { key: "4", date: "27-06-2023", recipient: "0x8EdA...e290", reference: "love", amount: 0.1 },
        { key: "1", date: "27-06-2023", recipient: "0x8EdA...e290", reference: "love", amount: 0.1 },
        { key: "2", date: "27-06-2023", recipient: "0x8EdA...e290", reference: "love", amount: 0.1 },
        { key: "3", date: "27-06-2023", recipient: "0x8EdA...e290", reference: "love", amount: 0.1 },
        { key: "4", date: "27-06-2023", recipient: "0x8EdA...e290", reference: "love", amount: 0.1 },
    ]

    return (
        <div className='ex-body' style={{ backgroundImage: "none", background: "rgb(249, 250, 252)" }}>
            <div className="ex-content">
                <VoteHead {...{ title: "Finance" }} />
                <Summary {...{ summary }} />
                <Card>
                    <span className="text-3xl font-bold">
                        Hello world!xx
                    </span>
                    <div style={financeTableHeadlineStyle}>
                        <span>Transfers</span>
                        <DefaultButton {...{ name: "Export", event: null, icon: <Export /> }} />
                    </div>
                    <VoteFilter {...{ filterList: filterList }} />
                    <Table columns={columns} dataSource={data} pagination={false} />
                </Card>
            </div>
        </div>
    )
}

export default FinancePage