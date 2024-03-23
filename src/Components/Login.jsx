import { useState } from "react";
import { app } from "../api/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  // sendPasswordResetEmail,
} from "firebase/auth";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const auth = getAuth(app);

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("successfully login");
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  // const handleForgotPassword = async () => {
  //   if (!email) {
  //     setError("Please enter your email address to reset your password.");
  //     return;
  //   }
  //   try {
  //     await sendPasswordResetEmail(auth, email);
  //     setError("Password reset email sent!");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  return (
    <div className=" text-white h-[100vh] flex justify-center items-center bg-small  md:bg-hero ">
      <div className=" bg-slate-800 border w-[85vw] h-max portrait:h-max border-slate-100 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 md:w-[70vw] md:h-fit md:portrait:h-max sm:portrait:h-max sm:h-max lg:h-max lg:w-[60vw] xl:w-[40vw] xl:h-max 2xl:w-[35vw] 2xl:portrait:h-max   2xl:h-max  ">
        <h1 className=" text-center text-white font-extralight text-xl">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-4"
        >
          <label className="flex text-white flex-col">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="mt-1 p-2 border text-black border-gray-300 rounded focus:outline-slate-200 focus:outline-1"
            />
          </label>
          <label className="flex text-white flex-col">
            Password:
            <input
              type="text"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 border text-black border-gray-300 rounded focus:outline-slate-200"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
          {/* <a
            href="#!"
            onClick={handleForgotPassword}
            className="text-sm text-white text-center md:text-base  hover:text-blue-700"
          >
            Forgot Password?
          </a> */}
        </form>
        {error && <p className="text-red-500">{error}</p>}
        {/* <div className=" text-blue-600 md:mt-3 md:text-base text-sm flex justify-center">
          <span>New Here?</span>
          <Link className=" px-2 text-white hover:text-blue-600" to="/register">
            Register
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default LoginForm;
