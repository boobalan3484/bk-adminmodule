import LogoutButton from "./LogOut";

function Home() {
  return (
    <div>
      <h1>Welcome to Bohar karate training school Admin Portal</h1>
      <div className=" py-3 px-3">
        <LogoutButton />
      </div>
    </div>
  );
}

export default Home;
