import Drawing from "../../assets/drawing.svg";

const Home = () => {
  return (
    <section id="home" className="h-screen flex justify-center items-center ">
      <div className="h-[500px] mx-20 w-full flex justify-center items-center">
        <div className="w-[60ch] max-sm:flex-col max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mx-20">
          <a
            href="#home"
            className="text-primary text-[3rem] font-bold max-sm:text-center max-sm:w-full max-sm:text-4xl  "
          >
            João Pedro Maciel <br /> Dev Full-Stack
          </a>
          <p className="text-secondary text-[1.25rem] font-normal max-sm:text-justify max-sm:w-[300px] ">
            Transformando ideias em experiências digitais incríveis, cada linha
            de código conta uma história, e cada design reflete a busca
            incessante pela inovação.
          </p>
        </div>

        <div>
          <img
            className=" ml-[3rem] h-[30rem] w-[30rem] max-sm:hidden"
            src={Drawing}
            alt="drawing"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
