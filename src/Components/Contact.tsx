import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MyContext } from "./Context";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  // const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const context = useContext(MyContext);
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    isButtonDisabled,
    setIsButtonDisabled,
  }: any = context;

  // use emailjs for send message on gmail
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_ippu9b1", "template_8uhpsbe", form.current, {
          publicKey: "MImGqGN1YXPN6fmPU",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      e.currentTarget.reset(); // Reset the form
    } else {
      console.error("Form reference is null.");
    }
  };

  // check if all input section will writed
  useEffect(() => {
    if (name && email && message) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, email, message]);

  // error message
  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   const newErrors = {
  //     name: name === "" ? "Name is required" : "",
  //     email: email === "" ? "Email is required" : "",
  //     message: message === "" ? "Message is required" : "",
  //   };

  //   setErrors(newErrors);

  //   if (!newErrors.name && !newErrors.email && !newErrors.message) {
  //     console.log("Form submitted:", { name, email, message });
  //   }
  // };

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
        <form ref={form} onSubmit={sendEmail}>
          {/* name input */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              name="user_name"
              type="text"
              id="title"
              placeholder="What's your good name?"
              className="w-full bg-[#ffffff] border-none border-gray-600 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F04D40]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )} */}
          </div>
          {/* email input */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium mb-2">
              Your email
            </label>
            <input
              name="user_email"
              type="text"
              id="title"
              placeholder="What's your web address?"
              className="w-full bg-[#ffffff] border-none border-gray-600 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#F04D40]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )} */}
          </div>
          {/* message input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="What you want to say?"
              className="w-full bg-[#ffffff] border-none rounded-md p-2 text-black h-32 focus:outline-none focus:ring-2 focus:ring-[#F04D40]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )} */}
          </div>
          <button
            type="submit"
            className="mt-[10px] border-none rounded-[4px] bg-[#F04D40] hover:bg-red-600 cursor-pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout"
            disabled={isButtonDisabled}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
