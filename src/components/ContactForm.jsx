"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setEmailError("");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setStatus("sending");

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      );

      console.log(result.text);
      setStatus("");
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("");
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full px-3 py-2 border border-neutral-300 outline-none  rounded h-14 focus:border-neutral-400 transition-colors autofill:shadow-[inset_0_0_0px_100px_#ffffff]"
        />

        <div className="flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className={`w-full px-3 py-2 border  outline-none border-neutral-300 rounded h-14 focus:border-neutral-400 transition-colors autofill:shadow-[inset_0_0_0px_100px_#ffffff] ${
              emailError && "border-red-500"
            } `}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-neutral-300  focus:border-neutral-400 outline-none rounded min-h-[13rem] transition-colors"
          rows="4"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          className="group bg-neutral-800 text-white px-4 py-2 rounded flex w-fit items-center gap-2 hover:bg-white hover:text-black transition-all"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <AiOutlineLoading3Quarters size={20} className="animate-spin" />
          ) : (
            <IoIosSend size={20} />
          )}
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
