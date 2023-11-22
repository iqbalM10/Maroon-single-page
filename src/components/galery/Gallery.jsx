import React from 'react'


function Gallery() {
  return (
    <>
    <section id="gallery">
        <div className="container">
           <div className="row align-items-center">
           <div className="col-lg-6">
            <div className="left-gallery-side">
                <div className="row">
                  <div className="col-lg-4 img-gallery">
                    <div className="image-area">
                    <img src="/images/img5.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 img-gallery">
                    <div className="image-area">
                    <img src="/images/img6.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 img-gallery">
                    <div className="image-area">
                    <img src="/images/img7.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 img-gallery">
                    <div className="image-area">
                    <img src="/images/img8.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 img-gallery">
                    <div className="image-area">
                    <img src="/images/img9.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-4 img-gallery">
                    <div className="image-area">
                    <img src="/images/img5.png" alt="" />
                    </div>
                  </div>
                 
                </div>
            </div>
            </div>
          <div className="col-lg-6">
          <div className="right-info-side">
                <h3>Присоединяйтесь к нам</h3>
                <p>Подпишитесь на наш аккаунт @marooncare
и узнавайте о новиках и акциях первыми</p>
<button>Подписаться</button>

            </div>
          </div>
           </div>
        </div>
    </section>
    </>
  )
}

export default Gallery