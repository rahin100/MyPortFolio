import { FaLinkedin } from "react-icons/fa";
import Container from "../Container/Container";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <Container>
      <div className="relative">
        <div className="flex flex-col top-[35%] left-0 fixed">
          <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#0077b5]">
              <a
                href="https://www.linkedin.com/in/md-rahin-islam-86a511141/"
                className="flex justify-between items-center w-full text-white"
              >
                <>
                  LinkedIn <FaLinkedin size={30} />
                </>
              </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#39569c]">
              <a
                href="https://www.facebook.com/rahinislam2/"
                className="flex justify-between items-center w-full text-white"
              >
                <>
                  Facebook <FaFacebookSquare size={30} />
                </>
              </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-t from-[#833AB4] to-[#C13584]">
              <a
                href="https://www.instagram.com/rahin_islam/"
                className="flex justify-between items-center w-full text-white"
              >
                <>
                  Instagram <FaSquareInstagram size={30} />
                </>
              </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#24292E]">
              <a
                href="https://github.com/rahin100"
                className="flex justify-between items-center w-full text-white"
              >
                <>
                  Github <FaGithubSquare size={30} />
                </>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default SocialLinks;
