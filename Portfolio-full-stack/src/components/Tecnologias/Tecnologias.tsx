import { BiLogoTypescript } from "react-icons/bi";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaPhp,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiStyledcomponents, SiTailwindcss } from "react-icons/si";

const technologies = [
  {
    id: 1,
    icon: <IoLogoJavascript className="text-yellow-400" />,
  },
  {
    id: 2,
    icon: <BiLogoTypescript className="text-[#007ACC] text-[6rem]" />,
  },
  {
    id: 3,
    icon: <FaReact className="text-[#62DAFD]" />,
  },
  {
    id: 4,
    icon: <SiTailwindcss className="text-[#62DAFD]" />,
  },
  {
    id: 5,
    icon: <FaHtml5 className="text-[#E34F26]" />,
  },
  {
    id: 6,
    icon: <FaCss3Alt className="text-[#3C9ADF]" />,
  },
  {
    id: 7,
    icon: <FaSass className="text-[#E91E63]" />,
  },
  {
    id: 8,
    icon: <FaPhp className="text-[#7A86B8]" />,
  },
  {
    id: 9,
    icon: <SiMysql className="text-[#F29221]" />,
  },
  {
    id: 10,
    icon: <FaFigma className="text-[#FF7262]" />,
  },
  {
    id: 11,
    icon: <SiStyledcomponents className="text-[#E91E63]" />,
  },
];

const Tecnologias = () => {
  return (
    <section
      id="tecnologias"
      className=" project-section h-screen max-sm:-mt-1 flex flex-col justify-center items-center "
    >
      <h1 className="text-primary mx-20 text-[2rem] font-bold max-sm:text-center">
        Tecnologias
      </h1>

      <div className="flex justify-center items-center mt-10 gap-9 mx-20 flex-wrap">
        {technologies.map((tech) => (
          <div
            className="text-[5rem] transition duration-[.5s] hover:-translate-y-4 cursor-grab"
            key={tech.id}
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologias;
