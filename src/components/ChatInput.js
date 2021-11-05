import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);


  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef?.current?.scrollIntoView({
        behavior: "smooth",
      });

    setInput("")
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  position: fixed;
  bottom: 30px;
  width: 100%;

  > form {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  > form > input {
    width: 60%;
    margin-left: 10%;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 15px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
  @media screen and (max-width: 768px){
  > form > input {
    width: 67%;
    margin-left: 10px;
    padding: 10px 15px;
  }
}
`;
