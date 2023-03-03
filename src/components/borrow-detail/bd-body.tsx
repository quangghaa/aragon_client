import React from "react";
import { ethers, Signer } from "ethers";
import { ContractFactory } from "ethers";

import {
  QuestionIcon,
  ResetIcon,
  SmallArrowIcon,
  SwapIcon,
} from "../../utils/borrow-detail";

import DssProxyActionAbi from "../../backend/dai/liquidation-auction-module/DssProxyActions.sol/DssProxyActions.json";
import GemJoinAbi from "../../backend/dai/liquidation-auction-module/join.sol/GemJoin.json";
import VatAddress from "../../backend/address/Vat-address.json";
import BatAdress from "../../backend/address/BAT-address.json";
import BatAbi from "../../backend/dai/liquidation-auction-module/token.sol/DSToken.json";
import CDPManagerAddress from "../../backend/address/DssCdpManager-address.json";
import JugAddress from "../../backend/address/Jug-address.json";
import DaiJoinAddress from "../../backend/address/DAI-address.json";
import MedianAbi from "../../backend/dai/oracle-module/median.sol/Median.json";
import MedianAddress from "../../backend/address/Median-address.json";
declare global {
  interface Window {
    ethereum: any;
  }
}
const privateKey =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const node_provider = new ethers.providers.JsonRpcProvider(
  "http://127.0.0.1:8545/"
);
const contractOwner = new ethers.Wallet(privateKey, node_provider);

function BDBody(props: any) {
  const openLockGemAndDraw = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();
    console.log("signer", signer);
    const DssProxyAction = new ContractFactory(
      DssProxyActionAbi.abi,
      DssProxyActionAbi.bytecode,
      signer
    );
    const dssProxyAction = await DssProxyAction.deploy();

    //Get
    const gemJoins = new ContractFactory(
      GemJoinAbi.abi,
      GemJoinAbi.bytecode,
      contractOwner
    );
    const median = new ethers.Contract(
      MedianAddress.address,
      MedianAbi.abi,
      signer
    );
    const priceType = await median.getWat();
    const gemJoin = await gemJoins.deploy(
      VatAddress.address,
      priceType,
      BatAdress.address
    );
    console.log("GemJoin deploy at:", gemJoin.address);

    const bat = new ethers.Contract(BatAdress.address, BatAbi.abi, signer);

    //Approve for DssProxy action permission transfer BAT
    await bat.approve_max(dssProxyAction.address);

    //Lock 1.5 BAT and draw Dai
    await dssProxyAction.openLockGemAndDraw(
      CDPManagerAddress.address,
      JugAddress.address,
      gemJoin.address,
      DaiJoinAddress.address,
      priceType,
      ethers.utils.parseEther("1.5"),
      ethers.utils.parseEther("400"),
      true
    );
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
                  <div className="dl-a">Deposit ETH</div>
                </div>

                <div className="dep-content">
                  <div className="dc-a">
                    <input
                      className="dc-a-input"
                      type="number"
                      placeholder="0 ETH"
                    />
                    <div className="dc-a-sub">~ 3,272.40 USD</div>
                  </div>
                  <div className="dc-b">
                    <SwapIcon />
                  </div>
                </div>
              </div>

              <div className="noti-wrapper">
                <div className="noti">
                  You cannot deposit more collateral than the amount in your
                  wallet
                </div>
              </div>

              <div className="gen-wrapper">
                <div className="gen-label">
                  <div className="gl-a">Generate DAI</div>

                  <div className="gl-b">From 3.500.00 DAI</div>
                </div>

                <div className="gen-input-wrapper">
                  <input
                    className="gen-input"
                    type="text"
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
