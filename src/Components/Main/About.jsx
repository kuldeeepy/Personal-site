import myPic from "/src/assets/Profile-pic.jpeg";

function Main() {
  return (
    <>
      <div className="about flex items-center text-white p-20 gap-6 bg-[#3C4043]">
        <div className="image p-5">
          <img
            className=" w-[250px] border-[1.5px] rounded-[100%] opacity-[.9]"
            src={myPic}
            alt="picture"
          />
        </div>
        <div className=" p-5 border-[1px] max-w-[60%] rounded-md text-justify flex flex-col gap-[10px]">
          <h2 className="font-bold text-2xl">About Me</h2>
          <p>
            My name is Kuldeep. I like programming because with just a few lines
            of code I can turn my ideas into reality, which potentially can be
            contributed for the sake of society.
          </p>
          <p>
            Beyond my formal education I taught myself to code, I started
            straight covering strong fundamentals of JavaScript now I'm learning
            Front-End development considering JS as base later-on I'd want to
            see myself as a Full-Stack Developer. And to make that happen I
            CODE!
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
