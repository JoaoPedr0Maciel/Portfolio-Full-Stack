import Card from "../Cards/Card";
import tech from "../../assets/TechLong.png";
import dt from "../../assets/dtmoney.png";

const Projetos = () => {
  return (
    <section
      id="projetos"
      className=" mt-20 h- mx-20 flex flex-col justify-center items-center  "
    >
      <h1 className="text-primary text-[2rem] font-bold max-sm:text-center">
        Projetos
      </h1>
      <div className="flex gap-5 mt-5 justify-center items-center flex-wrap ">
        <Card
          image={tech}
          title="TechLong Store"
          description="TechLong é uma loja online de mouses, atraente e responsiva"
          github=""
          site=""
        />
        <Card
          image={dt}
          title="Dt-money"
          description="Gerenciador de despesas por categorias, entrada, saída e restante líquido em dinheiro"
          github="https://github.com/JoaoPedr0Maciel/Dt-Money/tree/main/dt-money"
          site="https://dt-money-iota-drab.vercel.app"
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
