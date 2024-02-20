import web from "/src/assets/webpage.png";

function Projects() {
  return (
    <div className="bg-[#3C4043] p-16">
      <div className="projects bg-[#fff] rounded-[25px] py-20">
        <ul className="list flex justify-evenly px-5">
          <li>
            <img src={web} alt="project" />
          </li>
          <li>
            <img src={web} alt="project" />
          </li>
          <li>
            <img src={web} alt="project" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
