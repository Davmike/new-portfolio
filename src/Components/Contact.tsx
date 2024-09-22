import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MyContext } from "./Context";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
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

  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const form = useRef<HTMLFormElement>(null);

  // Validation logic
  const handleValidation = () => {
    const newErrors = { name: "", email: "", message: "" };

    // Check if name is empty
    if (!name.trim()) {
      newErrors.name = "Please write your good name";
    }

    // Check if email is empty or invalid
    if (!email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Check if message is empty
    if (!message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  // Handle form submit
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (handleValidation()) {
      if (form.current) {
        emailjs
          .sendForm("service_ippu9b1", "template_8uhpsbe", form.current, "MImGqGN1YXPN6fmPU")
          .then(
            () => {
              console.log("SUCCESS!");
              setSuccessMessage("YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY."); // Set success message
              // Clear input fields
              setName('');
              setEmail('');
              setMessage('');
              setErrors({ name: "", email: "", message: "" }); // Clear errors on success

              // Clear success message after 5 seconds
              setTimeout(() => {
                setSuccessMessage(""); // Clear the success message
              }, 5000);
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    }
  };

  // Check if all inputs are filled correctly
  useEffect(() => {
    if (name.trim() && email.trim() && message.trim() && handleValidation()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, email, message]);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      ".contact-content",
      { rotateY: 90, opacity: 0, scale: 0.8 },
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
        },
      }
    );

    gsap.fromTo(
      "form input, form textarea, form button",
      { opacity: 0, y: 20, scale: 0.9 },
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
        },
      }
    );
  }, []);

  {/* contact main div start here */ }

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
              className={`w-full bg-[#ffffff] border rounded-md p-2 text-black focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-[#F04D40]"
                }`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Your email
            </label>
            <input
              name="user_email"
              type="text"
              id="email"
              placeholder="What's your email?"
              className={`w-full bg-[#ffffff] border rounded-md p-2 text-black focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-[#F04D40]"
                }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
              className={`w-full bg-[#ffffff] border rounded-md p-2 text-black h-32 focus:outline-none focus:ring-2 ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-[#F04D40]"
                }`}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-[10px] border-none rounded-[4px] bg-[#F04D40] hover:bg-red-600 cursor-pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout"
            aria-disabled={isButtonDisabled}
          >
            SUBMIT
          </button>
        </form>

        {successMessage && (
          <p className="text-green-500 text-center mt-6">{successMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;