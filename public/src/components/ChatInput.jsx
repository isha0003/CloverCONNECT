import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #7a9f79; /* Background color using RGB(122, 159, 121) */
  padding: 0 2rem;

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }

  .button-container {
    display: flex;
    align-items: center;
    color: #acd1af; /* Text color using RGB(172, 209, 175) */
    gap: 1rem;
    

    .emoji {
      position: relative;

      svg {
        font-size: 1.5rem;
        color: #b1dd9e;
        cursor: pointer;
      }

      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: #b1dd9e; /* Background color using RGB(122, 159, 121) */
        // box-shadow: 0 5px 10px #b1dd9e;
        border-color: #b1dd9e;

        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #b1dd9e; /* Background color using RGB(122, 159, 121) */
          width: 5px;

          &-thumb {
            background-color: #b1dd9e;
          }
        }

        .emoji-categories {
          button {
            
            filter: contrast(0);
          }
        }

        .emoji-search {
          background-color: #b1dd9e;
          border-color: #7a9f79;
        }

        .emoji-group:before {
          background-color: #b1dd9e;
          color: white;  /* Background color using RGB(122, 159, 121) */

        }
      }
    }
  }

  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #315a39; 
    color: white; 
    

    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      

      &::selection {
        background-color: #9a86f3;
        
      }

      &:focus {
        outline: none;
        
      }
    }

    button {
      padding: 0.3rem 2rem;
      border-radius: 8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #b1dd9e;
      border: none;

      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;

        svg {
          font-size: 1rem;
        }
      }

      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;