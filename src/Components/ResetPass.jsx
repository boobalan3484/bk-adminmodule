import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../api/config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Please check your inbox.");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
      });
  };

  return (
    <div className=" text-white h-[100vh] flex justify-center items-center bg-cover  md:bg-cover sm:bg-cover md:bg-hero-pattern bg-center bg-footer-texture">
      <div className=" bg-slate-800 border w-[85vw] h-max portrait:h-max border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 md:w-[70vw] md:h-fit md:portrait:h-max sm:portrait:h-max sm:h-max lg:h-max lg:w-[60vw] xl:w-[50vw] xl:h-max 2xl:w-[30vw] 2xl:portrait:h-max   2xl:h-max  ">
        <form className="" onSubmit={handleResetPassword}>
          <div className=" grid grid-cols-1">
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" py-3 px-2 text-black focus:outline-none"
            />
          </div>
          <div className=" mt-4 flex justify-center bg-slate-400 py-3 rounded-sm">
            <button type="submit">Send Password Reset Email</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
