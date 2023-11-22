import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Begin() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);
  return (
   <>
   <section id="begin">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="left-side" data-aos="fade-right">
                   <div className="left-img-side">
                   <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6430ac170751483.64637fb950a5f.jpg" alt="" />
                   </div>
                   <div className="left-text-side">
                    <p>Уход для лица</p>
                    <span><FaArrowRightLong/></span>
                   </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="text-middle-area">
                    <h3>Maroon</h3>
                    <p>Натуральная косметика для бережного ухода за кожей</p>
                
                <button>Подробнее</button>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="left-side" data-aos="fade-left">
                   <div className="left-img-side">
                   <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/097ace166129231.6412f1593bd4c.jpg" alt="" />
                   </div>
                   <div className="left-text-side">
                    <p>Уход для лица</p>
                    <span><FaArrowRightLong/></span>
                   </div>
                </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}
