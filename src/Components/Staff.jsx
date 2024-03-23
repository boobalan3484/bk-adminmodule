import { toast } from "react-toastify";
import { app } from "../api/config";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const db = getFirestore(app);
const storage = getStorage(app);

function Staff() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    Name: "",
    Specialization: "",
    Records: "",
    Picture: "",
    Address: "",
    City: "",
    District: "",
  });

  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;

    if (name === "Picture") {
      const file = files[0];
      const storageReference = storageRef(storage, "images/" + file.name);
      try {
        const snapshot = await uploadBytes(storageReference, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        setValue((prev) => ({
          ...prev,
          Picture: downloadURL,
        }));
      } catch (error) {
        console.error("Upload failed", error);
        toast.error("Upload failed: " + error.message);
      }
    } else {
      setValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "staff"), value);
      toast.success("Staff member added successfully!");
      console.log("Document written with ID: ", docRef.id);

      navigate(-1);
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error adding document: " + error.message);
    }
  };
  const handlemove = () => {
    navigate(-1);
  };

  return (
    <div className=" text-gray-700 *:overflow-hidden  bg-cover h-screen md:h-screen">
       <div className=" p-3">
        <button
          onClick={handlemove}
          className=" bg-slate-700 text-white px-5 py-2"
        >
          back
        </button>
      </div>
      <h1 className=" text-2xl md:pt-10 font-light text-center md:text-2xl">
        Master details
      </h1>
      <div className="md:w-[99vw]  md:flex items-center  justify-center">
        <form
        autoComplete="off"
          action=""
          onSubmit={handleSubmit}
          className=" mt-7 md:w-[70vw] md:border-t-8 border-indigo-500 md:border md:p-10 lg:p-14 "
          method="post"
        >
          <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Master Name
              </label>
              <input
                type="text"
                name="Name"
                required
                onChange={(e) => handleChange(e)}
                className=" text-gray-800 border  w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Staff Name"
              />
            </div>
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Specialization
              </label>
              <input
                type="text"
                name="Specialization"
                onChange={(e) => handleChange(e)}
                required
                className=" text-gray-800 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Specialization"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Records
              </label>
              <input
                type="text"
                name="Records"
                required
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="Records"
              />
            </div>
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                Picture
              </label>
              <input
                type="file"
                name="Picture"
                required
                onChange={(e) => handleChange(e)}
                className="  w-full py-2 px-2 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
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
                name="Address"
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
                name="City"
                required
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="City"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-1 lg:grid lg:grid-cols-1">
            <div className="p-2">
              <label htmlFor="" className=" block font-semibold">
                District
              </label>
              <input
                type="text"
                name="District"
                required
                onChange={(e) => handleChange(e)}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md"
                placeholder="District"
              />
            </div>
          </div>

          <div className=" flex items-center mt-10 justify-center">
            <button
              type="submit"
              className=" bg-indigo-700 text-white px-24 py-2 rounded-sm hover:bg-indigo-500"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Staff;
