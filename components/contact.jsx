"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORM_ACTION_URL = "https://formspree.io/f/xpwajejg";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(FORM_ACTION_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        event.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="container mx-auto px-4 pt-36">
      <h2 className="text-[24px] xl:text-[32px] font-bold text-center mb-1">
        Let's Connect
      </h2>
      <p className="text-[16px] xl:text-[24px] font-bold text-center mb-8">
        Drop a message below and I will get back to you asap
      </p>
      <form
        className="max-w-full mx-auto bg-[#1c1c22] p-8 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="p-3 border-2 border-white rounded-xl bg-transparent focus:outline-none text-white w-full h-full"
              placeholder="Your message"
              required
            />
          </div>
          <div className="flex flex-col space-y-6">
            <input
              name="name"
              type="text"
              id="name"
              className="p-3 border-2 border-white rounded-xl bg-transparent text-white focus:outline-none"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              type="email"
              id="email"
              className="p-3 border-2 border-white rounded-xl bg-transparent text-white focus:outline-none"
              placeholder="Your email"
              required
            />
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className={`p-3 w-full text-white border-2 rounded-xl justify-center transition flex items-center gap-2 ${
                  isSubmitted
                    ? "bg-primary border-primary"
                    : "bg-background border-white hover:border-primary hover:text-primary"
                } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              >
                <span className="font-semibold items-center">
                  {isSubmitted ? "Submitted" : "Send"}
                </span>
                <span>
                  {isSubmitted ? <SiTicktick /> : <FaLocationArrow />}
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
