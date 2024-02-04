import Card from "../Cards/Card";
import tech from "../../assets/TechLong.png";

const Projetos = () => {
  return (
    <section className=" h-screen mx-20 mt-[10rem]flex flex-col justify-center ">
      <h1 className="text-primary text-[2rem] font-bold">Projetos</h1>
      <div className="flex gap-5 mt-5 justify-center items-center flex-wrap">
        <Card
          image={tech}
          title="teste"
          description="teste"
          github=""
          site=""
        />
        <Card
          image={tech}
          title="teste"
          description="teste"
          github=""
          site=""
        />
        <Card
          image={tech}
          title="teste"
          description="teste"
          github=""
          site=""
        />
        <Card
          image={tech}
          title="teste"
          description="teste"
          github=""
          site=""
        />
        <Card
          image={tech}
          title="teste"
          description="teste"
          github=""
          site=""
        />
        <Card
          image={tech}
          title="teste"
          description="teste"
          github=""
          site=""
        />
      </div>
    </section>
  );
};

export default Projetos;
