import { Fragment, useEffect, useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./chatbot-container.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageModel,
  ConversationHeader,
  Avatar,
  Loader,
} from "@chatscope/chat-ui-kit-react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

function ChatBotContainer() {
  
  const [messages, SetMessages] = useState<MessageModel[]>([]);
  const [loading, SetLoading] = useState<boolean>(true);

 
  useEffect(() => {
    client.get("/stored-message").then((response) => {
      const timer = setTimeout(() => {
        SetMessages(response.data);
        SetLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    });
  }, []);

  
  const UpdateMessages = async (message: string, direction: string) => {
    const newMessage: MessageModel = {
      message,
      direction: direction === "incoming" ? "incoming" : "outgoing",
      position: "last",
    };

    SetMessages((prevMessages)=>{
      let updatedMessage=[...prevMessages,newMessage];
      return updatedMessage; 
    });
    await UpdateStoredMessage(newMessage); 
  };

 
  const UpdateStoredMessage = async (updatedMessages: MessageModel) => {
    try {
      const response = await client.post("/stored-message", updatedMessages);
    } catch (error) {
      console.error("Error updating stored messages:", error);
    }
  };

  
  const GetResponse = async () => {
    try {
      const response = await client.get("/response");
      const data = response.data;
      UpdateMessages(data.message, data.direction); 
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  const currentMessages = () => {
    return messages.map((item: MessageModel, index: number) => (
      <Message model={item} key={index}>
        {item.direction === "incoming" ? (
          <Avatar
            name="Emily"
            src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
          />
        ) : null}
      </Message>
    ));
  };

  return (
    <div
      style={{
        position: "relative",
        height: "min(85vh,500px)",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <MainContainer>
        {loading ? (
          <Loader className="loader"></Loader>
        ) : (
          <ChatContainer>
            <ConversationHeader>
              <Avatar
                name="Emily"
                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
              />
              <ConversationHeader.Content userName="Emily" />
            </ConversationHeader>
            <MessageList>{currentMessages()}</MessageList>
            <MessageInput
              placeholder="Type message here"
              attachButton={false}
              onSend={(item) => {
                UpdateMessages(item, "outgoing");
                GetResponse(); 
              }}
            />
          </ChatContainer>
        )}
      </MainContainer>
    </div>
  );
}

export default ChatBotContainer;
