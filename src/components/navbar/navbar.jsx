import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const onChatBtnRecycle = () => {
   const chat = document.querySelector('.chat')
    const chatContent = document.querySelector('.chat__content')
    const chatEnter = document.querySelector('.chat__enter')
    chat.classList.toggle("active");
    chatContent.classList.remove("d-none");
    chatEnter.classList.remove("d-none");

  }
  const onChatClickClose = () => {
    const chat = document.querySelector('.chat')
    const chatContent = document.querySelector('.chat__content')
    const chatEnter = document.querySelector('.chat__enter')
    chat.classList.remove("active");
    chat.classList.add("height");
    chatContent.classList.add("d-none");
    chatEnter.classList.add("d-none");
  }
  return (
    <div className="chat__nav">
      <div className="chat__nav__btn-wrapper">
        <div className="chat__nav__btn-content">
          <NavLink to='/' className="chat__nav-btn">
            общий
          </NavLink>
          <NavLink to='/clan' className="chat__nav-btn">
            клан
          </NavLink>
          <NavLink to='/friends' className="chat__nav-btn">
            друзья
          </NavLink>
          <NavLink to='/news' className="chat__nav-btn">
            новости
          </NavLink>
        </div>
      </div>
      <button className="chat__nav-arrow">
        <img src="../img/icons/arrow.svg" alt="" />
      </button>
      <div className="chat__panel">
        <form action="#" className="chat__panel-form">
          <select name="language" className="select">
            <option value="RU">RU</option>
            <option value="EN">EN</option>
            <option value="ZHO">ZHO</option>
          </select>
        </form>
        <div className="chat__panel__recycle " onClick={onChatBtnRecycle}>
          <button className="btn-recycle min" >
            <img src="../img/icons/Vector-6.svg" alt="" />
          </button>
          <button className="btn-recycle max" >
            <img src="../img/icons/Vector-5.svg" alt="" />
          </button>
        </div>
        <div className="chat__panel__close" onClick={onChatClickClose}>
          <button className="btn-close">
            <img src="../img/icons/Vector-7.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
