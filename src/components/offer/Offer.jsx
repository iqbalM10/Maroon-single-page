import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Offer() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
    <section id="offer" style={{backgroundImage: `url("/images/img4.jpg")`}}>
        <div className="container">
            <div className="offer-text-info" data-aos="fade-right"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine">
                <h3>“Мы стремимся сделать уход за кожей доступным
и приятным ритуалом для всех, кто хочет
заботиться о себе и своем теле”  </h3>

<button>Наша история</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Offer