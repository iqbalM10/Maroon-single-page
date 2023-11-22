import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Advertisement() {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
    <section id="advertisement" style={{backgroundImage: `url("/images/background.png")`}}>
      <div className="container px-5">
        <div className="row justify-content-end">
          <div className="col-lg-5">
          <div className="text-area" data-aos="zoom-in-left">
          <h3>Встречайте весну <br />вместе с нами</h3>
       <p>Попробуйте новую коллекцию <br /> ухаживающих средств для лица <br /> с SPF защитой</p>
       <button>Подробнее</button>
        </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Advertisement