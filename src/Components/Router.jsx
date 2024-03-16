import Login from './Login'
import Register from './Register'

import { Route, Routes } from 'react-router-dom'
import Tournament from './Tournament'
import Table from './TimeTable'
import Staff from './Staff'

function Auth() {
    return (
        <div>
          
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/timetable" element={<Table />} />
        <Route path="/staff-details" element={<Staff />} />

       </Routes>
        </div>
    )   
}

export default Auth