import { signOut } from "firebase/auth";
import { auth } from "../api/config";
import { useNavigate } from "react-router-dom";

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
    <button className=" bg-slate-600 text-white px-2" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
