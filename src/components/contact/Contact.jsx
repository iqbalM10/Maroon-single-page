import React from 'react'

function Contact() {
  return (
    <>
    <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 contact-col">
                    <div className="contact-area">
                        <h3>Контакты</h3>
                        <h4>Адрес</h4>
                        <p>Санкт-Петербург,
ул. Большая Конюшенная, 19</p>

<h4>Телефон</h4>
<p>+7 (923) 888-90-60</p>

<h4>E-mail</h4>
<p>info@maroon.ru</p>

<div className="contact-social">
    
</div>
                    </div>
                </div>
                <div className="col-lg-5">
              
<div id="map-container-google-1" class="z-depth-1-half map-container">
  <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
</div>


                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact