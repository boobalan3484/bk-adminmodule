import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { app } from "../api/config";
import ReactPaginate from "react-paginate";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, nameFilter, dateFilter]);

  const fetchData = async () => {
    const db = getFirestore(app);
    const dataRef = collection(db, "contact-data");
    const dataQuery = query(dataRef, orderBy("createdAt"));

    try {
      const querySnapshot = await getDocs(dataQuery);
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
      }));

      const filteredData = applyFilters(nameFilter, dateFilter, fetchedData);
      const pageCount = Math.ceil(filteredData.length / itemsPerPage);
      setTotalPages(pageCount);

      const offset = currentPage * itemsPerPage;
      const currentPageData = filteredData.slice(offset, offset + itemsPerPage);
      setData(currentPageData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleNameFilterChange = (e) => {
    const name = e.target.value.toLowerCase();
    setNameFilter(name);
    setCurrentPage(0);
  };

  const handleDateFilterChange = (e) => {
    const date = e.target.value;
    setDateFilter(date);
    setCurrentPage(0);
  };

  const applyFilters = (name, date, data) => {
    let filtered = [...data];

    if (name) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(name)
      );
    }

    if (date) {
      filtered = filtered.filter(
        (item) => item.createdAt.toISOString().substring(0, 10) === date
      );
    }

    return filtered;
  };

  const renderData = () => {
    return data.map((item) => (
      <tr key={item.id} className="border-b border-gray-200">
        <td className="px-4 py-3">{item.name}</td>
        <td className="px-4 py-3">{item.email}</td>
        <td className="px-4 py-3">{item.mobile}</td>
        <td className="px-4 py-3">{item.district}</td>
        <td className="px-4 py-3">{item.age}</td>
        <td className="px-4 py-3">{item.subject}</td>
        <td className="px-4 py-3">{item.message}</td>
        <td className="px-4 py-3">
          {item.createdAt ? item.createdAt.toLocaleString() : "-"}
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Table</h1>
      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search by name"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-md mr-2"
          value={nameFilter}
          onChange={handleNameFilterChange}
        />
        <input
          type="date"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
          value={dateFilter}
          onChange={handleDateFilterChange}
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Mobile</th>
            <th className="px-4 py-3">District</th>
            <th className="px-4 py-3">Age</th>
            <th className="px-4 py-3">Subject</th>
            <th className="px-4 py-3">Message</th>
            <th className="px-4 py-3">Created At</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </table>
      <div className="pagination-container flex px-2 justify-center items-center mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={" px-2 flex "}
          activeClassName={"px-2"}
          previousClassName={
            "px-3 py-1 bg-gray-200 text-gray-800 rounded-l-md mr-2 group hover:bg-gray-300"
          }
          nextClassName={
            "px-3 py-1 bg-gray-200 text-gray-800 rounded-r-md ml-2 group hover:bg-gray-300"
          }
          pageClassName={
            "px-3 py-1 hover:bg-blue-300 rounded-lg bg-gray-200 text-gray-800 group"
          }
          breakClassName={"px-3 py-1 bg-gray-200 text-gray-800"}
        />
      </div>
    </div>
  );
};

export default TableComponent;
