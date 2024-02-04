import Tech from "../../assets/TechLong.png";

interface CardProps {
  image: string;
  title: string;
  description: string;
  github: string;
  site: string;
}

const Card = ({ image, title, description, github, site }: CardProps) => {
  return (
    <div>
      <div className="border-2 rounded-tr-[2rem] rounded-bl-[2rem] border-white h-[370px] w-[330px]">
        <div className="p-5">
          <img className="rounded-md" src={image} alt="" />
          <p className="text-primary mt-3 text-xl text-center font-bold">
            {title}
          </p>
          <p className="text-secondary text-center font-md mt-3">
            {description}
          </p>
          <div className="flex mt-[1rem] justify-center gap-[1rem]">
            <a
              className="bg-gradient-to-r from-cyan-300 to-pink-500 w-[150px] font-medium text-center h-[2rem] rounded-md
        flex justify-center items-center hover:brightness-75"
              href={site}
            >
              Ver site
            </a>
            <a
              className="bg-gradient-to-r from-cyan-300 to-pink-500 w-[150px] font-medium text-center h-[2rem] rounded-md
        flex justify-center items-center hover:brightness-75"
              href={github}
            >
              Ver Repositório
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
