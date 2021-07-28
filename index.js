function Spa() {

  const [balance123, setBalance123] = React.useState(0);  

  function changeBalance (moneyDeposited){
    console.log("YOU ARE IN THE PARENT COMPONENT")
    let newBalance= balance123 + moneyDeposited
    setBalance123(newBalance)
  }

  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret', balance:balance123, balChange:changeBalance}, ]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
