import Login from './Login'
import Register from './Register'

import { Route, Routes } from 'react-router-dom'

function Auth() {
    return (
        <div>
          
       <Routes>
<<<<<<< HEAD:src/Auth.jsx

=======
>>>>>>> 5532d189096e23a78157f11a0397f087f451f1a6:src/Components/Auth.jsx
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
       </Routes>
        </div>
    )   
}

export default Auth