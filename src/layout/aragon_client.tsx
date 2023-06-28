import { Layout } from "antd"
import React, { useEffect, useRef, useState } from "react"
import Header from "../components_deprecated/header"
import Sider from "antd/es/layout/Sider"
import { Outlet } from "react-router-dom"
import Navigation from "../components_deprecated/navigation"
import MainMenu from "../components/menu"

interface Network {
    name: string,
    type: 0,
}
const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
}
const siderStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    width: "256px",
    // height: '100%'
}
const AragonClient = () => {
    const [network, setNetwork] = useState({ name: "Ethereum", type: 0 } as Network)
    const [page, setPage] = useState("home")
    const [OwnerAddress, setOwnerAddress] = useState("")
    const [IsOwnerAddress, setIsOwnerAddress] = useState(false)
    const [VoteFactory, setMyVoteFactory] = useState({})
    useEffect(() => {
        const aId = (document.getElementById("app-id")) as HTMLElement
        if (aId != null && page == "borrow") {
            if (!aId.classList.contains("bg-white")) {
                aId.classList.add("bg-white")
            }
        } else {
            if (aId != null && aId.classList.contains("bg-white")) {
                aId.classList.remove("bg-white")
            }
        }
    }, [page])

    const [CheckLogIn, setCheckLogIn] = useState(false)
    const [polls, setPolls] = useState([] as any[])
    const [Voted, setVoted] = useState(false)
    const [WalletAddress, setWalletAddress] = useState("")
    const i = useRef(0)
    const m = useRef(0)
    return (
        <Layout>
            {/* <Header style={headerStyle}>Header</Header> */}
            <Header
                page={page}
                setPage={setPage}
                network={network}
                setNet={setNetwork}
                voteFactory={VoteFactory}
                SetMyVoteFactory={setMyVoteFactory}
                ownerAddress={OwnerAddress}
                SetOwnerAddress={setOwnerAddress}
                isOwnerAddress={IsOwnerAddress}
                SetIsOwnerAddress={setIsOwnerAddress}
                SetCheckLogIn={setCheckLogIn}
                setIsVoted={setVoted}
                MyWalletAddress={WalletAddress}
                SetMyWalletAddress={setWalletAddress}
            />
            <Layout hasSider>
                <Sider style={siderStyle}>
                    {/* <Navigation /> */}
                    <MainMenu />
                </Sider>
                <Outlet />
            </Layout>
        </Layout>
    )
}

export default AragonClient