function Withdraw(){
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  


  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);


  const handleSubmit = (event) => {
    console.log(newTotal);
    let newTotal = isDeposit ? totalState - deposit : totalState + deposit;
      if (newTotal > -1) {
      setTotalState(newTotal)}
      else { window.alert("Your balance is not suffient")}
    event.preventDefault();
  };

  const handleChange = (event) => {
    console.log(Number(event.target.value));
    setDeposit(Number(event.target.value));
  };

 

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={
              <>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Confirm withdraw</button>
              <p></p>
              <input type="number" min="1" className="btn btn-light" placeholder="Amount (min $1)" onChange={handleChange} ></input>
              <p>Account Balance  ${totalState} </p>
              <img src="withdraw.PNG" className="img-fluid" alt="Responsive image" width="150rem"/>
              <h1>
              </h1>
              <p></p>
              <p>You are loged in as:</p>
              <p> 
              {JSON.stringify(ctx.users[ctx.users.length-1])}</p>
              <a className="btn btn-light" href="#/login" >Logout</a>
              </>
            }
    />
  )
}
