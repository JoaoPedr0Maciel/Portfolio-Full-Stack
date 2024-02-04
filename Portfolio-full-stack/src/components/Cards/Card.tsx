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
      <div className="border-2  rounded-tr-[2rem] rounded-bl-[2rem] border-white h-[370px] w-[330px]">
        <div className="p-4 flex flex-col">
          <img
            className="rounded-md h-[10rem] mb-[0.5rem]"
            src={image}
            alt=""
          />
          <p className="text-primary text-xl text-center font-bold">{title}</p>
          <p className="text-secondary text-center font-md mt-[0.5rem] h-[4rem]">
            {description}
          </p>
          <div className="flex mt-[1rem] justify-center gap-[1rem]">
            <a
              className="bg-gradient-to-r from-cyan-300 to-pink-500 w-[150px] font-medium text-center h-[2rem] rounded-md
        flex justify-center items-center hover:brightness-75"
              target="_blank"
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
