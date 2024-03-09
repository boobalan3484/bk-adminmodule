import Login from './Login'
import Register from './Register'

import { Route, Routes } from 'react-router-dom'

function Auth() {
    return (
        <div>
           <div className=' text-white h-[100vh] flex justify-center items-center bg-cover  md:bg-cover sm:bg-cover md:bg-hero-pattern bg-center bg-footer-texture'>
       <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
       </Routes>
            </div>
        </div>
    )
}

export default Auth