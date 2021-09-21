import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {

const signIn = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => 
    alert(error.message));
};

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
          alt=""
        />
        <h1>First, enter your email</h1>
        <p>We suggest using the email address you use at work.</p>
        <Button onClick={signIn}><img src="https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png" alt=""/>Continue with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
const LoginContainer = styled.div`
height: 100vh;
background-color: #f8f8f8;
display: grid;
place-items: center;
`;
const LoginInnerContainer = styled.div`
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
>img{
    object-fit: contain;
    width: 150px;
    height: auto;
    margin-bottom: 50px;
}
>button{
margin-top: 50px;
display: flex;
align-items: center;
color: #4287F4;
font-size: 16px;
font-weight: 600;
text-transform: inherit;
border: 2px solid #4287F4;
border-radius: 4px;
padding: 0 22px;
}
>button > span > img{
    width: 42px !important;
}
`;
