
import React, { useState } from 'react';
import Card from './cards';
import { UserContext} from './context'

function Login(props){
        const [show, setShow]         = React.useState(true);
        const [status, setStatus]     = React.useState('');
        const [email, setEmail]       = React.useState('');
        const [password, setPassword] = React.useState('');
        const ctx = React.useContext(UserContext);  
        

        const validateEM = (field, label) => {
          console.log(ctx)
        
          for (let i = 0 ; i < ctx.users.length; i++){
            if( field.email !== ctx.users[i].email){
              console.log(ctx)
              console.log("loginvalidationmail")
              setStatus('Error: No matching ' + label);
              setTimeout(() => setStatus(''),3000);
              return false;
            }
            return true;
          }
        }
        const validatePW = (field, label) => {
          for (let i = 0 ; i < ctx.users.length; i++){
            if( field.password !== ctx.users[i].password){
              console.log(ctx)
              // console.log(ctxCurrent)
              console.log("loginvalidationmail")
              setStatus('Error: No matching' + label);
              setTimeout(() => setStatus(''),3000);
              return false;
            }
            return true;
          }
        }
       
      const handleCreate = () => {
        console.log(email,password);
        // console.log("HHHH")
        if (!validateEM (email,    'email')){
          console.log("in the email validate")
          // return 
        }    ;
        if (!validatePW (password, 'password')){
          console.log("in the password validate")
          // return
        } ;
        console.log("HOPEFULLY YOU ARE HERE")
        setShow(false);
        // setAuthent(false);     settting authentification!!!!!!!!!!!!!!!!!!!!!!!!!!!

      }    
    
      const clearForm = () => {
        setShow(true);
        // setAuthent(true)       setting authentifictation !!!!!!!!!!!!!!
        // const ctxCurrent = ctx.users[ctx.users.length-1];           Creating an handle on last (logged user)!!!!!!!!!!!!!!!!!!!!
      }

        return (
          <Card
            bgcolor="secondary"
            header="Login"
            status={status}
            body={show ? (  
                    <>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" minlength="8" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-dark" onClick={handleCreate}>Login</button>
                    </>
                  ):(
                    <>
                    <h5>Successful Login: Please choose your options</h5>
                    <a href="#/deposit" className="btn btn-dark" onClick={clearForm} >Deposit money</a>
                    <h1></h1>
                    <a href="#/withdraw" className="btn btn-dark">Withdraw money</a>
                    <h1></h1>
                    </>
                  )}
          />
        )      
}
export default Login;