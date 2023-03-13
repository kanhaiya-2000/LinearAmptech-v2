import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const BoardMember = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col items-center justify-start w-[300px] lg:w-[300px] border">
      <img
        className="object-cover w-[100%]   "
        src={props.member.photo}
        alt=""
      />

      <div className="self-start m-4 justify-self-start font-Roboto">
        <h1 className="mt-2 text-2xl font-semibold text-slate-900 capitalize  group-hover:text-white">
          {props.member.name}
        </h1>

        {props.member.position.map((pos) => {
          return (
            <p className=" text-slate-800 capitalize text-[18px]  group-hover:text-gray-300">
              {pos}
            </p>
          );
        })}

        <div className="flex mt-3 -mx-2 justify-self-end">
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
            target={"_blank"}
          >
            <BsLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoardMember;
