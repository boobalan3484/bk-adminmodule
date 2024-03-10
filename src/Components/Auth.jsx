import Login from './Login'
import Register from './Register'

import { Route, Routes } from 'react-router-dom'

function Auth() {
    return (
        <div>
          
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
       </Routes>
        </div>
    )   
}

export default Auth