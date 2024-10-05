"use client";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import email from "../../public/assets/email.json";
interface PropsItem {
  target: {
    name: string;
    value: string;
  };
}
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleChange = ({ target: { name, value } }: PropsItem) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();
    setError("");
    setMessage("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields");
      return;
    }
    const isValidEmail = (email: string) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };
    if(!isValidEmail(form.email)){
      setError("Please enter a valid email address");
      return;
    }
    
    setLoading(true);
    try {
      await emailjs
        .send(
          "service_qacarkp",
          "template_k7v49d1",
          {
            from_name: form.name,
            to_name: "Hafid",
            from_email: form.email,
            to_email: "hafidlaadimi2003@gmail.com",
            message: form.message,
          },

          "u4ocT-ZhbF625GaDz"
        )

        .then(
          () => {
           
            setMessage("Message sent successfully");
            setForm({ name: "", email: "", message: "" });
            setLoading(false);
          },
          (error) => {
            if(error)
            setError("Something went wrong, please try again ");
            setLoading(false);
          }
        );
    } catch (error) { 
      setError("Something went wrong, please try again");
      throw  Error("Error Occured"+error);
    }
  
  };
  return (
    <section className="relative mt-10 h-full px-6 sm:px-16 overflow-hidden " id="contact">
      <div className="absolute     max-w-7xl mx-auto  flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-5 h-5 rounded-full bg-[#8a00c4]"
          />
          <motion.div
            initial={{
              height: "0vh",
            }}
            whileInView={{
              height: "110vh",
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-1 h-screen violet-gradient"
          />
        </div>
      </div>
      <p className="text-4xl text-start text-[#1AF2FF] font-poppins font-medium ml-10 my-1.5 shadow-inner shadow-[#a9f8fc] w-fit">
        Contact me
      </p>
      <div className="flex flex-col lg:flex-row gap-7 h-full w-full items-center justify-center px-6 my-10 md:mt-16  ">
      <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className=" flex  items-center lg:order-2 bg-white h-[40vh] w-[70vw] sm:w-[60vw] md:h-[30vh] md:w-[45vw] lg:w-[65vw] lg:h-[50vh] "
        >
         
            <Lottie animationData={email}  />
  
        </motion.div>
        <form className="mt-12 flex w-full md:max-w-[45vw] flex-col space-y-7 p-4 bg-[#8a00c4]/30 backdrop-blur-sm rounded-lg">
        {error && <p className="text-red-600">{error}</p>}
        {message && <p className="text-green-600">{message}</p>}
          <label className="space-y-2">
            <span className="text-white text-xl ">Full name</span>
            <input
              className="h-10 w-full bg-[#8a00c4] rounded-lg text-[#1AF2FF] px-3  outline-none"
              name="name"
              value={form.name}
              required
              type="text"
              placeholder="ex. , Hafid LAADIMI"
              onChange={handleChange}
            />
          </label>
          <label className="space-y-2">
            <span className="text-white text-xl">Email</span>
            <input
              className="h-10 w-full bg-[#8a00c4] rounded-lg text-[#1AF2FF] px-3  outline-none"
              name="email"
              type="email"
              value={form.email}
              required
              placeholder="ex. , contact@example.com"
              onChange={handleChange}
            />
          </label>
          <label className="space-y-2">
            <span className="text-white text-xl">Message</span>
            <textarea
              className="h-14 w-full bg-[#8a00c4] rounded-lg text-[#1AF2FF] px-3  outline-none"
              name="message"
              value={form.message}
              required
              rows={6}
              placeholder="Hey Hafid , I wanna hire you"
              onChange={handleChange}
            />
          </label>
          <button
            disabled={loading}
            className="h-10 w-full mx-2 bg-[#8a00c4] text-white text-xl rounded-lg  hover:bg-[#8900c48e] cursor-pointer transition duration-200 ease-in-out"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "Sending ..." : "Send message"}
          </button>
        </form>
      
      </div>
    </section>
  );
};

export default Contact;
