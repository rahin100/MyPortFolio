import { useRef } from "react";
import Container from "../Container/Container";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7uy8i1h",
        "template_5v1cbf4",
        form.current,
        "v-elwlH5hSj_cLfn5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <div id="contact" className="mb-[80px]">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white text-center">
          Contact
        </h2>
        <div>
          <div className="">
            <div className="flex items-center justify-center">
              <div className="bg-[#100c08] w-[1100px] rounded-lg shadow-lg">
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[18px] text-bold text-white">
                        Name
                      </span>
                    </label>
                    <input
                      name="from_name"
                      type="text"
                      placeholder="Enter Your Name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[18px] text-bold text-white">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Enter Your Email"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[18px] text-bold text-white">
                        Message
                      </span>
                    </label>
                    <textarea
                      name="message"
                      className="textarea textarea-bordered h-[150px] w-full"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-none text-medium text-[16px] w-full">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

//
