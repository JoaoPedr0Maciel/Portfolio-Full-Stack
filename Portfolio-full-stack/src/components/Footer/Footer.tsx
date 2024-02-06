import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#283652] p-3 h-[3rem] w-full font-bold text-secondary flex items-center justify-between">
      <p className="ml-10">&copy; Desenvolvido por João Pedro Maciel</p>
      <div className="mr-10 flex gap-1">
        <FaWhatsapp className="text-xl text-[#26C009]" />
        <FaInstagram className="text-xl text-[#D408C7]" />
      </div>
    </footer>
  );
};

export default Footer;
