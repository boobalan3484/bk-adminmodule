import { FaMailBulk, FaUnlock, FaUser } from "react-icons/fa";
import { useState } from "react";
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../api/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log(
        "Account created for:",
        formData.username,
        "Email:",
        userCredential.user.email
      );
      
    } catch (error) {
      console.error("Error in user registration:", error.message);
    }
  };

  return (
    <div className=" text-white h-[100vh] flex justify-center items-center bg-cover  md:bg-cover sm:bg-cover md:bg-hero-pattern bg-center bg-footer-texture">
      <div className=" bg-slate-800 border w-[85vw] h-max portrait:h-max border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 md:w-[70vw] md:h-fit md:portrait:h-max sm:portrait:h-max sm:h-max lg:h-max lg:w-[60vw] xl:w-[50vw] xl:h-max 2xl:w-[45vw] 2xl:portrait:h-max   2xl:h-max  ">
        <h1 className=" text-2xl text-white font-bold text-center mb-6 xl:text-4xl lg:text-4xl ">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div className=" relative my-5 xl:mt-14 xl:text-2xl">
            <input
              className="xl:text-2xl block w-full py-2.3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer md:text-lg lg:text-xl "
              placeholder=""
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <label
              htmlFor=""
              className="text-sm absolute text-white mb-5 duration-300 transform translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-8 md:text-xl md:peer-focus:-translate-y-8 md:translate-y-3 lg:peer-focus:-translate-y-8
             xl:peer-focus:-translate-y-8 xl:translate-y-8 lg:translate-y-6"
            >
              Username:
            </label>
            <FaUser className=" h-3 absolute bottom-2 right-0" />
          </div>
          <div className=" relative my-5 xl:mt-12 xl:text-2xl">
            <input
              className="xl:text-2xl block w-full py-2.3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer md:text-lg lg:text-xl "
              placeholder=""
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label
              className="text-sm absolute text-white mb-5 duration-300 transform translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-8 md:text-xl md:peer-focus:-translate-y-8 md:translate-y-3 lg:peer-focus:-translate-y-8
          xl:peer-focus:-translate-y-8 xl:translate-y-8 lg:translate-y-6"
            >
              Email:
            </label>
            <FaMailBulk className=" h-3 absolute bottom-2 right-0" />
          </div>
          <div className=" relative my-5 xl:mt-12 xl:text-2xl">
            <input
              className="xl:text-2xl block w-full py-2.3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer md:text-lg lg:text-xl "
              placeholder=""
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label
              className="text-sm absolute text-white mb-5 duration-300 transform translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-8 md:text-xl md:peer-focus:-translate-y-8 md:translate-y-3 lg:peer-focus:-translate-y-8
          xl:peer-focus:-translate-y-8 xl:translate-y-8 lg:translate-y-6"
            >
              Password:
            </label>
            <FaUnlock className=" h-3 absolute bottom-2 right-0" />
          </div>
          <div className=" relative my-5 xl:mt-12 xl:text-2xl">
            <input
              className="xl:text-2xl block w-full py-2.3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer md:text-lg lg:text-xl "
              placeholder=""
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label
              className="text-sm absolute text-white mb-5 duration-300 transform translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-8 md:text-xl md:peer-focus:-translate-y-8 md:translate-y-3 lg:peer-focus:-translate-y-8
          xl:peer-focus:-translate-y-8 xl:translate-y-8 lg:translate-y-6"
            >
              Confirm Password:
            </label>
            <FaUnlock className=" h-3 absolute bottom-2 right-0" />
          </div>
          <div className=" flex justify-center">
            <button
              type="submit"
              className=" cursor-pointer  text-[18px] w-full mt-6  rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-0 transition-colors duration-300 xl:py-3 xl:text-xl md:py-2 lg:py-1"
            >
              Register
            </button>
          </div>
          <div className="flex justify-center text-sm xl:text-2xl ">
            <span className=" mt-4 lg:text-lg md:text-xl">
              Already have an account{" "}
              <Link to="/" className=" font-semibold">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
