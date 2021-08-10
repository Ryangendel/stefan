import React, {  useState } from 'react';
import './App.css';
import {HashRouter, Route}  from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Deposit from './components/deposit';
import Withdraw  from './components/withdraw';
import AllData from './components/alldata';
import {UserContext} from './components/context';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [balance123, setBalance123] = useState(0);  
  const [validatedUserWithBalanceInfo, setValidatedUserWithBalanceInfo] = useState([{name:'abel',email:'abel@mit.edu',password:'secret',balance:balance123, balChange: changeBalance}]);  

  function changeBalance (props){
    console.log("PARENT COMPONENT")
    let balance123	= props;
    let newBalance =  balance123 ;
    setBalance123(newBalance)
    //setValidatedUserWithBalanceInfo(...validatedUserWithBalanceInfo)
  }

  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:validatedUserWithBalanceInfo}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact class="current" component={Home} />
          <Route path="/CreateAccount/" class="current" render={()=>{
            return <CreateAccount updateUsers={setValidatedUserWithBalanceInfo} />}}/>
          <Route path="/login/" class="current" component={Login} />
          <Route path="/deposit/" class="current" component={Deposit} />
          <Route path="/withdraw/" class="current" component={Withdraw} />
          <Route path="/alldata/" class="current" component={AllData} /> 
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App
