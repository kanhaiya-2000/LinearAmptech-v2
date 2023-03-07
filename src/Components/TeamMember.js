import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const TeamMember = (props) => {
  return (
    <div className="flex flex-col items-center justify-between   border ">
      <img
        className="object-cover w-[100%] h-[auto] "
        src={props.member.photo}
        alt=""
      />

      <div className="self-start m-4 justify-self-start">
        <h1 className="mt-2 text-2xl font-semibold text-black capitalize  group-hover:text-white">
          {props.member.name}
        </h1>

        <p className="mt-2 text-black capitalize text-[20px]  group-hover:text-gray-300">
          {props.member.position}
        </p>

        <div className="flex mt-3 -mx-2">
          <a href="#" className="mx-2 text-black  " aria-label="Reddit">
            <AiFillTwitterCircle size={26} />
          </a>

          <a href="#" className="mx-2 text-black  " aria-label="Facebook">
            <BsFacebook size={22} />
          </a>

          <a href="#" className="mx-2 text-black  " aria-label="Github">
            <BsLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
