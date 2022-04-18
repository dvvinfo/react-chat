import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setMessages } from '../../redux/messages/reducer';


export const Input = ({ messagesRef }) => {
  const [messagesInput, setMessagesInput] = useState('');
  const dispatch = useDispatch();
 const onSubmit = (e) => {
   e.preventDefault()
 }
  const onKeyEnter = (e) => {
    if (messagesInput.length && messagesInput.indexOf(' ') && e.key === 'Enter') {
      dispatch(setMessages(messagesInput));
      setTimeout(() => {
        messagesRef.current.scrollIntoView();
        setMessagesInput('')
      }, 100);
    }
  };

  return (
    <div className="chat__enter">
      <form action="#" className="chat__enter-form" onSubmit={onSubmit}>
        <input
          onKeyDown={onKeyEnter}
          type="text"
          value={messagesInput}
          onChange={(e) => setMessagesInput(e.target.value)}
          className="chat__input"
          placeholder="Напишите сообщение..."
          required
        />
        <div className="chat__smail">
          <img src="../img/icons/emodjis-1.svg" alt="" />
        </div>
      </form>
    </div>
  );
};
