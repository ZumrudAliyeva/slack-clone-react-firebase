import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import {useCollection, useDocument} from "react-firebase-hooks/firestore"
import { db } from "../firebase";
import Message from "./Message";

function Chat() {

const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);
const [roomDetails] = useDocument(
  roomId && db.collection("rooms").doc(roomId)
)
const [roomMessages, loading] = useCollection(
  roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc")
);

useEffect(() => {
chatRef?.current?.scrollIntoView({
  behavior: "smooth",
});
}, [roomId, loading])

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
        <Header>
        <HeaderLeft>
          <h4>
            <strong>#{roomDetails?.data().name}</strong>
          </h4>
          <StarBorderOutlined />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages>
        {roomMessages?.docs.map(doc => {
          const {message, timestamp, user, userImage} = doc.data();

          return (
            <Message
            key={doc.id}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
            />
          )
        })}
        <ChatBottom ref={chatRef} />
      </ChatMessages>
      <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId} />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatBottom = styled.div`
padding-bottom: 200px;
`;
const ChatMessages = styled.div`
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 5px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;

  > h4 {
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    font-size: 18px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 60px;
  border-bottom: 1px solid lightgray;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  position: relative;
`;
