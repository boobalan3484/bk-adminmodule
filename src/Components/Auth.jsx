import Login from './Login'
import Register from './Register'

import { Route, Routes } from 'react-router-dom'

function Auth() {
    return (
        <div>
<<<<<<< .merge_file_FbakEO
          
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />} />
       </Routes>
        </div>
    )   
=======
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="Register" element={<Register />} />
            </Routes>
        </div>
    )
>>>>>>> .merge_file_ZgZP9W
}

export default Auth