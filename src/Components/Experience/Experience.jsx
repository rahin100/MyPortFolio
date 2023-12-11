/* eslint-disable react/no-unescaped-entities */
import Container from "../Container/Container";

const Experience = () => {
  return (
    <Container>
      <div className="mb-[80px]">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white text-center mb-4 lg:mb-8">
          Experience
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          <div className="w-full md:w-[500px] lg:w-[600px] h-[280px]">
            <img
              src="https://utsavghimire.com.np/static/media/experience.69de8cd1.jpg"
              className="w-full h-full object-cover"
              alt="Learning Experience"
            ></img>
          </div>
          <div className="collapse collapse-plus w-full max-w-[600px] bg-base-200 mt-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-white bg-[#060606] border-none">
              Learning Experience (2023-Present)
            </div>
            <div className="collapse-content p-4">
              <p className=" text-[16px] text-medium ">
                In the last few months, I've had a generally positive
                experience. I've learned to appreciate the value of time. It has
                been essential to work on projects regularly. When errors arise
                during coding, it feels like engaging in a battle. After
                numerous attempts, resolving the errors brings a tremendous
                sense of accomplishment. There have been moments of joy when
                overcoming challenges. Sometimes, it feels like I've forgotten
                certain things amidst the ongoing journey. From the beginning
                until now, I am consistently making efforts to learn and eagerly
                anticipating new lessons ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
