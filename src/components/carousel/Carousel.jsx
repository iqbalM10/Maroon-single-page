import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Carousel() {
    
  return (
    <>
  <section id="carousel">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="left-info-side">
                    <h3>Бестселлеры</h3>
                    <p>Легендарные продукты,завоевавшие любовь наших клиентов</p>

<button>Смотреть все</button>
                </div>
            </div>

            <div className="col-lg-8">
                <div className="carousel-side">
                <OwlCarousel className='owl-theme' loop margin={15} nav={true} dots={false}>
    <div class='item'>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/322ebd101080931.5f16fada8329e.jpg" alt="" />

   
    </div>
    <div class='item'>
       <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ab589f101080931.5f16fada81eeb.jpg" alt="" />
    </div>
    <div class='item'>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/04784e101080931.5f16fada83f93.jpg" alt="" />
    </div>
    <div class='item'>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/044a07101080931.5f16fada811bf.jpg" alt="" />
    </div>
  
   
</OwlCarousel>
                </div>
            </div>
        </div>
    </div>
  </section>
    </>
  )
}

export default Carousel