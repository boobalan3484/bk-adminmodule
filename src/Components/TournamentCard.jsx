import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../api/config";

const db = getFirestore(app);
console.log(db);
function TournamentList() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      const querySnapshot = await getDocs(collection(db, "Tournament"));
      const tournamentData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTournaments(tournamentData);
      console.log(tournamentData);
    };

    fetchTournaments();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tournaments.map((tournament) => (
        <div key={tournament.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">Tounament: {tournament.Tname}</h3>
          <p>Fees: {tournament.fees}</p>
          <p>Date: {tournament.date}</p>
          <p>Time: {tournament.time}</p>
          <p>Address: {tournament.address}</p>
          <p>City: {tournament.city}</p>
          <p>District: {tournament.district}</p>
          <p>Chief Guest: {tournament.chiefGuest}</p>
        </div>
      ))}
    </div>
  );
}

export default TournamentList;
