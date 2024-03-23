import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { app } from "../api/config";
import pencil from "../Assets/pencil.png";
import { toast } from "react-toastify";

const db = getFirestore(app);
console.log(db);
function StaffList() {
  const [staff, setStaff] = useState([]);

  // useEffect(() => {
  const fetchTournaments = async () => {
    const querySnapshot = await getDocs(collection(db, "staff"));
    const staffData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setStaff(staffData);
    console.log(staffData);
  };

  // fetchTournaments();
  // }, []);
  useEffect(() => {
    fetchTournaments();
  }, []);
  const editstudentname = async (id, Name) => {
    await updateDoc(doc(db, "staff", id), {
      Name,
    });
    fetchTournaments();
  };

  const editstudentspecial = async (id, Specialization) => {
    await updateDoc(doc(db, "staff", id), {
      Specialization,
    });
    fetchTournaments();
  };
  const editstudentAddress = async (id, Address) => {
    await updateDoc(doc(db, "staff", id), {
      Address,
    });
    fetchTournaments();
  };
  const editstudentcity = async (id, City) => {
    await updateDoc(doc(db, "staff", id), {
      City,
    });
    fetchTournaments();
  };
  const editstudentdistrict = async (id, District) => {
    await updateDoc(doc(db, "staff", id), {
      District,
    });
    fetchTournaments();
  };
  const editstudentpicture = async (id, Picture) => {
    await updateDoc(doc(db, "staff", id), {
      Picture,
    });
    fetchTournaments();
  };

  const deletTournament = async (id) => {
    await deleteDoc(doc(db, "staff", id));
    toast.success('deleted')
    fetchTournaments();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {staff.map((staff) => (
        <div
          key={staff.id}
          className="border grid grid-cols-1 p-4 rounded shadow"
        >
          <div className=" flex flex-row-reverse p-5">
            <button
              className=" rounded-sm text-white  bg-red-700   w-20"
              onClick={() => {
                deletTournament(staff.id);
              }}
            >
              {" "}
              delete
            </button>
          </div>
          <div className=" grid grid-cols-[9fr,1fr] gap-2 ">
            <h3 className="text-lg font-bold">Name: {staff.Name}</h3>
            <button
              className=" w-max h-max r"
              onClick={() => {
                editstudentname(
                  staff.id,
                  prompt("enter name", staff.Tname),

                  console.log(editstudentname(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>Specialization: {staff.Specialization}</p>
            <button
              className=" w-max h-max r"
              onClick={() => {
                editstudentspecial(
                  staff.id,
                  prompt("enter specialization", staff.Specialization),

                  console.log(editstudentspecial(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>Records: {staff.Records}</p>
            <button
              className=" w-max h-max r"
              onClick={() => {
                editstudentAddress(
                  staff.id,
                  prompt("enter records", staff.Records),

                  console.log(editstudentAddress(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <img src={staff.Picture} className=" h-8" alt="" />
            <button
              className=" w-max h-max r"
              onClick={() => {
                editstudentpicture(
                  staff.id,
                  prompt("enter image url", staff.Picture),

                  console.log(editstudentpicture(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>Address: {staff.Address}</p>
            <button
              className=" w-max h-max r"
              onClick={() => {
                editstudentAddress(
                  staff.id,
                  prompt("enter address", staff.Address),

                  console.log(editstudentAddress(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>City: {staff.City}</p>
            <button
              className=" w-max h-max r"
              onClick={() => {
                editstudentcity(
                  staff.id,
                  prompt("enter city", staff.City),

                  console.log(editstudentcity(), "line54")
                );
              }}
            >
              <img src={pencil} className=" h-5 w-max" alt="" />
            </button>
            <p>District: {staff.District}</p>
            <button
              className=" w-max h-max r"
              onClick={() => {
                editstudentdistrict(
                  staff.id,
                  prompt("enter district", staff.District),

                  console.log(editstudentdistrict(), "line54")
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

export default StaffList;
