import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-[4rem] fixed w-full max-sm:flex-col z-10  flex justify-center items-center bg-[#283652] text-primary font-medium">
      <div className="flex justify-between items-center w-full   mx-20">
        <div className="flex ">
          <a
            href="#home"
            className="transition duration-[.4s] hover:text-[#945DD6] cursor-pointer max-sm:hidden"
          >
            João Pedro M.
          </a>
        </div>
        <div className="flex gap-8 ">
          <a
            className="transition duration-[.4s] hover:text-[#945DD6]"
            href="#projetos"
          >
            Projetos
          </a>
          <a
            className="transition duration-[.4s] hover:text-[#945DD6]"
            href="#tecnologias"
          >
            Tecnologias
          </a>
          <a
            className="transition duration-[.4s] hover:text-[#945DD6]"
            href="#contatos"
          >
            Contatos
          </a>
        </div>
        <div className="flex gap-2 max-sm:mr-2 ">
          <a target="_blank" href="https://github.com/JoaoPedr0Maciel">
            <FaGithub className="text-xl transition duration-[.4s] hover:text-[#945DD6] cursor-pointer " />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/joão-pedro-maciel/"
          >
            <FaLinkedin className="text-xl transition duration-[.4s] hover:text-[#945DD6] cursor-pointer" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
