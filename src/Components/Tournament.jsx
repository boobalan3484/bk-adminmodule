import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { app } from "../api/config";
import { getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const db = getFirestore(app);

function Tournament() {
  // const [name, setName] = useState("");
  // const [fees, setFees] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [district, setDistrict] = useState("");
  // const [chiefGuest, setChiefGuest] = useState("");/

  const navigate = useNavigate();

  const [value, setValue] = useState({
    Tname: "",
    fees: "",
    date: "",
    time: "",
    address: "",
    city: "",
    district: "",
    chiefGuest: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    let names = e ? e?.target.name : "";

    switch (names) {
      case "Tname":
        setValue((prev) => ({
          ...prev,
          Tname: e?.target.value,
        }));
        break;

      case "fees":
        setValue((prev) => ({
          ...prev,
          fees: e?.target.value,
        }));
        break;

      case "date":
        setValue((prev) => ({
          ...prev,
          date: e?.target.value,
        }));
        break;

      case "time":
        setValue((prev) => ({
          ...prev,
          time: e?.target.value,
        }));
        break;

      case "address":
        setValue((prev) => ({
          ...prev,
          address: e?.target.value,
        }));
        break;

      case "city":
        setValue((prev) => ({
          ...prev,
          city: e?.target.value,
        }));
        break;

      case "district":
        setValue((prev) => ({
          ...prev,
          district: e?.target.value,
        }));
        break;

      case "chiefGuest":
        setValue((prev) => ({
          ...prev,
          chiefGuest: e?.target.value,
        }));
        break;

      default:
        break;
    }
  };

  console.log("finalcheck", value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "Tournament"), value);
      console.log("checkfromtry", docRef);
      toast.success("Document written with ID: ");
      setValue((prevvalue) => ({
        ...prevvalue,
        Tname: "",
        fees: "",
        date: "",
        time: "",
        address: "",
        city: "",
        district: "",
        chiefGuest: "",
      }));
      navigate(-1);
    } catch (error) {
      toast.error("Error adding document: ", error);
      console.log(error.message);
    }
  };

  const handlemove = () => {
    navigate(-1);
  };

  return (
    <div className=" h-screen md:h-screen overflow-hidden  text-gray-600">
      <div className=" p-3">
        <button
          onClick={handlemove}
          className=" bg-slate-700 text-white px-5 py-2"
        >
          back
        </button>
      </div>
      <h1 className=" text-2xl md:pt-10 font-light text-center md:text-2xl">
        Tournament details
      </h1>
      <div className="md:w-[99vw] overflow-hidden  md:flex items-center  justify-center">
        <form
          autoComplete="off"
          action=""
          onSubmit={handleSubmit}
          className=" mt-7 md:w-[70vw] md:border-t-8 border-teal-500 overflow-hidden md:border md:p-10 lg:p-14 "
          method="post"
        >
          <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Tournament Name
              </label>
              <input
                type="text"
                name="Tname"
                required
                onChange={(e) => handleChange(e)}
                className=" border  w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Tounament Name"
              />
            </div>
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Registration Fees
              </label>
              <input
                type="text"
                name="fees"
                required
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Registration fees"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Tournament Date
              </label>
              <input
                type="text"
                required
                name="date"
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Date"
              />
            </div>
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Time
              </label>
              <input
                type="text"
                required
                name="time"
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Time"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Address"
              />
            </div>
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                City
              </label>
              <input
                type="text"
                name="city"
                required
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="City"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                District
              </label>
              <input
                type="text"
                name="district"
                required
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="District"
              />
            </div>
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Chief Guest
              </label>
              <input
                type="text"
                name="chiefGuest"
                required
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Chief Guest"
              />
            </div>
          </div>

          <div className=" flex items-center mt-10 justify-center">
            <button
              type="submit"
              className=" bg-teal-800 hover:bg-teal-500  text-white rounded-md mb-4 px-10 py-2"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tournament;
