/* eslint-disable react/no-unescaped-entities */
import Container from "../Container/Container";
import { MdDownloadForOffline } from "react-icons/md";

const Banner = () => {
  return (
    <Container>
      <div>
        <div className="hero min-h-[85vh] bg-[#100c08]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/6X2zr2Q/274562127-2316927051782474-27322.jpg"
              className="lg:max-w-sm rounded-lg shadow-2xl lg:order-last lg:w-1/2 lg:mr-8"
              alt="Profile Image"
            />
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-8">
                HELLO, I'M RAHIN
              </h1>
              <p className="text-xl lg:text-4xl font-medium text-white mb-6 lg:mb-10">
                A Frontend focused Web Developer building the Frontend of
                Websites.
              </p>
              {/* <button className="btn btn-primary"></button> */}
              <a href="https://drive.google.com/file/d/1Iv_sq3kjKsD55m05SDnTruZyvhyIHoqK/view?usp=sharing" download className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-medium text-[16px]">Download Resume <MdDownloadForOffline className="text-white text-[16px]" /> </a>

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
