import MUI from "/src/assets/icons8-material-ui-48.png";
import Tailwind from "/src/assets/tailwind.png";
import Node from "/src/assets/node.png";

function Skills() {
  return (
    <div className="container bg-[#191b21] min-w-[100vw] py-32 flex justify-center">
      <ul className="flex justify-center flex-wrap bg-[#23272f] rounded-3xl px-28 py-28 mx-5 items-center text-[7rem]">
        <li>
          <i class="fa-brands fa-html5 text-red-500"></i>
        </li>
        <li>
          <i class="fa-brands fa-css3-alt text-blue-600"></i>
        </li>
        <li>
          <i class="fa-brands fa-js text-yellow-300"></i>
        </li>
        <li>
          <img
            className="bg-white rounded-[50%] p-3"
            src={Tailwind}
            alt="Tailwind CSS"
          />
        </li>
        <li>
          <i class="fa-brands fa-react text-[#149eca]"></i>
        </li>
        <li>
          <img
            className="bg-white rounded-[50%] p-3"
            src={Node}
            alt="Node.JS"
          />
        </li>
        <li>
          <i class="fa-brands fa-git text-red-400"></i>
        </li>
        <li>
          <img
            className="bg-white rounded-[50%] p-3"
            src={MUI}
            alt="Material UI"
          />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
