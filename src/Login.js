import React from 'react'
import {auth, provider} from "./firebase"
import './Login.css';
import { Button } from '@mui/material';

function Login() {
    const signIn = () => {
    // do clever google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
}

  return (
    <div className='login'>
        
        <div className="login__logo"><img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62a07b53139aec4c1fd07771_discord-logo.png" alt="Discord logo" />
        </div>
        <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login
