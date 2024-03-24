import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'; 
import { onAuthStateChanged } from 'firebase/auth';
import { app } from '../api/config';
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";


const auth  = getAuth(app)

const PrivateRoute = () => {
  const [pending, setPending] = useState(true);
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        setCurrentUser(user);
        setPending(false);
      },
      error => {
        toast.error(error); 
        setPending(false);
      }
    );
    return unsubscribe; 
  }, []);

  if (pending) {
    
    return <div>Loading...</div>; 
  }

  return currentUser ? (
    <Outlet /> 
  ) : (
    <Navigate to="/login" replace /> 
  );
};

export default PrivateRoute;
