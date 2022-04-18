import React from 'react';

export const MessagesUser = ({ messages, messagesRef}) => {

  return (
    <div ref={messagesRef} className="message jc-end">
      <div className="message__time">{new Date().toLocaleTimeString().slice(0,5) } </div>
      <div className="message__darck">
        <div className="message__text">{messages}</div>
      </div>
    </div>
  );
};
