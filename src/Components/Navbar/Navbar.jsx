import Container from "../Container/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="relative">
        <div className="navbar bg-[#100c08]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden -order-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#100c08] rounded-box w-52"
              >
                <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                  <a href="#home">Home</a>
                </li>
                <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                  <a href="#about">About</a>
                </li>
                <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                  <a href="#education">Education</a>
                </li>
                <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                  <a href="#skills">Skills</a>
                </li>
                <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                  <a href="#projects">Projects</a>
                </li>
                <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <a className="lg:text-4xl text-white font-signature" href="#home">
              Rahin Islam
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                <a href="#home">Home</a>
              </li>
              <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                <a href="#about">About</a>
              </li>
              <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                <a href="#education">Education</a>
              </li>
              <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                <a href="#skills">Skills</a>
              </li>
              <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                <a href="#projects">Projects</a>
              </li>
              <li className="text-[18px] text-white font-medium capitalize hover:scale-105 duration-150">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
