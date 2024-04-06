import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, query, limit, getDocs } from 'firebase/firestore';
import { app } from '../api/config';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const dataQuery = query(collection(db, 'contact-data'), limit(itemsPerPage));
      try {
        const querySnapshot = await getDocs(dataQuery);
        const fetchedData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt.toDate() 
        }));
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]); 

  
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (type) => {
    if (type === 'prev') {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    } else if (type === 'next') {
      setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    }
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map(item => (
      <tr key={item.id}>
        <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.mobile}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.district}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.subject}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.message}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.createdAt ? item.createdAt.toLocaleString() : '-'}</td> 
      </tr>
    ));
  };
  const nav  = useNavigate()
  const handleNav = ()=>{
    nav(-1)
  }

  return (
    <div>
      <div className=' p-3'>
        <button onClick={handleNav} className=' bg-red-500 text-white px-3 py-2'>Back</button>
      </div>

    <div className="container mx-auto px-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Table</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {renderData()}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button onClick={() => handleClick('prev')} disabled={currentPage === 1} className="bg-gray-200 px-4 py-2 rounded-md">Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={() => handleClick('next')} disabled={currentPage === totalPages} className="bg-gray-200 px-4 py-2 rounded-md">Next</button>
      </div>
    </div>
    </div>
  );
};

export default TableComponent;
