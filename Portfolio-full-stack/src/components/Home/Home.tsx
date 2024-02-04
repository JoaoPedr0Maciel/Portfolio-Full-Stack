import Drawing from "../../assets/drawing.svg";

const Home = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="h-[500px] w-full flex justify-center items-center">
        <div className="w-[60ch]">
          <h1 className="text-primary text-[3rem] font-bold">Dev Front-End</h1>
          <p className="text-secondary text-[1.25rem] font-normal">
            Transformando ideias em experiências digitais incríveis, cada linha
            de código conta uma história, e cada design reflete a busca
            incessante pela inovação. Seja bem-vindo ao meu universo, onde a
            paixão pelo front-end se traduz em soluções cativantes e visuais
            impactantes.
          </p>
        </div>

        <div>
          <img
            className=" ml-[3rem] h-[30rem] w-[30rem]"
            src={Drawing}
            alt="drawing"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
