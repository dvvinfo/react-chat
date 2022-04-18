import React, { useRef } from 'react'
import {  Route, Routes } from 'react-router-dom';
import { Navbar, Input, General } from "./components";

import Clan from "./components/pages/clan";
import Friends from "./components/pages/friends";
import News from "./components/pages/news";

export const App = () => {
  const messagesRef = useRef()

  return (
    <div className="wrapper">
      <div className="chat">
        <div className="chat__wrapper">
          <Navbar />
          <div className="chat__content">
          <Routes>
            <Route path="" element={<General messagesRef={messagesRef} />} />
            <Route path="/clan" element={<Clan  />} />
            <Route path="/friends" element={<Friends  />} />
            <Route path="/news" element={<News  />} />
          </Routes>
          </div>
          <Input messagesRef={messagesRef} />
        </div>
      </div>
    </div>
  )
}

