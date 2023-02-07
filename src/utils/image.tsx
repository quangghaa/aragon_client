import React from "react";
import logo from "../assets/logo.png"
import create from "../assets/main1.png"
import open from "../assets/main2.png"
import eItem from "../assets/e-item1.svg"
import meta from "../assets/metamask.png"
import frame from "../assets/frame.png"
import fort from "../assets/fortmatic.svg"
import port from "../assets/portis.svg"
import wc from "../assets/walletconnect.png"

function Logo() {
    return (
        <img src={logo} alt="aragon" className="logo" />
    )
}

function ImageCreate() {
    return (
        <img src={create} alt="create" className="image-style" />
    )
}

function ImageOpen() {
    return (
        <img src={open} alt="open" className="image-style" />
    )
}

function ExploreItem() {
    return (
        <img src={eItem} alt="e-item" className="e-image-style" />
    )
}

function Metamask() {
    return (
        <img src={meta} alt="meta" className="wallet-style" />
    )
}

function Frame() {
    return (
        <img src={frame} alt="frame" className="wallet-style" />
    )
}

function Fortmatic() {
    return (
        <img src={fort} alt="fortmatic" className="wallet-style" />
    )
}

function Portis() {
    return (
        <img src={port} alt="portis" className="wallet-style" />
    )
}

function WalletConnect() {
    return (
        <img src={wc} alt="wallet-connect" className="wallet-style" />
    )
}



export {Logo, ImageCreate, ImageOpen, ExploreItem,
    Metamask, Frame, Fortmatic, Portis, WalletConnect};