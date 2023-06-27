import React from "react";
import { Down } from "../utils/svg-icons";
import { DatePicker, Select, Space , Button, Modal , Alert , Form , InputNumber} from 'antd';
import {VButtonPopup} from "./v-btn-popup";
import NewvoteModal from "./newvote-modal";
import { useState } from "react";
function VHeader(props : any) {
    let checkOwner = props.CheckOwner;
    const { RangePicker } = DatePicker;
    let MyQuestion = props.Question;
    let MySetQuestion = props.SetQuestion;
    let PollID = props.MyPollID;
    let SetPollID = props.SetMyPollID;
    let setMyNumberOfQuestion = props.setNumberOfVoter;
    const [QuestionExist , SetQuestionExist] = useState(false);
    const [OpenModal , setOpenModal] = useState(false);
    const [VoterCheck , setVoterCheck] = useState(false);
    const [MyNumberOfVoter , setMyNumberOfVoter] =useState(0);
    const VoteFactoryContract = props.VoteFactory;
    const SetCheckNewPoll = props.SetIsNewPoll;
    const NumberOfVoter=props.MyNumberOfVoter;
    function OpenAddVoter (){
        setOpenModal(true);
    }
    let NewPoll = props.CreatePool;
    function vBtnClick(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("status-popup-id")) as HTMLSelectElement;
        id.classList.toggle("show-v-popup");
    }

    function openVoteModal(e: any) {
        e.stopPropagation();
        var id = (document.getElementById("vote-modal")) as HTMLSelectElement;
        id.classList.toggle("vm-show");
    }

    function handleChange(value: any) {
        console.log("select value: ", value)
    }
    function CreatePollError (){
        return(
            alert("you do not have permission to create polls")
        )
    }
    //CREATE DYNAMIC INPUT
    const [formFields, setFormFields] = useState([
        "",
      ])
      const handleFormChange = (event : any, index : any) => {
        let data : any = [...formFields];
        data[index]= event.target.value;
        setFormFields(data);
      }
      const submit = async (e : any) => {
        let i=0;
        e.preventDefault();
        // formFields.forEach(async () => {
        //     await VoteFactoryContract.addVoter(formFields[i], PollID);
        //     i++;
        // });
        for(i;i<formFields.length;i++){
            await VoteFactoryContract.addVoter(formFields[i], PollID);
        }
        
        setMyNumberOfQuestion(NumberOfVoter+formFields.length)
        setOpenModal(false);
        console.log(await VoteFactoryContract.getListPoll(),formFields)
      }
    
      const addFields = () => {
        let myAdd = "";
    
        setFormFields([...formFields,myAdd] )
      }
    
      const removeFields = (index : any) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
    return (
        <>
        <div className="v-header-wrapper">
            <div className="v-header">
                <div className="v-title-box">
                    <h1 className="v-title">Voting</h1>
                </div>
                <div className="v-new-vote">
                    {checkOwner ? <button className="v-new-vote-btn" onClick={(e:any) => openVoteModal(e)}>New poll</button> : null}
                     {checkOwner ? <Button type="primary" className="Add-voter-btn" onClick={() => setOpenModal(true)}>
                        Add Voter
                    </Button> : null}
                    {/* <button className="v-new-vote-btn" onClick={(e:any) => GetListPolls()}>Get list poll</button> */}
                    <Modal 
                        title="Add Voters  Address"
                        style={{top:100}}
                        open={OpenModal}
                        onOk={submit}
                        onCancel={() => setOpenModal(false)}
                        width={1000}
                        className="addVoter"
                    >
                        {/* submit number of voter */}
                        <div className="Add Voter" >
                            <form onSubmit={submit}>
                                {formFields.map((form, index) => {
                                return (
                                    <div key={index}>
                                    <input
                                        name='address'
                                        placeholder='Address'
                                        onChange={event => handleFormChange(event, index)}
                                        
                                        className = "add-voter-input"
                                    />
                                    
                                    <button onClick={() => removeFields(index)} className="v-new-vote-btn">Remove</button>
                                    </div>
                                )
                                })}
                            </form>
                            <button onClick={addFields} className="v-new-vote-btn">Add More..</button>
                        </div>
                    </Modal>
                </div>
            </div>

            <div className="v-nav">
                <div className="v-nav-box">
                    <div className="temp-class">
                        <Select
                        defaultValue="1"
                        style={{ width: 128 }}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: 'All' },
                            { value: '2', label: 'Open' },
                            { value: '3', label: 'Closed' },
                        ]}
                        />
                    </div>

                    <div className="temp-class">
                        <Select
                        defaultValue="1"
                        style={{ width: 128 }}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: 'All' },
                            { value: '2', label: 'Passed' },
                            { value: '3', label: 'Rejected' },
                            { value: '4', label: 'Enacted' },
                            { value: '5', label: 'Pending' },
                        ]}
                        />
                    </div>

                    <div className="temp-class">
                        <Select
                        defaultValue="1"
                        style={{ width: 128 }}
                        onChange={handleChange}
                        options={[
                            { value: '1', label: 'All' },
                            { value: '2', label: 'Voting' },
                            { value: '3', label: 'External' },
                        ]}
                        />
                    </div>

                    <div className="calendar-box">
                        <RangePicker className="x" />
                    </div>
                </div>
            </div>
        </div>
        <NewvoteModal MyPollID={PollID} SetMyNumberOfVotes={setMyNumberOfQuestion}
        SetMyPollID={SetPollID} SetMyCheckNewPoll={SetCheckNewPoll} finnalQuestion={MyQuestion} 
         FinnalSetQuestion={MySetQuestion}
         setCheckQuestion = {SetQuestionExist} FinnalCreatePoll ={VoteFactoryContract}
         />
        </>
    )
}

export default VHeader;