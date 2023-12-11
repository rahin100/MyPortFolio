import Container from "../Container/Container";

const Projects = () => {
  return (
    <Container>
      <div className="mb-[80px]">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white text-center mb-4 lg:mb-6">
          Projects
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="card  bg-[#060606] shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/rvxQ8mn/Capture1.png"
                alt="donation-website"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                BloodHarbor
              </h2>
              <p className="text-white">Welcome to BloodHarbor, where we believe in the power of giving. Founded with a noble mission to save lives, we are dedicated to promoting and facilitating blood donation for those in need blood.</p>
              <div className="card-actions justify-end">
                <a href="https://github.com/rahin100/blood-donation-client-side/tree/main" className="badge badge-outline text-white p-3 bg-gradient-to-r from-cyan-500 to-blue-500 border-none">Source Code</a>
                <a href="https://blood-donation-react.web.app/" className="badge badge-outline text-white p-3 bg-gradient-to-r from-cyan-500 to-blue-500 border-none">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="card  bg-[#060606] shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/3vZkQbb/Capture3.png"
                alt="service-website"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                BloomCraft Gardens
              </h2>
              <p className="text-white">BloomCraft Gardens is a charming and enchanting botanical haven that spans over 10 acres of lush, vibrant beauty. Nestled in a tranquil countryside setting, this idyllic garden is a sanctuary for nature enthusiasts and garden aficionados alike. The gardens boast an exquisite collection of flora from around the world, featuring a diverse array of flowers, trees, and shrubs that bloom in a symphony of colors throughout the seasons.</p>
              <div className="card-actions justify-end">
                <a href="https://github.com/rahin100/bloom-craft-client-side/tree/main" className="badge badge-outline text-white p-3 bg-gradient-to-r from-cyan-500 to-blue-500 border-none">Source Code</a>
                <a href="https://gardening-react-project.web.app/" className="badge badge-outline text-white p-3 bg-gradient-to-r from-cyan-500 to-blue-500 border-none">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="card bg-[#060606] shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/WHdSbPL/Capture2.png"
                alt="shopping-website"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                PoshParade
              </h2>
              <p className="text-white">Discover the latest trends and timeless classics at our PoshParade fashion brand-shop. We offer a curated collection of apparel, accessories, and footwear that reflects style, quality, and individuality. Elevate your wardrobe with our handpicked selection, showcasing a fusion of contemporary and traditional fashion.</p>
              <div className="card-actions justify-end">
                <a href="https://github.com/rahin100/brandshop-client-side" className="text-white badge badge-outline p-3 bg-gradient-to-r from-cyan-500 to-blue-500 border-none">Source Code</a>
                <a href="https://react-brandshop-project.web.app/" className="text-white badge badge-outline p-3 bg-gradient-to-r from-cyan-500 to-blue-500 border-none">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
