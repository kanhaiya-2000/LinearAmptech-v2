import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BoardMember from "../Components/BoardMember";
import TeamMember from "../Components/TeamMember";
import teambg from "../assets/teambg.jpg";

import karun from "../assets/profile/karun.png";
import minakshi from "../assets/profile/minakshi.png";
import vivek from "../assets/profile/vivek.jpeg";
import gowrish from "../assets/profile/gowrish.jpg";
import kanhaiya from "../assets/profile/kanhaiya.jfif";
import suyash from "../assets/profile/suyash.jfif";
import devansh from "../assets/profile/devansh.jfif";
import achal from "../assets/profile/achal.jfif";
import vishu from "../assets/profile/vishu.jfif";
import aditya from "../assets/profile/aditya.jfif";

import hafizur from "../assets/profile/hafizur.jpg";
import omkar from "../assets/profile/omkar.jfif";
import manav from "../assets/profile/manav.jfif";
import deepak from "../assets/profile/deepak.jpg";

import rahul from "../assets/profile/rahul.jpg";
import bipul from "../assets/profile/bipul.jpg";
import azhar from "../assets/profile/azhar.jfif";
import himanshi from "../assets/profile/himanshi.jfif";

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
    photo: vishu,
    name: "Vishu Saxena",
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
    photo: suyash,
    name: "Suyash Jain",
    position: "Position",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },

  // {
  //   photo: aditya,
  //   name: "Aditya Raj Singh",
  //   position: "Position",
  //   linkedin: "#",
  //   twitter: "#",
  //   facebook: "#",
  // },
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
    photo: deepak,
    name: "Deepak Agrawal",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/deepakjsagarwal/",
    twitter: "#",
    facebook: "#",
  },
];
const hardwareTeam = [
  {
    photo: rahul,
    name: "Rahul Kumar",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-675a18190/",
    twitter: "",
    facebook: "",
  },
  {
    photo: bipul,
    name: "Bipul Raj",
    position: "Position",
    linkedin: "https://www.linkedin.com/in/bipul-raj-3a7596201/",
    twitter: "",
    facebook: "",
  },
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
              Our board of directors comprises seasoned professionals who
              possess a wealth of knowledge and expertise in various fields. We
              are honored to have a world-renowned power amplifier expert Dr.
              Karun Rawat, a professor from IIT Roorkee, and an experienced
              member in the field of electronics communication on our board.
              With their diverse skill sets and leadership, we are well-equipped
              to steer our organization towards success and deliver outstanding
              outcomes to our stakeholders
            </p>

            <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              {boardMember.map((member) => {
                return <BoardMember member={member} />;
              })}
            </div>
          </div>
        </section>
      </div>
      {/* core team  */}
      <div className="mt-2">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
                Core Team
              </h1>
              <p className="max-w-2xl text-[20px] mx-auto my-6 text-center text-black ">
                Our core team comprises talented individuals with diverse
                backgrounds and experiences. Our members hail from some of the
                largest software companies in the world, including JPMC,
                Enphase, Oracle, Citrix Systems, Sprinklr, Intuit, IHC, and
                Sears. With their extensive expertise in various domains, our
                team is well-equipped to deliver innovative solutions and
                exceptional outcomes to our clients.
              </p>

              <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-4 md:grid-cols-2 xl:grid-cols-4">
                {coarTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Software team */}
      <div className="mt-4">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-2 mx-auto">
              <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
                Software Team
              </h1>

              <div className="grid grid-cols-1 gap-8 mt-2 xl:mt-4 md:grid-cols-2 xl:grid-cols-4">
                {softwareTeam.map((member) => {
                  return <TeamMember member={member} />;
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* hardware team */}
      <div className="mt-6">
        <div>
          <section className="bg-white ">
            <div className="container px-6 py-2 mx-auto">
              <h1 className="text-[40px] font-semibold text-center text-black capitalize ">
                Hardware Team
              </h1>

              <div className="grid grid-cols-1 gap-8  xl:mt-4 md:grid-cols-2 xl:grid-cols-4">
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
