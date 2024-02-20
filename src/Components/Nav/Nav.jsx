//
function Nav() {
  return (
    <div>
      <div className="options sticky top-0 overflow-hidden w-[100vw] bg-[rtransparent] max-sm:h-20 h-14 text-white flex justify-center font-semibold">
        <ul className="flex max-sm:hidden gap-6 text-[10px] items-center">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">RESUME</a>
          </li>
          <li>
            <a href="">WORKS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
        <div id="hamBurger">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
