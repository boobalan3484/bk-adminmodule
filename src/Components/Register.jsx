import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../api/config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const auth = getAuth(app);

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error(`Passwords do not match.`);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" text-white h-[100vh] flex justify-center items-center bg-cover  md:bg-cover sm:bg-cover md:bg-hero-pattern bg-center bg-footer-texture">
      <div className=" bg-slate-800 border w-[85vw] h-max portrait:h-max border-slate-100 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 md:w-[70vw] md:h-fit md:portrait:h-max sm:portrait:h-max sm:h-max lg:h-max lg:w-[60vw] xl:w-[50vw] xl:h-max 2xl:w-[45vw] 2xl:portrait:h-max   2xl:h-max  ">
        <h1 className=" text-center font-extralight text-xl "> Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 p-2 border text-black border-gray-300 rounded focus:outline-slate-600"
            />
          </label>
          <label className="flex flex-col">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border text-black border-gray-300 rounded focus:outline-slate-600"
            />
          </label>
          <label className="flex flex-col">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border text-black border-gray-300 rounded focus:outline-slate-600"
            />
          </label>
          <label className="flex flex-col">
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 p-2 border text-black border-gray-300 rounded focus:outline-slate-600"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        {error && <p className="text-red-500">{error}</p>}
        <div className=" flex justify-center mt-2">
          <span className=" text-blue-500">Already have Account </span>
          <Link className=" text-white font-semibold px-2" to="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
