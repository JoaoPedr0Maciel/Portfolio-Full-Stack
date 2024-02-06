import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contatos = () => {
  return (
    <section
      id="contatos"
      className="  h-screen text-center flex flex-col justify-center  items-center max-sm:mt-[15rem] max-sm:text-center"
    >
      <h1 className="text-primary text-[2.5rem] font-bold max-sm:text-center">
        Contatos
      </h1>
      <p className="text-secondary text-[1.5rem] w-full ">
        Gostou dos meus serviços?{" "}
        <span className="font-bold">Entre em contato comigo!</span>
      </p>
      <form className="flex flex-col justify-center items-center  w-[600px] gap-5 mt-[1rem] max-sm:gap-3 ">
        <input
          className="bg-[#283652]  w-[400px] h-[2.5rem] max-sm:w-[350px]  rounded-md p-1 outline-none border-none text-primary"
          type="text"
          name=""
          id=""
          placeholder="Digite seu nome:"
        />
        <input
          className="bg-[#283652]  w-[400px] max-sm:w-[350px] h-[2.5rem] rounded-md p-1 outline-none border-none text-primary"
          type="email"
          name=""
          id=" "
          placeholder="Digite seu email:"
        />
        <textarea
          className="bg-[#283652] resize-none rounded-md w-[400px] max-sm:w-[350px] p-1 outline-none border-none text-primary"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Digite sua mensagem:"
        ></textarea>
        <button
          className="bg-[#283652] font-bold text-primary w-[200px] h-[2.5rem] rounded-2xl transition duration-[.3s] hover:bg-slate-500"
          type="submit"
        >
          Enviar
        </button>
        <div className="flex gap-3 mb-16 flex-col justify-center items-center">
          <h2 className="text-lg font-extrabold text-primary">
            Com mais facilidade!
          </h2>
          <div className="flex gap-4">
            <FaWhatsapp className="text-3xl text-[#26C009]" />
            <FaInstagram className="text-3xl text-[#D408C7]" />
          </div>
        </div>
      </form>
    </section>
  );
};
export default Contatos;
