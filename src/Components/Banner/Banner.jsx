// import myPic from "/src/assets/Profile-pic.jpeg";
// import theBG from "/src/assets/theBg.jpg";

function Banner() {
  return (
    <>
      <div className="banner flex justify-center items-center">
        <div className="text text-white px-2">
          <h1 className="name md:text-[6rem] lg:text-[8rem] xl:text-[9rem]">
            I'm Kuldeep
          </h1>
          <p>
            An aspiring <span>Front-End Engineer</span> from India
          </p>
          <ul className="flex justify-center items-center gap-6 text-2xl md:text-4xl p-8">
            <li>
              <a href="https://www.linkedin.com/in/kuldeeep-yadav">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/kuldeeepy"></a>
              <i class="fa-brands fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Banner;
