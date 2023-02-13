import React from "react";
import { Close, Down } from "../utils/svg-icons";

function NewPermModal() {
    function selectClick(e: any) {
        e.stopPropagation();
        console.log("btn click")
    }

    return (
        <div id="perm-modal" className="vm-bg">
            <aside className="vm-content">
                <div className="vm-head">
                    <h1 className="vm-head-title">Add Permission</h1>
                    <button className="vm-head-btn">
                        <Close />
                    </button>
                </div>

                <div className="vm-body">
                    <form className="vm-form">
                        <div className="question-field">
                            <label className="question-label">on app <span className="required">*</span></label>
                            <button type="button" className="tm-select" onClick={(e: any) => selectClick(e)}>
                                <div className="tm-select-text">Select an app</div>
                                <span className="tm-select-icon"><Down /></span>
                            </button>
                        </div>

                        <div className="question-field">
                            <label className="question-label">assign to entity <span className="required">*</span></label>
                            <button type="button" className="tm-select" onClick={(e: any) => selectClick(e)}>
                                <div className="tm-select-text">Select an entity</div>
                                <span className="tm-select-icon"><Down /></span>
                            </button>
                        </div>

                        <button className="vm-submit-btn">
                            Add permission
                        </button>

                        <section className="vn-note">
                            <p>ADDING THE PERMISSION MIGHT CREATE A VOTE</p>
                            <p>The Voting app will automatically create a new vote if granting the permission requires a vote to pass.</p>
                        </section>

                        
                    </form>
                </div>
            </aside>
        </div>
    )
}

export default NewPermModal;