import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-[4rem]  flex justify-center items-center text-primary font-medium">
      <div className="flex justify-between items-center w-full   mx-20">
        <div className="flex">
          <h1 className="transition duration-[.4s] hover:text-[#945DD6] cursor-pointer">
            João Pedro M.
          </h1>
        </div>
        <div className="flex gap-8">
          <a
            className="transition duration-[.4s] hover:text-[#945DD6]"
            href="#projetos"
          >
            Projetos
          </a>
          <a className="transition duration-[.4s] hover:text-[#945DD6]" href="">
            Tecnologias
          </a>
          <a className="transition duration-[.4s] hover:text-[#945DD6]" href="">
            Contatos
          </a>
        </div>
        <div className="flex gap-2 ">
          <FaGithub className="text-xl transition duration-[.4s] hover:text-[#945DD6] cursor-pointer " />
          <FaLinkedin className="text-xl transition duration-[.4s] hover:text-[#945DD6] cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
