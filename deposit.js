function Deposit(props){
  const [status, setStatus]     = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  //const ctx = React.useContext(UserContext); 
  const ctx = React.useContext(UserContext); 
  //account
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [validTransaction, setValidTransaction] = React.useState(false);
   
  const handleSubmit = (event) => {
    ctx.users[0].balChange()
    console.log("handleSubmit" );
    //console.log(totalState);
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    ctx.users[0].balChange(newTotal)
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
    
  };

  

  const handleChange = (event) => {

    
    console.log(ctx.users[0].balance + event.target.value)
    // console.log(Number(event.target.value));
    console.log("handleChange" );
    setDeposit(Number(event.target.value));
  };

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={  
              <>
              
              <button type="submit" className="btn btn-light" onClick={handleSubmit} >Confirm deposit</button>
              <p></p>
              <input type="number" min="1" className="btn btn-light" placeholder="Specify amount" onChange={handleChange}></input>
              <p >Account Balance ${totalState}  </p>
              <img src="deposit.PNG" className="img-fluid" alt="Responsive image" width="150rem"/>
              <p></p>
              <p>You are loged in as:</p>
              <p> {JSON.stringify(ctx.users[ctx.users.length-1])}</p>
              
              <a className="btn btn-light"  href="#/login" >Logout</a>
              {/* Logout to be defined */}
              </>
             }
    />
  )
}
