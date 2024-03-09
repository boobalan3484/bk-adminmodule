import { Link } from "react-router-dom"
import {  FaUnlock, FaUser } from "react-icons/fa";

function Login() {
    return (
        <div>
           <div className=" bg-slate-800 border w-[85vw] h-[42vh] border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 md:w-[70vw] md:h-[48vh] lg:h-[48vh] lg:w-[60vw] xl:w-[50vw] xl:h-[59vh] 2xl:w-[58vw] 2xl:h-[62vh] ">
            <h1 className=" text-2xl text-white font-bold text-center mb-6 xl:text-4xl lg:text-4xl ">Login</h1>
            <form action="" method="post">
                <div className=" relative my-5 xl:mt-10 xl:text-2xl">
                <input type="email" className="xl:text-2xl block w-full py-2.3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer md:text-lg lg:text-xl " placeholder=""/>
                <label htmlFor="" className="text-sm absolute text-white mb-5 duration-300 transform translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-8 md:text-xl md:peer-focus:-translate-y-8 md:translate-y-3 lg:peer-focus:-translate-y-8
                xl:peer-focus:-translate-y-8 xl:translate-y-8 lg:translate-y-6">Email ID</label>
                 <FaUser className=" h-3 absolute bottom-2 right-0"/>
            </div>
            <div className="relative my-8 md:mt-10 xl:mt-16 lg:mt-10">
                <input type="password" className="block w-full mt-4 py-2.3 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer xl:text-xl md:text-lg" placeholder=""/>
                <label htmlFor="" className="text-sm absolute  text-white mb-5 duration-300 transform translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6 md:text-xl md:peer-focus:-translate-y-8 md:translate-y-3 lg:peer-focus:-translate-y-6
                xl:peer-focus:-translate-y-8 xl:translate-y-6">Password</label>
                <FaUnlock className="h-3 absolute top-1 right-0"/>
            </div>
            <div className=" flex justify-between items-center text-sm mt-7 xl:mt-4 md:text-xl xl:text-2xl">
                <div className=" flex gap-2  items-center lg:text-xl" >
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="Remember Me">Remember Me</label>
                </div>
                <Link to="" className=" lg:text-lg xl:mt-4 xl:text-xl cursor-pointer text-sm md:text-xl text-gray-950">Forget Password?</Link>
            </div>
            <div className=" flex justify-center">
              <button type="submit" className=" cursor-pointer mb-4 text-[18px] w-full mt-6  rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-0 transition-colors duration-300 xl:py-3 xl:text-xl md:py-2 lg:py-1">Login</button>
            </div>
            <div className="flex justify-center text-sm xl:text-2xl ">
                <span className=" mt-4 lg:text-lg md:text-xl">New Here? <Link to="/Register" className=" text-gray-950">Create an account</Link> </span>
            </div>
            </form>
        </div>
        </div>
       
    )
}

export default Login