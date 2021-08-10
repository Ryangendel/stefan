import  {useState} from 'react';

export const [balance, setBalance] = useState(0);  

function ChangeBalance (moneyTransfer){
  console.log("YOU ARE IN THE PARENT COMPONENT")
  let newBalance= balance + moneyTransfer
  setBalance(newBalance)
  // console.log(moneyDeposited)
  // console.log(newBalance)
}

export default ChangeBalance; 