import React, { useContext,  useState} from 'react';
import Card from './cards';
import { UserContext} from './context'


function CreateAccount (props) {
const [show, setShow]         = useState(true);
const [status, setStatus]     = useState('');
const [name, setName]         = useState('');
const [email, setEmail]       = useState('');
const [password, setPassword] = useState('');
const ctx = useContext(UserContext); 

const validate = (field, label) => {
  if (!field) {
  setStatus('Error: ' + label);
  setTimeout(() => setStatus(''),3000);
  return false;
  }
  if (password.length < 8){
    setStatus('Error: password min 8 characters!' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}

const handleCreate = () => {
  console.log("******")
  console.log(props)
  console.log("******")
  console.log(name,email,password);
  if (!validate(name,     'name'))     return;
  if (!validate(email,    'email'))    return;
  if (!validate (password, 'password')) return;
  props.updateUsers({name,email,password,balance:0})
  // ctx.users.push({name,email,password,balance:0});
  setShow(false);
  }   
  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
        }
 
    return (
      <Card
        bgcolor="secondary"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                
                <input type="password" className="form-control" required  minlength="8" id="password" placeholder="Enter password (min 8 char)" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-dark" onClick={handleCreate}>Create Account</button>
                </>
              ):(
                <>
                <h5>Creating an account was successful </h5>
                <a href="#/login" className="btn btn-dark" onClick={clearForm} >Go to Login</a>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-dark" onClick={clearForm}>Add another account</button>
                </>
              )}
      />
    )
}
export default CreateAccount;