import React, { useState , useEffect ,useRef} from 'react';
import './App.css';
import { Layout, Space } from 'antd';
import Welcome from './pages/welcome';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Explore from './components/explore';
import ExplorePage from './pages/explore-page';
import Header from './components/header';
import OpenExistingOrg from './pages/open-existing-org';
import Voting from './pages/voting';
import Finance from './pages/finance';
import Permissions from './pages/permissions';
import PDetail from './components/p-detail-header';
import PermissionDetail from './pages/permission-detail';
import AppCenter from './pages/app-center';
import OrgSetting from './pages/org-setting';
import AppCenterDetail from './pages/app-center-detail';
import VotingDetail from './pages/voting-detail';
import { ethers } from 'ethers';
import VoteFactoryAbi from "./abis/VoteFactory.json";
import VoteFactoryAddress from "./abis/VoteFactory-address.json"
import Borrow from './pages/borrow';
import BorrowDetail from './pages/borrow-detail';
import Discover from './pages/discover';
interface Network {
  name: string,
  type: 0,
}

function App() {
  const [network, setNetwork] = useState({ name: "Ethereum", type: 0 } as Network);
  const [page, setPage] = useState("home");
  const [OwnerAddress, setOwnerAddress] = useState("");
  const [IsOwnerAddress, setIsOwnerAddress] = useState(false);
  const [VoteFactory, setMyVoteFactory] = useState({});
  useEffect(() => {
    var aId = (document.getElementById("app-id")) as HTMLElement
    if(aId != null && page == "borrow") {
      if(!aId.classList.contains("bg-white")) {
        aId.classList.add("bg-white")
      }
    } else {
      if(aId != null && aId.classList.contains("bg-white")) {
        aId.classList.remove("bg-white")
      }
    }
  }, [page])

  const [NumberOfPoll , setNumberOfPoll] = useState([] as number[]);
  const [newPollID , setNewPollID] = useState(0);
  const [CheckLogIn , setCheckLogIn] = useState(false);
  const [NumberOfVoters , setNumberOfVoter] = useState(0);
  const [polls , setPolls] = useState([] as any[]);
  const [Agree , setAgree] = useState(1 as number);
  const [Disagree , setDisagree] = useState(1 as number);
  const [Voted , setVoted] = useState(false);
    const i = useRef(0);
    const m = useRef(0);
    const [MyCount , setMyCount] = useState(0);
  return (
    <>
      <div id="app-id" className='App'>
        <div className='line'></div>
        
        <BrowserRouter> 
        <Header 
        page={page} 
        setPage={setPage} 
        network={network} 
        setNet={setNetwork}
        voteFactory ={VoteFactory} 
        SetMyVoteFactory={setMyVoteFactory}
        ownerAddress={OwnerAddress} 
        SetOwnerAddress={setOwnerAddress} 
        isOwnerAddress={IsOwnerAddress} 
        SetIsOwnerAddress={setIsOwnerAddress}
        SetCheckLogIn = {setCheckLogIn} 
        setIsVoted={setVoted}
        />
          <Routes>
              <Route path="/" element={<Welcome setPage={setPage} network={network}/>} />
              <Route path="/:id" element={<ExplorePage />} />
              <Route path="/open" element={<OpenExistingOrg network={network} />} />
              <Route path="/voting" element={<Voting setPage={setPage} numberOfPoll={NumberOfPoll} SetNumberOfPoll={setNumberOfPoll}
                isOwnerAddress={IsOwnerAddress} voteFactory ={VoteFactory} 
                CreatePollID = {newPollID} SetCreatePollID={setNewPollID}
                checkLogIn = {CheckLogIn}   MyNumberOfVoter={NumberOfVoters}
                myPolls = {polls} setMyPolls = {setPolls} MyI={i} MyM={m} Count={MyCount} SetCount={setMyCount}
                SetNumberOfVoter={setNumberOfVoter} NumberOfVoter ={NumberOfVoters}
               />} />
              <Route path="/finance"  element={<Finance setPage={setPage} />} />
              <Route path="/permission" element={<Permissions  />} />
              <Route path="/permission-detail" element={<PermissionDetail />} />
              <Route path="/app-center" element={<AppCenter />} />
              <Route path="/org-setting" element={<OrgSetting />} />
              <Route path="/app-center-detail" element={<AppCenterDetail />} />
              <Route path="/vote-detail" element={<VotingDetail AgreeVoter={Agree} SetAgreeVoter={setAgree} MyPolls={polls} 
              DisagreeVoter={Disagree} SetDisagreeVoter={setDisagree}
              MyNumberOfVoter={NumberOfVoters} PollID={newPollID} IsAccountVoted={Voted} SetIsAccountVoted={setVoted}
              isOwnerAddress={IsOwnerAddress} voteFactory ={VoteFactory}/>} />
              <Route path="/borrow" element={<Borrow setPage={setPage} />} />
            <Route path="/borrow/:id" element={<BorrowDetail setPage={setPage} />} />
            <Route path="/discover" element={<Discover setPage={setPage} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
