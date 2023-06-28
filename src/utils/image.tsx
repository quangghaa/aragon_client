import React from "react"
import logo from "../assets/logo.png"
import create from "../assets/main1.png"
import open from "../assets/main2.png"
import eItem from "../assets/e-item1.svg"
import meta from "../assets/metamask.png"
import frame from "../assets/frame.png"
import fort from "../assets/fortmatic.svg"
import port from "../assets/portis.svg"
import wc from "../assets/walletconnect.png"
import navhome from "../assets/home.svg"
import navvote from "../assets/voteicon.svg"
import finance from "../assets/calendar.svg"
import perm from "../assets/perms.svg"
import app from "../assets/apps.svg"
import org from "../assets/navsetting.svg"
import homeimg1 from "../assets/homeimg1.png"
import homeimg2 from "../assets/homeimg2.png"
import homeimg3 from "../assets/homeimg3.png"
import walletProvider from "../assets/wallet-provider.png"
import eth from "../assets/eth.png"
import usdt from "../assets/usdt.png"
import permVoting from "../assets/perm-voting.svg"
import permFinance from "../assets/perm-finance.svg"
import permVault from "../assets/perm-vault.svg"
import settingBtn1 from "../assets/setting-btn-1.svg"
import settingBtn2 from "../assets/setting-btn-1.svg"
import settingBtn3 from "../assets/setting-btn-1.svg"
import noNotification from "../assets/no-notification.png"


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

function NavHomeIcon() {
    return (
        <img src={navhome} alt="home-icon" className="nav-icon-style" />
    )
}

function NavVoteIcon() {
    return (
        <img src={navvote} alt="vote-icon" className="nav-icon-style" />
    )
}

function FinanceIcon() {
    return (
        <img src={finance} alt="finance-icon" className="nav-icon-style" />
    )
}

function PermissionIcon() {
    return (
        <img src={perm} alt="perm-icon" className="nav-icon-style" />
    )
}

function NavAppIcon() {
    return (
        <img src={app} alt="app-icon" className="nav-icon-style" />
    )
}

function NavOrgIcon() {
    return (
        <img src={org} alt="org-icon" className="nav-icon-style" />
    )
}

function HomeImg1() {
    return (
        <img src={homeimg1} alt="home-img-1" className="home-img-style" />
    )
}

function HomeImg2() {
    return (
        <img src={homeimg2} alt="home-img-2" className="home-img-style" />
    )
}

function HomeImg3() {
    return (
        <img src={homeimg3} alt="home-img-3" className="home-img-style" />
    )
}

function WalletProvider() {
    return (
        <img src={walletProvider} alt="wallet-provider" className="wallet-provider-style" />
    )
}

function ETH() {
    return (
        <img src={eth} alt="eth" className="ft-style" />
    )
}

function USDT() {
    return (
        <img src={usdt} alt="usdt" className="ft-style" />
    )
}

function PermVoting() {
    return (
        <img src={permVoting} alt="perm-voting" className="perm-icon-style" />
    )
}

function PermFinance() {
    return (
        <img src={permFinance} alt="perm-finance" className="perm-icon-style" />
    )
}

function PermVault() {
    return (
        <img src={permVault} alt="perm-vault" className="perm-icon-style" />
    )
}

function SettingBtn1() {
    return (
        <img src={settingBtn1} alt="setting-btn-1" className="setting-btn-style" />
    )
}

function CustomLabelBtn() {
    return (
        <img src={settingBtn1} alt="custom-label-btn" width={20} />
    )
}

function SettingBtn2() {
    return (
        <img src={settingBtn2} alt="setting-btn-2" className="setting-btn-style" />
    )
}

function SettingBtn3() {
    return (
        <img src={settingBtn3} alt="setting-btn-3" className="setting-btn-style" />
    )
}

function NoNotification() {
    return (
        <img src={noNotification} alt="no-notification" className="no-notification-style" />
    )
}


export {
    Logo, ImageCreate, ImageOpen, ExploreItem,
    Metamask, Frame, Fortmatic, Portis, WalletConnect,
    NavHomeIcon, NavVoteIcon, FinanceIcon, PermissionIcon, NavAppIcon, NavOrgIcon,
    HomeImg1, HomeImg2, HomeImg3,
    WalletProvider, ETH, USDT,
    PermVoting, PermFinance, PermVault,
    SettingBtn1, SettingBtn2, SettingBtn3,
    NoNotification, CustomLabelBtn
}