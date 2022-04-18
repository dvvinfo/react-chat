import React from 'react';

export const Messages = ({ img, messages, messagesName, admin, messagesNumber }) => {

  return (
    <div className="message">
      <div className="message__item">
        <div className="message__header">
          <div className="message__img">
            <img src={img} alt="" />
          </div>
          <div className="message__name">{messagesName}</div>
          <div className="message__number"> {messagesNumber }</div>
          <div className="message__img">
            <img src={admin} alt="" />
          </div>
        </div>
        <div className="message__text">{messages}</div>
      </div>
      <div className="message__time">14:28</div>
    </div>
  );
};
