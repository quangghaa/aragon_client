import { type } from "os"
import React from "react"
import { Close } from "../utils/svg-icons"

function NewvoteModal(props : any) {
    const question = props.finnalQuestion
    const setQuestion = props.FinnalSetQuestion
    const Questioncheck = props.setCheckQuestion
    const MyPoll = props.FinnalCreatePoll
    const setCheckNewPoll = props.SetMyCheckNewPoll
    const PollID = props.MyPollID
    const SetPollID = props.SetMyPollID
    const setMyNumberOfVoter = props.SetMyNumberOfVotes
    const myInit : string = "0" + PollID
    const CatchQuestion = async (e:any) =>{
        e.preventDefault()
        const message : any = document.getElementById("vote question") as HTMLInputElement | null
        if (message.value != null) {
            Questioncheck(true)
            setQuestion(message.value)
            // console.log(MyPoll);
            await MyPoll.createPoll(myInit, message.value)
            setCheckNewPoll(true)
            SetPollID(PollID + 1)
            console.log(PollID)
            console.log(message.value)
            setMyNumberOfVoter(0)
        }
    }
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
                            <input type="text" placeholder="" className="question-input" id="vote question"/>
                        </div>

                        <section className="vn-note">
                        These votes are informative and used for signaling. They don’t have any direct repercussions on the organization.
                        </section>
                        <button className="vm-submit-btn" onClick={CatchQuestion}>
                            Create new vote
                        </button>
                    </form>
                </div>
            </aside>
        </div>
    )
}

export default NewvoteModal