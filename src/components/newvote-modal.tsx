import React from "react";
import { Close } from "../utils/svg-icons";

function NewvoteModal() {
    return (
        <div id="vote-modal" className="vm-bg">
            <aside className="vm-content">
                <div className="vm-head">
                    <h1 className="vm-head-title">New Vote</h1>
                    <button className="vm-head-btn">
                        <Close />
                    </button>
                </div>

                <div className="vm-body">
                    <form className="vm-form">
                        <div className="question-field">
                            <label className="question-label">question <span className="required">*</span></label>
                            <input type="text" placeholder="" className="question-input" />
                        </div>

                        <section className="vn-note">
                        These votes are informative and used for signaling. They don’t have any direct repercussions on the organization.
                        </section>

                        <button className="vm-submit-btn">
                            Create new vote
                        </button>
                    </form>
                </div>
            </aside>
        </div>
    )
}

export default NewvoteModal;