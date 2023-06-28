import React from "react"
import { ETHIcon36, ForwardIcon, StarIcon } from "../../utils/discover"

function DTable(props: any) {
    const listRow = [1, 2, 3, 4, 5]

    return (
        <div className="d-table-pd">
            <div className="d-table-wrapper">
                <table className="d-table">
                    <thead className="dt-head">
                        <tr>
                            <th className="dt-head-col-first">
                                <div className="dt-head-sudo"></div>
                                <span>Vault</span>
                            </th>

                            <th className="dt-head-col">
                                <div className="dt-head-sudo"></div>
                                <span>Liquidation price</span>
                            </th>

                            <th className="dt-head-col">
                                <div className="dt-head-sudo"></div>
                                <span>Next OSM price</span>
                            </th>

                            <th className="dt-head-col">
                                <div className="dt-head-sudo"></div>
                                <span>Max liquidation amount</span>
                            </th>

                            <th className="dt-head-col">
                                <div className="dt-head-sudo"></div>
                                <span>Status</span>
                            </th>

                            <th className="dt-head-col">
                                <div className="dt-head-sudo"></div>
                                <span></span>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="dt-body">
                        {
                            listRow.map((r: any) => {
                                return <tr className="dt-body-row">
                                    <td className="dt-body-col">
                                        <div className="col-1-box">
                                            <button className="c1-btn">
                                                <StarIcon />
                                            </button>
                                            <div className="c1-icon-box">
                                                <ETHIcon36 />
                                            </div>
                                            <div className="c1-text-box">
                                                <span className="c1-text-1">eth</span>
                                                <span className="c1-text-2">Position #30040</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="dt-body-col al-right">
                                        $1,605.05
                                    </td>

                                    <td className="dt-body-col al-right">
                                        $1,639.81
                                    </td>

                                    <td className="dt-body-col al-right">
                                        $99,954.30
                                    </td>

                                    <td className="dt-body-col al-right">
                                        <span className="status-item">
                                            0.12% until liquidation
                                        </span>
                                    </td>

                                    <td className="dt-body-col al-right">
                                        <div className="col-last">
                                            <a href="#" className="a-view">
                                                <button>
                                                    View
                                                </button>
                                            </a>
                                            <a href="#" className="a-for">
                                                <button>
                                                    <ForwardIcon />
                                                </button>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

                <div className="tablet-table-pd">
                    <ul className="tablet-list">
                        {
                            listRow.map((r: any) => {
                                return <li className="tl-item">
                                    <ul className="tli-list">
                                        <li className="tli-list-item">
                                            <div className="tli-head-row">
                                                <button className="c1-btn">
                                                    <StarIcon />
                                                </button>
                                                <div className="c1-icon-box">
                                                    <ETHIcon36 />
                                                </div>
                                                <div className="c1-text-box">
                                                    <span className="c1-text-1">eth</span>
                                                    <span className="c1-text-2">Position #30040</span>
                                                </div>
                                            </div>
                                        </li>
    
                                        <li className="tli-row">
                                            <div>
                                                <p>Liquidation price</p>
                                            $1,605.05
                                            </div>
                                        </li>
    
                                        <li className="tli-row">
                                            <div>
                                                <p>Next OSM price</p>
                                            $1,639.81
                                            </div>
                                        </li>
    
                                        <li className="tli-row">
                                            <div>
                                                <p>Max liquidation amount</p>
                                            $99,954.30
                                            </div>
                                        </li>
    
                                        <li className="tli-row">
                                            <div>
                                                <p>Status</p>
                                                <span className="status-item">
                                                0.12% until liquidation
                                                </span>
                                            </div>
                                        </li>

                                        <li className="tli-row last-row ">
                                            <div className="tli-last-item">
                                                <a href="#" className="a-view grow">
                                                    <button>
                                                    View
                                                    </button>
                                                </a>
                                                <a href="#" className="a-for">
                                                    <button>
                                                        <ForwardIcon />
                                                    </button>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DTable