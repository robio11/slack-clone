import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { auth, db } from "./firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelId, channelName, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(channelId);

    if (!channelId) {
      return false;
    }
    await addDoc(collection(db, "rooms", "message", channelId), {
      message: input,
      user: user.displayName,
      userImage: user.photoURL,
      timestamp: Timestamp.fromDate(new Date()),
    });
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    // console.log(docRef);
    setInput("");
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

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
