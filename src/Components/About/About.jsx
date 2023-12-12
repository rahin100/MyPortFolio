import Container from "../Container/Container";
import { FaPhoneAlt } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      <div id="about" className="bg-[#060606] mb-[80px] animate__animated animate__fadeInDownBig">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white text-center mb-4 lg:mb-3 pt-8">
          About Me
        </h2>
        <h4 className="text-2xl lg:text-2xl text-gray-500 text-center mb-2 lg:mb-2">
          Here you will find more information about me.
        </h4>
        <div>
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
              <div className="">
                <img
                  src="https://i.ibb.co/6X2zr2Q/274562127-2316927051782474-27322.jpg"
                  className="max-w-full lg:max-w-sm  rounded-lg shadow-2xl lg:order-last lg:w-full lg:mr-8 mx-auto hover:rotate-12 overflow-hidden"
                  alt="Profile"
                />
              </div>

              <div className="lg:w-1/2">
                <h4 className="text-2xl lg:text-5xl text-white mb-4 lg:mb-8">
                  Get to know me!
                </h4>
                <p className="text-base lg:text-xl font-medium text-white mb-6 lg:mb-10 lg:text-left">
                  My name is Rahin Islam. I completed my BSc in Computer Science
                  and Engineering from Eastern University in Dhaka, Bangladesh.
                  I acquired my web development skills from a renowned company,
                  and now I am a Frontend Web Developer specializing in building
                  the front-end of websites.Explore some of my work in the
                  Projects section.
                </p>
                <button
                  onClick={scrollToContact}
                  className="btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-medium text-[16px]"
                >
                  <FaPhoneAlt className="text-white text-[16px]" /> Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
