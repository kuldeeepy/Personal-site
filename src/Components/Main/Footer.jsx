// import React from 'react'

function Footer() {
  return (
    <>
      <div className="foo text-black rounded-xl p-10 my-20 bg-white mx-[50px] text-wrap">
        <div className="location">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <h1>Location:</h1>
            <p>North East Delhi, DL-110053</p>
          </div>
        </div>
        <div className="mail">
          <i class="fa-solid fa-envelope"></i>
          <div>
            <h1 id="bf2">Email:</h1>
            <p>Kuldeeep.yadav1@gmail.com</p>
          </div>
        </div>
        <div className="phone">
          <i class="fa-solid fa-phone-volume"></i>
          <div>
            <h1 id="bf3">Call:</h1>
            <p>+91 836 8774 680</p>
          </div>
        </div>
      </div>
      <div className="h-[50px] text-white bg-[#23272f] flex flex-col items-center justify-center">
        <div>
          &copy; Copyright <em>Kuldeep Yadav!</em>
        </div>
        <div>Designed & Engineered by Admin</div>
      </div>
    </>
  );
}

export default Footer;
