import React from "react";
import eth from "../assets/borrow/maker_eth.png"
import btc from "../assets/borrow/maker_wbtc.png"

function BorrowIcon() {
    return (
        <svg style={{width:"28px"}} viewBox="0 0 32 32" display="inline-block" focusable="false" role="presentation"><path d="M16 29.3337C23.3638 29.3337 29.3334 23.3641 29.3334 16.0003C29.3334 8.63653 23.3638 2.66699 16 2.66699C8.63622 2.66699 2.66669 8.63653 2.66669 16.0003C2.66669 23.3641 8.63622 29.3337 16 29.3337Z" fill="#F4A100"></path><path d="M16.3333 8L18.6844 12.7639L23.9417 13.5279L20.1375 17.2361L21.0355 22.4721L16.3333 20L11.631 22.4721L12.529 17.2361L8.7248 13.5279L13.9821 12.7639L16.3333 8Z" fill="white"></path><defs><linearGradient id="paint0_linear_2726_31719" x1="7.83319" y1="6.50024" x2="25.3332" y2="26.5002" gradientUnits="userSpaceOnUse"><stop stop-color="#F4A100"></stop><stop offset="1" stop-color="#FF9431"></stop></linearGradient></defs></svg>
    )
}

function FeatureIcon() {
    return (
        <svg style={{width:"32px"}} viewBox="0 0 32 32" display="inline-block" focusable="false" role="presentation"><path d="M16 29.3337C23.3638 29.3337 29.3334 23.3641 29.3334 16.0003C29.3334 8.63653 23.3638 2.66699 16 2.66699C8.63622 2.66699 2.66669 8.63653 2.66669 16.0003C2.66669 23.3641 8.63622 29.3337 16 29.3337Z" fill="#F4A100"></path><path d="M16.3333 8L18.6844 12.7639L23.9417 13.5279L20.1375 17.2361L21.0355 22.4721L16.3333 20L11.631 22.4721L12.529 17.2361L8.7248 13.5279L13.9821 12.7639L16.3333 8Z" fill="white"></path><defs><linearGradient id="paint0_linear_2726_31719" x1="7.83319" y1="6.50024" x2="25.3332" y2="26.5002" gradientUnits="userSpaceOnUse"><stop stop-color="#F4A100"></stop><stop offset="1" stop-color="#FF9431"></stop></linearGradient></defs></svg>
    )
}

function ETHIcon() {
    return (
        <svg style={{width:"32px"}} viewBox="0 0 32 32" display="inline-block" focusable="false" role="presentation"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.3334 16.0003C29.3334 23.3641 23.3639 29.3337 16.0001 29.3337C8.63628 29.3337 2.66675 23.3641 2.66675 16.0003C2.66675 8.63653 8.63628 2.66699 16.0001 2.66699C23.3639 2.66699 29.3334 8.63653 29.3334 16.0003ZM10.6668 16.1487L16 19.0512L21.3333 16.1487L16 8.00033L10.6668 16.1487ZM10.6667 17.0803L16 19.9814L21.3334 17.0803L16 24.0002L10.6667 17.0803Z" fill="#787A9B"></path></svg>
    )
}

function BTCIcon() {
    return (
        <svg style={{width:"32px"}} viewBox="0 0 32 32" display="inline-block" focusable="false" role="presentation"><path d="M16 29.3332C23.3638 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.63616 2.6665 2.66663 8.63604 2.66663 15.9998C2.66663 23.3636 8.63616 29.3332 16 29.3332Z" fill="#787A9B"></path><path d="M21.3054 14.1316C21.5274 12.529 20.3978 11.6675 18.8532 11.0927L19.3542 8.92176L18.1309 8.59242L17.6431 10.7062C17.3215 10.6196 16.9912 10.5379 16.663 10.457L17.1543 8.32933L15.9317 8L15.4303 10.1702C15.1641 10.1047 14.9028 10.04 14.6491 9.97186L14.6505 9.96508L12.9634 9.51004L12.638 10.9215C12.638 10.9215 13.5457 11.1462 13.5265 11.1601C14.022 11.2937 14.1115 11.6479 14.0965 11.9287L13.5258 14.4019C13.5599 14.4113 13.6042 14.4248 13.653 14.4459C13.6122 14.435 13.5687 14.4229 13.5237 14.4113L12.7237 17.8758C12.6631 18.0384 12.5094 18.2823 12.1631 18.1897C12.1753 18.2089 11.2739 17.95 11.2739 17.95L10.6666 19.4627L12.2586 19.8914C12.5547 19.9715 12.845 20.0555 13.1307 20.1345L12.6244 22.3303L13.8463 22.6596L14.3477 20.4872C14.6815 20.585 15.0056 20.6754 15.3226 20.7604L14.823 22.9227L16.0463 23.2521L16.5526 21.0604C18.6386 21.4868 20.2072 21.3148 20.8674 19.2767C21.3995 17.6357 20.841 16.6891 19.7434 16.0719C20.5427 15.8728 21.1448 15.3048 21.3054 14.1316ZM18.5104 18.3655C18.1323 20.0065 15.5745 19.1194 14.7453 18.897L15.417 15.9879C16.2463 16.2115 18.9055 16.6541 18.5104 18.3655ZM18.8887 14.1079C18.5438 15.6006 16.4149 14.8422 15.7244 14.6563L16.3334 12.0179C17.024 12.2038 19.248 12.5508 18.8887 14.1079Z" fill="white"></path></svg>
    )
}

function ETHImg() {
    return (
        <img src={eth} alt="eth" style={{width: "146px"}} />
    )
}

function BTCImg() {
    return (
        <img src={btc} alt="btc" style={{width: "146px"}} />
    )
}

export {BorrowIcon, FeatureIcon, ETHIcon, BTCIcon, ETHImg, BTCImg};