import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>
              {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
const MessageInfo = styled.div`
padding-left: 10px;
>h4 > span{
    color: gray;
    font-weight:300;
    margin-left: 4px;
    font-size: 10px;
}
@media screen and (max-width: 768px){
  padding-left: 8px;
  h4{
    font-size: 0.8rem;
    p{
    font-size: 0.6rem;
    }
  }
>h4 > span{
    color: gray;
    font-weight:300;
    margin-left: 4px;
    font-size: 0.6rem;
}
}
`;

const MessageContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;

>img{
    height: 50px;
    border-radius: 8px;
}
@media screen and (max-width: 768px){
  padding: 10px;

>img{
    height: 40px;
    border-radius: 8px;
}
}
`;
