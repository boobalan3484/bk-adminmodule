import { signOut } from "firebase/auth";
import { app } from "../api/config";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const LogoutButton = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <button
      className=" bg-slate-600 text-white px-4 py-0 hover:bg-slate-500"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
