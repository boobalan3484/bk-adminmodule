import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../api/config";
import pencil from "../Assets/pencil.png";
import { toast } from "react-toastify";

const db = getFirestore(app);
console.log(db);
function TournamentList() {
  const [tournaments, setTournaments] = useState([]);

  // useEffect(() => {
  const fetchTournaments = async () => {
    const querySnapshot = await getDocs(collection(db, "Tournament"));
    const tournamentData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTournaments(tournamentData);
    console.log(tournamentData);
  };

  // }, []);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const editstudentTname = async (id, Tname) => {
    await updateDoc(doc(db, "Tournament", id), {
      Tname,
    });
    fetchTournaments();
  };

  const editstudentfees = async (id, fees) => {
    await updateDoc(doc(db, "Tournament", id), {
      fees,
    });
    fetchTournaments();
  };
  const editstudentAddress = async (id, address) => {
    await updateDoc(doc(db, "Tournament", id), {
      address,
    });
    fetchTournaments();
  };
  const editstudentcity = async (id, city) => {
    await updateDoc(doc(db, "Tournament", id), {
      city,
    });
    fetchTournaments();
  };
  const editstudentdistrict = async (id, district) => {
    await updateDoc(doc(db, "Tournament", id), {
      district,
    });
    fetchTournaments();
  };
  const editstudentDate = async (id, date) => {
    await updateDoc(doc(db, "Tournament", id), {
      date,
    });
    fetchTournaments();
  };
  const editstudentTime = async (id, time) => {
    await updateDoc(doc(db, "Tournament", id), {
      time,
    });
    fetchTournaments();
  };
  const editstudentChiefGuest = async (id, chiefGuest) => {
    await updateDoc(doc(db, "Tournament", id), {
      chiefGuest,
    });
    fetchTournaments();
  };

  const deletTournament = async (id) => {
    await deleteDoc(doc(db, "Tournament", id));
    fetchTournaments();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tournaments.map((tournament) => (
        <div
          key={tournament.id}
          className="border grid grid-cols-1 p-4 rounded shadow"
        >
          <div className=" flex flex-row-reverse p-5">
            <button
              className=" rounded-sm text-white  bg-red-700   w-20"
              onClick={() => {
                deletTournament(tournament.id);
              }}
            >
              {" "}
              delete
            </button>
          </div>
          <div className=" grid grid-cols-[9fr,1fr] gap-2 ">
            <h3 className="text-lg font-bold">Tounament: {tournament.Tname}</h3>
            <button
              className=" w-max h-max r"
              onClick={() => {
                editstudentTname(
                  tournament.id,
                  prompt("enter name", tournament.Tname),

                  console.log(editstudentTname(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>Fees: {tournament.fees}</p>
            <button
              className=" w-max h-max "
              onClick={() => {
                editstudentfees(
                  tournament.id,
                  prompt("enter fees", tournament.fees)
                  // console.log(editstudentfees(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>Date: {tournament.date}</p>{" "}
            <button
              className=" h-max w-max"
              onClick={() => {
                editstudentDate(
                  tournament.id,

                  prompt("eneter date", tournament.date),
                  console.log(editstudentDate(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>Time: {tournament.time}</p>
            <button
              className=" h-max w-max"
              onClick={() => {
                editstudentTime(
                  tournament.id,
                  prompt("enter name", tournament.time),

                  console.log(editstudentTime(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>Address: {tournament.address}</p>
            <button
              className=" h-max w-max"
              onClick={() => {
                editstudentAddress(
                  tournament.id,
                  prompt("enter name", tournament.address),

                  console.log(editstudentAddress(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>City: {tournament.city}</p>
            <button
              className=" h-max w-max"
              onClick={() => {
                editstudentcity(
                  tournament.id,
                  prompt("enter name", tournament.city),

                  console.log(editstudentcity(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>District: {tournament.district}</p>
            <button
              className=" h-max w-max"
              onClick={() => {
                editstudentdistrict(
                  tournament.id,
                  toast.prompt("enter name", tournament.district),

                  console.log(editstudentdistrict(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>Chief Guest: {tournament.chiefGuest}</p>
            <button
              className=" h-max w-max"
              onClick={() => {
                editstudentChiefGuest(
                  tournament.id,
                  toast.prompt("enter chief guest name", tournament.chiefGuest),

                  console.log(editstudentChiefGuest(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TournamentList;
