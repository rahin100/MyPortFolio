/* eslint-disable react/no-unescaped-entities */
import Container from "../Container/Container";
import { MdDownloadForOffline } from "react-icons/md";
import Resume from "../../../public/Resume.pdf"


const Banner = () => {
  return (
    <Container>
      <div
        className="hero min-h-[90vh] mb-[80px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/FJCMMqS/3-Sl-Soi-Y4-RKW9mhrn9-Kl-EA.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-8">
              HELLO, I'M RAHIN
            </h1>
            <p className="text-xl lg:text-4xl font-medium text-white mb-6 lg:mb-10">
              A Frontend focused Web Developer building the Frontend of
              Websites.
            </p>
            {/* <button className="btn btn-primary"></button> */}
            <a
              href={Resume}
              download ="Resume"
              className="btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-medium text-[16px]"
            >
              Download Resume
              <MdDownloadForOffline className="text-white text-[16px]" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;

