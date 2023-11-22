import React, { useState } from 'react'
import { FaUserAlt, FaShoppingBasket,FaBars } from 'react-icons/fa';

export default function Header() {

 /*  const [active,setActive] = useState(false)

  const HandleSubmit = () =>{
    setActive(!active)
  } */
  return (
    <>
    <section id="header">
        <header>
           <div className="container">
           <div className="logo">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREKxDoTWYw4IlFxo6d-TLVyOKIRueQq6gnKofO2YyIlfpS3qW5" alt="" />
            </div>
            <ul>
              <li> <a href="#">Каталог</a></li>
              <li> <a href="#">О нас</a></li>
              <li> <a href="#">Контакты</a></li>
              <li className="icon-area g-3">
                <span><FaUserAlt/></span>
                <span><FaShoppingBasket/></span>
            </li>

            </ul>

            <div className="mobile-menu" >
                <span><FaBars/></span>
            </div>

  
           
           </div>
            {/* <ul className={active ? "nav-area" : "mobile-menu-area"}>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">О нас</a></li>
              <li><a href="#">Контакты</a></li>
              <div className="icon-area"></div>
            </ul> */}
        </header>
    </section>
    </>
  )
}
