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
    <div className="p-4 flex justify-center bg-slate-300 items-center h-screen">
      <div className=" w-max md:w-[50vw] border-t-blue-500 border-t-8 rounded-md bg-white shadow-xl p-4">
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
          <Link className=" text-blue-500 font-semibold px-2" to="/">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
