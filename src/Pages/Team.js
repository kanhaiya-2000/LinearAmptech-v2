import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BoardMember from "../Components/BoardMember";
import TeamMember from "../Components/TeamMember";
import teambg from "../assets/teambg.jpg";
import karun from "../assets/karun.png";
import minakshi from "../assets/minakshi.png";
import vivek from "../assets/vivek.jpeg";
import gowrish from "../assets/gowrish.jpg";
import kanhaiya from "../assets/kanhaiya.jfif";
import suyash from "../assets/suyash.jfif";
import devansh from "../assets/devansh.jfif";
import achal from "../assets/achal.jfif";
import vishu from "../assets/vishu.jfif";
import aditya from "../assets/aditya.jfif";

import hafizur from "../assets/hafizur.jpg";
import omkar from "../assets/omkar.jfif";
import manav from "../assets/manav.jfif";

import azhar from "../assets/azhar.jpg";
import himanshi from "../assets/himanshi.jpg";
import img from "../assets/img.png";

const boardMember = [
  {
    photo: karun,
    name: "Dr. Karun Rawat",
    position: "Founder & Chairman",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: minakshi,
    name: "Dr. Minakshi Rawat",
    position: "Founder & Director",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },

  {
    photo: gowrish,
    name: "Dr. Gowrish B",
    position: "Director",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: vivek,
    name: "Mr. Vivek Sharma",
    position: "Director",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
];

const coarTeam = [
  {
    photo: kanhaiya,
    name: "Kanhaiya Kumar",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/kanhaiya-kumar-1ba2b81a1/",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: suyash,
    name: "Suyash Jain",
    position: "Position",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },

  {
    photo: achal,
    name: "Achal Talati",
    position: "Position",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: devansh,
    name: "Devansh Joshi",
    position: "Position",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: vishu,
    name: "Vishu Saxena",
    position: "Position",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: aditya,
    name: "Aditya Raj Singh",
    position: "Position",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
];

const softwareTeam = [
  {
    photo: hafizur,
    name: "Hafizur Rahman",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/hafeez25/",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: omkar,
    name: "Omkar Darde",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/omkar-darde-680041215/",
    twitter: "#",
    facebook: "#",
  },

  {
    photo: manav,
    name: "Manav Singh Chauhan",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/manav-chauhan-430379267/",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: img,
    name: "Deepak Agrawal",
    position: "Position",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
];
const hardwareTeam = [
  {
    photo: azhar,
    name: "Azhar Ansari",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/azhar-ansari-767a85215/",
    twitter: "#",
    facebook: "#",
  },
  {
    photo: himanshi,
    name: "Himanshi Bagel",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/himanshi-baghel-846747234",
    twitter: "#",
    facebook: "#",
  },
];
const Team = () => {
  return (
    <div>
      <Header />

      <div
        className="h-[429px] w-[100%] flex justify-center items-center"
        style={{
          backgroundImage: `url(${teambg})`,
        }}
      >
        <div className=" ">
          <p className="font-bold text-[64px] text-white text-center">
            Meet Our Team
          </p>
          <p className="text-[24px] text-white font-medium text-center">
            Solutions for a smarter, more connected future
          </p>
        </div>
      </div>
      <div>
        <section className="bg-white ">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
              Board Of Directors
            </h1>

            <p className="max-w-2xl text-[20px] mx-auto my-6 text-center text-black ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              {boardMember.map((member) => {
                return <BoardMember member={member} />;
              })}
            </div>
          </div>
        </section>
      </div>
      {/* teams member  */}
      <div className="mt-10">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
                Core Team
              </h1>

              <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                {coarTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Software team */}
      <div className="mt-10">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
                Software Team
              </h1>

              <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                {softwareTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* hardware team */}
      <div className="mt-10">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
                Hardware Team
              </h1>

              <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                {hardwareTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
