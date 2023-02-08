import React from "react";
import {Logo} from "../utils/image";
import {Connect, Setting} from "../utils/svg-icons";
import ConnectForm from "./connect-form";

function Header() {
    function connectEvent(e: any) {
        e.stopPropagation();
        console.log("innce click")
        var id = (document.getElementById("wallet-list")) as HTMLSelectElement;
        id.classList.toggle("show");
    }

    window.onclick = function(event: any) {
        console.log("outer click")
        if (!event.target.matches('.connect')) {
          var dropdowns = document.getElementsByClassName("connect-form");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
    }

    return (
        <>
        <div className="header">
            <div className="logo-box">
                <Logo />
            </div>
            <div className="user-box">
                <div className="connect-box">
                    <button className="btn name">Etherum</button>
                    <button className="btn connect connect-space" onClick={e => connectEvent(e)}>
                        <span className="connect-icon"><Connect /></span>
                        Connect account
                    </button>
                </div>

                <div className="setting-box">
                    <span><Setting /></span>
                </div>
            </div>
        </div>

        <ConnectForm />
        </>
    )
}

export default Header;