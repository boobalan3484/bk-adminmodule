import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../api/config";

const db = getFirestore(app);
console.log(db);
function StaffList() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      const querySnapshot = await getDocs(collection(db, "staff"));
      const staffData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStaff(staffData);
      console.log(staffData);
    };

    fetchTournaments();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {staff.map((staff) => (
        <div key={staff.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">Name: {staff.Name}</h3>
          <p>Specialization: {staff.Specialization}</p>
          <p>Records: {staff.Records}</p>
          <img src={staff.Picture} className=" h-8" alt="" />
          <p>Address: {staff.Address}</p>
          <p>City: {staff.City}</p>
          <p>District: {staff.District}</p>
        </div>
      ))}
    </div>
  );
}

export default StaffList;
