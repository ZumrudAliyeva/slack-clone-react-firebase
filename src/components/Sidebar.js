import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { auth, db } from "../firebase";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const [channels, loading] = useCollection(db.collection("rooms"));
 const [user] = useAuthState(auth)
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>MAMA REACT</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
  @media screen and (max-width: 768px){
  max-width: 320px;
  margin-top: 50px;
  flex: 0.4;
}
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding: 13px;
  border-bottom: 1px solid #49274b;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    background-color: white;
    border-radius: 50%;
    font-size: 30px;
  }
  @media screen and (max-width: 768px){
    padding: 5px;
    padding-bottom: 10px;
    > .MuiSvgIcon-root {
    padding: 6px;
    font-size: 23px;
  }
}
`;

const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
  @media screen and (max-width: 768px){
    > h2 {
    font-size: 14px;
    font-weight: 700;
  }
  > h3 {
    font-size: 12px;
    font-weight: 400;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 12px;
    margin-right: 6px;
  }
}
`;
