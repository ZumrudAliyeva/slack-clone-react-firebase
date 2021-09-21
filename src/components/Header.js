import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import { auth } from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth"

function Header() {
  const [user] = useAuthState(auth);

const signOut = e => {
  e.preventDefault();
  auth.signOut();
}

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        onClick={signOut}
        alt={user?.displayName}
        src={user?.photoURL}
        />
        <AccessTime />
      </HeaderLeft>
      
      <HeaderSearch>
        <Search />
        <input placeholder="search the Mamareact" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderRight = styled.div`
flex: 0.3 !important;
display: flex;
align-items: center;
justify-content: flex-end;

> .MuiSvgIcon-root{
margin-left: auto;
margin-right: 20px;
}
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  padding: 0 50px;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  padding: 10px 0px;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 25px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
