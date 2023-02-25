import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const TeamMember = (props) => {
  return (
    <div className="flex flex-row items-center justify-around h-[215px] w-[594px]  border">
      <img
        className="object-cover w-[148px] h-[164px] "
        src={props.member.photo}
        alt=""
      />
      <div className="self-center justify-self-start">
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

          <a
            href={props.member.linkedin}
            className="mx-2 text-black  "
            aria-label="Github"
          >
            <BsLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
