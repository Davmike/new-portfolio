import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useEffect(() => {
    // GSAP animation for the contact section
    gsap.fromTo(
      ".contact-content",
      {
        rotateY: 90,
        opacity: 0,
        scale: 0.8,
      },
      {
        rotateY: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1,
          markers: false,
        },
      }
    );

    // GSAP animation for form elements with bounce
    gsap.fromTo(
      "form input, form textarea, form button",
      {
        opacity: 0,
        y: 20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "bounce.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "form",
          start: "top 90%",
          end: "bottom 100%",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div
      className="contact-container min-h-screen flex items-center justify-center bg-[#122b43] text-white p-4"
      id="contact"
    >
      <div className="contact-content max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mt-[30px] md:text-3xl">
          Contact me
        </h1>
        <div className="w-full flex justify-center items-center flex-col mb-8">
          <div className="w-5 h-1 bg-[#F04D40] mt-1"></div>
          <p className="text-[14px]">mikeladzedav@gmail.com</p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="What you're writing about?"
              className="w-full bg-[#ffffff] border-none border-gray-600 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F04D40]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Full message comes here..."
              className="w-full bg-[#ffffff] border-none rounded-md p-2 text-black h-32 focus:outline-none focus:ring-2 focus:ring-[#F04D40]"
            />
          </div>
          <button
            type="submit"
            className="mt-[10px] border-none rounded-[4px] bg-[#F04D40] pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
