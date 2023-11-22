import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Individual() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
   <>
   <section id="individual">
    <div className="container">
    <div className="right-text-side" data-aos="fade-up"
     data-aos-duration="2500">
                    <h3>Индивидуальный уход</h3>
                    <p>Не всегда очевидно, какие элементы и минералы необходимы коже,         а многочисленные эксперименты     с разными средствами только ухудшают ее качество.
Заполните анкету, и мы подберем уход, подходящий именно вам, учитывая ваш образ жизни, место жительства и другие факторы. </p>
               <button>Заполнить анкету</button>
                </div>

                <div className="image-side">
        <img src="/images/img2.png" alt="" />
    </div>
    </div>
   
   
   </section>
   </>
  )
}

export default Individual