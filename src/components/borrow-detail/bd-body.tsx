import React, { useState } from "react";
import { ethers, Signer } from "ethers";
import { ContractFactory } from "ethers";

import {
  QuestionIcon,
  ResetIcon,
  SmallArrowIcon,
  SwapIcon,
} from "../../utils/borrow-detail";

import DssProxyActionAbi from "../../abis/dai/liquidation-auction-module/DssProxyActions.sol/DssProxyActions.json";
import VatAddress from "../../abis/Vat-address.json";
import BatAdress from "../../abis/BAT-address.json";
import BatAbi from "../../abis/BAT.json";
import VatAbi from "../../abis/Vat.json"
import CDPManagerAddress from "../../abis/DssCdpManager-address.json";
import JugAddress from "../../abis/Jug-address.json";
import DaiJoinAddress from "../../abis/DaiJoin-address.json";
import MedianAbi from "../../abis/Median.json";
import MedianAddress from "../../abis/Median-address.json";
import { deployGemJoinContract, requestAuth, requestFund } from "../../apis/api";
declare global {
  interface Window {
    ethereum: any;
  }
}
function ConvertToNumberDAI(NumberFromContract : string){
  let FinnalNum : any=0;
  let StringLength : any= NumberFromContract.length-27;
  for(let i =0 ;i<StringLength;i++){
    FinnalNum = FinnalNum*10 + (Number(NumberFromContract[i])-0)
  }
  return FinnalNum;
}
function ConvertToNumberBAT (NumberFromContract : string){
  let FinnalNum : any=0;
  let StringLength : any= NumberFromContract.length-18;
  for(let i =0 ;i<StringLength;i++){
    FinnalNum = FinnalNum*10 + (Number(NumberFromContract[i])-0)
  }
  return FinnalNum;
}

function BDBody(props: any) {
  let CheckFund = props.MyCheckFund;
  let FundAmount = ConvertToNumberBAT(CheckFund);
  const [ETHInput , setETHInput] = useState('');
    const [GenDAIInput , setGenDAIInput] = useState('');
    const [CheckAmountDAIGen , setCheckAmountDAIGen] = useState(false);
    const changeETH = (event: React.ChangeEvent<HTMLInputElement>)  => {
      setETHInput(event.target.value)
    }
    const changeDAI = (event: React.ChangeEvent<HTMLInputElement>)  => {
      setGenDAIInput(event.target.value)
    }
  const openLockGemAndDraw = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    console.log("signer", signerAddress);
    const vat = new ethers.Contract(VatAddress.address,VatAbi.abi,signer);
    //Get Proxy contract from abi and bytecode
    const DssProxyAction = new ContractFactory(
      DssProxyActionAbi.abi,
      DssProxyActionAbi.bytecode,
      signer
    );
    //Signer deploy Proxy contract
    const median = new ethers.Contract(
      MedianAddress.address,
      MedianAbi.abi,
      signer
    );
    const priceType = await median.getWat();
    let spotPrice = await vat.getIlkSpotPrice(priceType);
    console.log("spot price", ConvertToNumberDAI(spotPrice.toString()));
    let TempVar : number = ConvertToNumberDAI(spotPrice.toString());
    if(parseInt(ETHInput,10)*TempVar < Number(GenDAIInput)){
      setCheckAmountDAIGen(true);
    }else if(CheckFund == "fund failed" || CheckFund==""){
      console.log("error")
      alert("please fund BAT from contract owner");
       //Do something PopUp error
    }else if(FundAmount<parseInt(ETHInput,10)){
      //Do something PopUp error
      console.log("error")
      alert("you have deposit more BAT than you have");
    }else{
      setCheckAmountDAIGen(false);
      const dssProxyAction = await DssProxyAction.deploy();
      console.log("dssProxy Address", dssProxyAction.address);
      console.log("continued")
    //Deploy GemJoin by contract owner(must done in Backend)
    //Send DeployGem params to Backend
    const deployGemJoinRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vatAddress: VatAddress.address,
        priceType: priceType,
        batAddress: BatAdress.address,
      }),
    };
    const gemJoinAddress = await deployGemJoinContract(deployGemJoinRequest);
    console.log("gemAddress", gemJoinAddress);
    //ToDo: switch case for each GemToken
    //For simplicity hardFix gem is Bat Token
    //Get Deployed Bat Contract from abi and Address
    const bat = new ethers.Contract(BatAdress.address, BatAbi.abi, signer);
    //Approve for DssProxy action permission transfer BAT
    await bat.approve_max(dssProxyAction.address);
    //Auth for signer permission
    const authRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requester: signerAddress,
        permission: "root-user",
      }),
    };

    const authResult=await requestAuth(authRequest);
    // const fundValue = ConvertToNumberBAT(authResult);
    console.log("auth result",authResult)

    if(authResult=="auth ok"){
//ToDo: move request fund to another flow (must done before Lock gem and draw Dai)
    //Contract owner mint Bat To signer(must done in BackEnd)
    //Send Request Fund to Backend
    //ToDO: Check account balance must greater than Lock Amount Before Lock
    //ToDo: Check amount Dai Draw is available compare to liquidation ratio

    //ToDo: get number Bat and Dai From text field
    //Lock 1.5 BAT and draw Dai
    console.log("This is BAT input " , ETHInput ,"This is GEN DAI input ", GenDAIInput, "this is type of value ", typeof(ETHInput));
    await dssProxyAction.openLockGemAndDraw(
      CDPManagerAddress.address,
      JugAddress.address,
      gemJoinAddress,
      DaiJoinAddress.address,
      priceType,
      ethers.utils.parseEther(ETHInput),
      ethers.utils.parseEther(GenDAIInput),
      true
    );
  }

  }
  };
  return (
    <div className="bd-body-wrapper">
      <div className="bd-overview">
        <div className="o-head">
          <div className="o-head-text">
            <p>Overview</p>
          </div>
        </div>
        <div className="o-body-pd">
          <div className="o-body">
            <div className="ob-item">
              <h3>
                Liquidation Price
                <div className="qs-icon-box">
                  <QuestionIcon />
                </div>
              </h3>

              <p>$0.00</p>

              <div className="calculate">
                <p>$0.00 after</p>
              </div>
            </div>

            <div className="ob-item">
              <h3>
                Collateralization Ratio
                <div className="qs-icon-box">
                  <QuestionIcon />
                </div>
              </h3>

              <p>$0.00</p>

              <div className="calculate">
                <p>$0.00 after</p>
              </div>
            </div>

            <div className="ob-item">
              <h3>
                Collateral Locked
                <div className="qs-icon-box">
                  <QuestionIcon />
                </div>
              </h3>

              <p>$0.00</p>

              <div className="calculate">
                <p>$0.00 after</p>
              </div>
            </div>
          </div>
        </div>

        <div className="o-foot">
          <ul className="of-list">
            <li className="of-item">
              <div className="of-label">Vault Dai Debt</div>
              <p className="of-value">0.00000 DAI</p>
              <div className="calculate">
                <p>0.00000 DAI after</p>
              </div>
            </li>

            <li className="of-item">
              <div className="of-label">Available to Withdraw</div>
              <p className="of-value">0.00000 ETH</p>
              <div className="calculate">
                <p>0.00000 ETH after</p>
              </div>
            </li>

            <li className="of-item">
              <div className="of-label">Available to Generate</div>
              <p className="of-value">0.00000 DAI</p>
              <div className="calculate">
                <p>0.00000 DAI after</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bd-configure-wrapper">
        <div className="bd-configure">
          <div className="o-head">
            <div className="o-head-text">
              <p>Configure your Vault</p>
            </div>
          </div>

          <div className="c-body-pd">
            <div className="c-body">
              <div className="deposit">
                <div className="dep-label">
                  <div className="dl-a">Deposit BAT</div>
                </div>

                <div className="dep-content">
                  <div className="dc-a">
                    <input
                      className="dc-a-input"
                      type="number"
                      id="ETH-input"
                     onChange={changeETH}
                      placeholder="0 ETH"
                    />
                    <div className="dc-a-sub">~ 3,272.40 USD</div>
                  </div>
                  <div className="dc-b">
                    <SwapIcon />
                  </div>
                </div>
              </div>

              {CheckAmountDAIGen ? <div className="noti-wrapper">
                <div className="noti">
                  {/* You cannot deposit more collateral than the amount in your
                  wallet */}
                  You cannot Withdraw more than limit.
                </div>
              </div> : null}

              <div className="gen-wrapper">
                <div className="gen-label">
                  <div className="gl-a">Generate DAI</div>

                  <div className="gl-b">From 3.500.00 DAI</div>
                </div>

                <div className="gen-input-wrapper">
                  <input
                    className="gen-input"
                    type="text"
                    id="gen-DAI-input"
                    onChange={changeDAI}
                    placeholder="0 DAI"
                  />
                </div>
              </div>

              <div className="reset-wrapper">
                <button className="reset-btn">
                  <ResetIcon />
                  &nbsp; Reset
                </button>
              </div>

              <ul className="vc-list">
                <li className="vc-item-head">
                  <h3>Vault changes</h3>
                </li>

                <li className="vc-item">
                  <div className="vci-left">
                    <div className="vci-text">Collateral Locked</div>
                  </div>
                  <div className="vci-right-box">
                    <div className="vci-right">
                      0.00 ETH
                      <span className="small-arrow-box">
                        <SmallArrowIcon />
                      </span>
                      2.0000 ETH
                    </div>
                  </div>
                </li>

                <li className="vc-item">
                  <div className="vci-left">
                    <div className="vci-text">Collateralization Ratio</div>
                  </div>
                  <div className="vci-right-box">
                    <div className="vci-right">
                      0.00%
                      <span className="small-arrow-box">
                        <SmallArrowIcon />
                      </span>
                      0.00%
                    </div>
                  </div>
                </li>

                <li className="vc-item">
                  <div className="vci-left">
                    <div className="vci-text">Liquidation Price</div>
                  </div>
                  <div className="vci-right-box">
                    <div className="vci-right">
                      $0.00
                      <span className="small-arrow-box">
                        <SmallArrowIcon />
                      </span>
                      $0.00
                    </div>
                  </div>
                </li>

                <li className="vc-item">
                  <div className="vci-left">
                    <div className="vci-text">Vault Dai Debt</div>
                  </div>
                  <div className="vci-right-box">
                    <div className="vci-right">
                      0.00 DAI
                      <span className="small-arrow-box">
                        <SmallArrowIcon />
                      </span>
                      0.00 DAI
                    </div>
                  </div>
                </li>

                <li className="vc-item">
                  <div className="vci-left">
                    <div className="vci-text">Available to Withdraw</div>
                  </div>
                  <div className="vci-right-box">
                    <div className="vci-right">
                      0.00 ETH
                      <span className="small-arrow-box">
                        <SmallArrowIcon />
                      </span>
                      2.0000 ETH
                    </div>
                  </div>
                </li>

                <li className="vc-item">
                  <div className="vci-left">
                    <div className="vci-text">Available to Generate</div>
                  </div>
                  <div className="vci-right-box">
                    <div className="vci-right">
                      0.00 DAI
                      <span className="small-arrow-box">
                        <SmallArrowIcon />
                      </span>
                      1,924.94 DAI
                    </div>
                  </div>
                </li>

                <li className="vc-item">
                  <div className="vci-left">
                    <div className="vci-text">
                      Max gas fee &nbsp;
                      <QuestionIcon />
                    </div>
                  </div>
                  <div className="vci-right-box">
                    <div className="vci-right">n/a</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="c-foot">
            <button className="cf-btn" onClick={openLockGemAndDraw}>
              Setup Proxy (0/3)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BDBody;
