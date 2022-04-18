import React from 'react';
import { useSelector } from 'react-redux';
import { Messages } from '../../messages';
import { MessagesUser } from '../../messagesUser';
import { messagesAPI } from '../../mokApi';

export const General = ({ messagesRef }) => {
  const messagesContent = useSelector((state) => state.messages.messagesItem);

  return (
      <div className="chat__item">
        {messagesAPI.map((items) => (
          <Messages
            key={items.id}
            img={items.img}
            messages={items.messages}
            messagesName={items.messagesName}
            admin={items.admin}
            messagesNumber={items.messagesNumber}
            dateMessage = {items.dateMessage}
          />
        ))}
        {messagesContent.map((items, index) => (
          <MessagesUser messagesRef={messagesRef} messages={items} key={index} />
        ))}
      </div>

  );
};
