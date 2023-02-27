import { Modal, Popover, Result, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fortmatic, Frame, Logo, Metamask, NoNotification, Portis, SettingBtn1, SettingBtn2, SettingBtn3, WalletConnect } from "../utils/image";
import { Bell, Connect, Setting } from "../utils/svg-icons";
import ConnectForm from "./connect-form";
import {Contract, ethers, Signer} from 'ethers';
import NetworkModal from "./network-modal";
import VoteFactoryAbi from "../backend/VoteFactory.json";
import VoteFactoryAddress from "../backend/VoteFactory-address.json"
import SimpleTransactionAddress from "../backend/SimpleTransaction-address.json"
import SimpleTransactionAbi from "../backend/SimpleTransaction.json"
import { text } from "stream/consumers";
import { useEthers, useEtherBalance } from "@usedapp/core";
function Header(props: any) {
    let OwnerAddress = props.ownerAddress;
    let setOwnerAddress = props.SetOwnerAddress;
    let IsOwnerAddress = props.isOwnerAddress;
    let setIsOwnerAddress = props.SetIsOwnerAddress
    const [WalletAddress , setWalletAddress] = useState('');
    const [ConnectStatus , setConnectStatus] = useState(false);
    // const [VoteFactory , setMyVoteFactory] = useState({});
    let simpleTransaction = props.SimpleTransaction
    let setMyVoteFactory= props.SetMyVoteFactory;
    let setSimpleTransaction=props.SetSimpleTransaction
    // const [simpleTransaction, setSimpleTransaction] = useState({})
    setOwnerAddress(VoteFactoryAddress.OwnerWalletAddress)
    if(WalletAddress == OwnerAddress.toLowerCase()){
        setIsOwnerAddress(true);
    }else {
        setIsOwnerAddress(false);
    }
    const ConnectMetaMask = async () =>{
        if((window as any).ethereum){
            const MetaMaskAccount = await (window as any).ethereum.request({ method: 'eth_requestAccounts' })
            // .then((accounts : string[]) => {
            //     setWalletAddress(accounts[0]);
                
            // });
            .then(HandleAccountCHange);
            
            const provider = new ethers.providers.Web3Provider((window as any).ethereum)
            const signer = provider.getSigner()
            loadContract(signer)
        }
    }
    //Handle change Account

    (window as any).ethereum.on('accountsChanged', HandleAccountCHange);

    function HandleAccountCHange (accounts : any){
        if(accounts.length == 0){
            alert("Please connect Meta Mask")
        }else if(accounts[0] !== WalletAddress){
            setWalletAddress(accounts[0]);            
            setConnectStatus(true);
        }
    }

    const loadContract = async (signer : any) =>{
        const mySimpleTransaction = new ethers.Contract(
            SimpleTransactionAddress.address,
            SimpleTransactionAbi.abi,
            signer,
          )
          setSimpleTransaction(mySimpleTransaction)
        //   const Balance = await mySimpleTransaction.Retrieve(WalletAddress);
        //   console.log(Balance);
        const myVoteFactory = new ethers.Contract(
            VoteFactoryAddress.address,
            VoteFactoryAbi.abi,
            signer
            )
            setMyVoteFactory(myVoteFactory);
            // const myBalance = await myVoteFactory.Retrieve(WalletAddress)
            // console.log(myBalance)
    }
    function connectEvent(e: any) {
        e.stopPropagation();
        console.log("connect event click")
        var id = (document.getElementById("wallet-list")) as HTMLSelectElement;
        id.classList.toggle("show");
    }

    useEffect(() => {
        console.log("DEBUG page: ", props.page)
        switch (props.page) {
            case "home":
                {
                    var id = (document.getElementById("header-id")) as HTMLSelectElement;
                    if (!id.classList.contains("h-home")) {
                        id.classList.add("h-home")
                    }
                    break;
                }
            case "explore":
                {
                    var id = (document.getElementById("header-id")) as HTMLSelectElement;
                    // if (!id.classList.contains("h-home")) {
                        id.classList.remove("h-home")
                    // }
                    // if(id.classList.contains("h-explore"))
                    break;
                }
        }
    }, [props.page])

    const navigate = useNavigate()
    function toHome() {
        props.setPage("home")
        navigate("/")
    }

    function onChange() {
        
    }

    const connectPopup = (
        <div id="wallet-list" className="ant-connect-form">
            <h1 className="cf-title">
                use account from
            </h1>
            <div className="wallet-box">
                <div className="w-item" id="enableEthereumButton" onClick={ConnectMetaMask}>
                    <Metamask />
                    <div className="w-name" >MetaMask</div>
                </div>
                <div className="w-item">
                    <Frame />
                    <div className="w-name">Frame</div>
                </div>
                <div className="w-item">
                    <Fortmatic />
                    <div className="w-name">Fortmatic</div>
                </div>
                <div className="w-item">
                    <Portis />
                    <div className="w-name">Portis</div>
                </div>
                <div className="w-item">
                    <WalletConnect />
                    <div className="w-name">WalletConnect</div>
                </div>
            </div>
        </div>
    )

    const settingPopup = (
        <div id="setting-id" className="setting-popup-wrapper">
            <h1 className="cf-title">
                global references
            </h1>
            <ul className="setting-list">
                <li className="setting-item">
                    <button className="setting-item-btn">
                        <div className="sib-content-box">
                            <div>
                                <SettingBtn1 />
                            </div>
                            <div className="sibc-text">Custom labels</div>
                        </div>
                    </button>
                </li>

                <li className="setting-item">
                    <button className="setting-item-btn">
                        <div className="sib-content-box">
                            <div>
                                <SettingBtn2 />
                            </div>
                            <div className="sibc-text">Network</div>
                        </div>
                    </button>
                </li>

                <li className="setting-item">
                    <button className="setting-item-btn">
                        <div className="sib-content-box">
                            <div>
                                <SettingBtn3 />
                            </div>
                            <div className="sibc-text">Notifications</div>
                        </div>
                    </button>
                </li>

                <li className="sib-content-box">
                    <div className="mode-row">
                        <span>Dark mode</span>
                        <Switch defaultChecked onChange={onChange} />
                    </div>
                </li>
            </ul>
            
        </div>
    )

    const bellPopup = (
        <div id="bell-id" className="setting-popup-wrapper">
            <h1 className="cf-title">
                activity
            </h1>
            <div className="bell-wrapper">
                <NoNotification />
                <div className="bell-text">
                    No activity yet!
                </div>
            </div>
        </div>
    )

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    function handleNetworkClick(n: any) {
        var name = n
        var tipe = 0

        if (n == "Goerli" || n == "Mumbai" || n == "BSC TestNet" ||
            n == "Stardust" || n == "Harmony Testnet") {
                tipe = 1
            }

        props.setNet({name: name, type: tipe})
        setIsModalOpen(false)
    }

    useEffect(() => {
        if(props.network.type == 1) {
            var id = (document.getElementById("network-btn-id")) as HTMLSelectElement;
            if (!id.classList.contains("testnet-bg")) {
                id.classList.add("testnet-bg");
            }
        }
        else {
            var id = (document.getElementById("network-btn-id")) as HTMLSelectElement;
            id.classList.remove("testnet-bg");
        }
    }, [props.network.type])

    return (
        <>
            <div id="header-id" className="header">
                <div className="logo-box">
                    <button className="logo-btn" onClick={toHome}>
                        <Logo />
                    </button>
                </div>
                <div className="user-box">
                    <div className="connect-box">
                        <button id="network-btn-id" className="btn name" onClick={showModal}>{props.network.name}</button>
                        
                        <Popover id="wl-id" placement="bottomRight" content={connectPopup} trigger="click">
                            {/* <button className="btn connect connect-space">
                                <span className="connect-icon"><Connect /></span>
                                Connect account
                            </button> */}
                            {ConnectStatus ? (<button className="btn connect connect-space">
                                <span className="connect-icon"><Connect /></span>
                                Connected : {WalletAddress}
                            </button>):(<button className="btn connect connect-space">
                                <span className="connect-icon"><Connect /></span>
                                Connect account
                            </button>)}
                        </Popover>

                    </div>

                    {props.page =="explore" && <>
                    <div className="setting-box">
                        <Popover id="setting-id" placement="bottomRight" content={settingPopup} trigger="click">
                            <button className="setting-box">
                                <span><Setting /></span>
                            </button>
                        </Popover>
                    </div>

                    <div className="setting-box">
                        <Popover id="setting-id" placement="bottomRight" content={bellPopup} trigger="click">
                            <button className="setting-box">
                                <span><Bell /></span>
                            </button>
                        </Popover>
                    </div>

                    </>}
                </div>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <NetworkModal setNetwork={handleNetworkClick} />
            </Modal>
        </>
    )
}

export default Header;