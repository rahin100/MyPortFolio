import Container from "../Container/Container";
import { FaBook } from "react-icons/fa6";

const Education = () => {
  return (
    <Container>
      <div className="mb-[80px]">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white text-center mb-4 lg:mb-4">
          Education
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-6">
          <div className="flex items-center justify-center bg-black gap-4 p-8 rounded-lg mb-6 lg:mb-0">
            <div>
              <FaBook className="text-5xl text-white" />
            </div>
            <div>
              <p className="text-xl lg:text-xl font-medium text-white mb-2 lg:mb-2">
                2004-2014
              </p>
              <h4 className="text-2xl lg:text-2xl font-semibold text-white mb-4 lg:mb-3">
                School Leaving Certificate
              </h4>
              <p className="text-xl lg:text-xl font-medium text-white mb-2 lg:mb-2">
                Jatrabari Ideal High School
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-black gap-4 p-8 rounded-lg mb-6 lg:mb-0">
            <div>
              <FaBook className="text-5xl text-white" />
            </div>
            <div>
              <p className="text-xl lg:text-xl font-medium text-white mb-2 lg:mb-2">
                2014-2016
              </p>
              <h4 className="text-2xl lg:text-2xl font-semibold text-white mb-4 lg:mb-3">
                College Leaving Certificate
              </h4>
              <p className="text-xl lg:text-xl font-medium text-white mb-2 lg:mb-2">
                DR.Mahabubur Rahman Mollah College
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-black gap-4 p-8 rounded-lg">
            <div>
              <FaBook className="text-5xl text-white" />
            </div>
            <div>
              <p className="text-xl lg:text-xl font-medium text-white mb-2 lg:mb-2">
                2017-2021
              </p>
              <h4 className="text-2xl lg:text-2xl font-semibold text-white mb-4 lg:mb-3">
                Varsity Leaving Certificate
              </h4>
              <p className="text-xl lg:text-xl font-medium text-white mb-2 lg:mb-2">
                Eastern University
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Education;
