import TournamentList from "./TournamentCard";
import LogoutButton from "./LogOut";
import { Link } from "react-router-dom";
import StaffList from "./StaffCard";

function Home() {
  return (
    <div>
      <div className=" text-white bg-amber-600 flex justify-between flex-row-reverse items-center">
        <div className=" flex flex-row-reverse gap-5 py-5 px-8">
          <LogoutButton />
          <nav className=" flex gap-5">
            <Link to="/tournament">Tournament</Link>
            <Link to="/staff-details">Staff details</Link>
          </nav>
        </div>
        <h1 className=" px-10">
          Welcome to Bohar karate training school Admin Portal
        </h1>
      </div>
      <div className=" p-2">
        <h1 className=" text-center font-thin text-xl py-4">
          Tournament details
        </h1>
        <TournamentList />
      </div>
      <div className=" p-2">
        <h1 className=" text-center font-thin text-xl py-4">Master details</h1>
        <StaffList />
      </div>
    </div>
  );
}

export default Home;
