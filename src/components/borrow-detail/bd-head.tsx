import React, { useEffect , useState} from "react";
import { ethers, Signer } from "ethers";
import { ColorETHIcon, InfoIcon } from "../../utils/borrow-detail";
import BatAdress from "../../abis/BAT-address.json";
import BatAbi from "../../abis/BAT.json";
import VatAddress from "../../abis/Vat-address.json";
import VatAbi from "../../abis/Vat.json"
import MedianAbi from "../../abis/Median.json";
import MedianAddress from "../../abis/Median-address.json";
import { deployGemJoinContract, requestAuth, requestFund } from "../../apis/api";
function ConvertToNumberBAT (NumberFromContract : string){
    let FinnalNum : any=0;
    let StringLength : any= NumberFromContract.length-18;
    for(let i =0 ;i<StringLength;i++){
      FinnalNum = FinnalNum*10 + (Number(NumberFromContract[i])-0)
    }
    return FinnalNum;
  }
  
function BDHead(props: any) {
    let setCheckFund=props.setMyCheckFund;
    let setSpotPrice = props.setMySpotPrice;
    let setPriceType = props.setMyPriceType;
    let CheckFund = props.myCheckFund;
    const [MyBat , setMyBat] = useState(0);
    let CurrentPrice = props.MyCurrentPrice;
    let setCurrentPrice = props.setMyCurrentPrice
    const [signerAddress , setSignerAddress] =useState("");
    let myOraclePrice;
    let BATContract = props.myBATContract;
    //4 5 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
    useEffect(()=>{
        const foo = async () =>{
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // Set signer
            const signer = provider.getSigner();
            const MySignerAddress = await signer.getAddress();
            setSignerAddress(MySignerAddress);
            console.log("signer", signerAddress);
            const vat = new ethers.Contract(VatAddress.address,VatAbi.abi,signer);
            const median = new ethers.Contract(
                MedianAddress.address,
                MedianAbi.abi,
                signer
            );
            let priceType = await median.getWat();
            let spotPrice = await vat.getIlkSpotPrice(priceType);
            let newOraclePrice = await median.connect(signerAddress).peek();
            myOraclePrice = newOraclePrice[0].toString();
            setCurrentPrice(ConvertToNumberBAT(myOraclePrice));
            setPriceType(priceType);
            setSpotPrice(spotPrice);
            console.log(myOraclePrice);
        }
        foo();
    },[])
    useEffect(()=>{
        setMyBat(CheckFund)
        console.log(MyBat);
        
    },[CheckFund]);
    const RequestFund = async () =>{
        const fundRequest = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                receiver: signerAddress,
                amount: "100",
                gemAddress: BatAdress.address,
        })
    };

    const fundResult=await requestFund(fundRequest);
    console.log("fund result",fundResult); 
    setCheckFund(ConvertToNumberBAT(fundResult));
    }
    return (
        <div className="bd-head-wrapper">
            <div className="hr-1">
                <h1 className="hr1-left">
                    <div className="hr1-left-icon">
                        <ColorETHIcon />
                    </div>
                    Open ETH-C Vault
                    <div className="hr1-left-empty">

                    </div>
                </h1>

                <div className="hr1-right">
                    <div className="r-a">
                        <span className="ra-label">Current Price</span>
                        <span className="ra-value">${CurrentPrice}</span>
                    </div>

                    <div className="r-b">
                        <span className="ra-label">Next Price</span>
                        <span className="ra-value">$NaN</span>
                        <span className="rb-text">in 29 min</span>
                        <span className="rb-text">(0.00%)</span>
                    </div>
                </div>
            </div>

            <div className="hr-2">
                <div className="hr2-item-box">
                    <div className="hr2-item">
                        VaultID
                        <span>T.B.D</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

                <div className="hr2-item-box">
                    <div className="hr2-item">
                        Stability Fee
                        <span>0.50%</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

                <div className="hr2-item-box">
                    <div className="hr2-item">
                        Liquidation
                        <span>13%</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

                <div className="hr2-item-box">
                    <div className="hr2-item">
                        Min. collateral ratio
                        <span>170%</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>

                <div className="hr2-item-box">
                    <div className="hr2-item">
                        Dust Limit
                        <span>$3,500.00</span>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>
                <div className="hr2-item-box">
                    <div className="hr2-item">
                        <p>Your current BAT : {MyBat} BAT</p>
                        <div className="hr2-icon">
                            <InfoIcon />
                        </div>
                    </div>
                </div>
                <div className="fund-BAT">
                    <button className="cf-btn" onClick={RequestFund} style={{marginLeft : '40px'}}>Request Fund</button>
                </div>
                
            </div>
        </div>
    )
}

export default BDHead;