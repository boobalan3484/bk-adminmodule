function Tournament() {
    return (
        <div className=" bg-slate-100 h-full md:h-[100vw]  text-gray-600">
                <h1 className=" text-2xl md:pt-10 font-light text-center md:text-2xl">Tournament details</h1>
            <div className="md:w-[100vw]  md:flex items-center  justify-center">
                <form action="" className=" mt-7 md:w-[70vw] md:border-t-8 border-teal-500 md:border md:p-10 lg:p-14 " method="post">
                <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                    <div className="p-2">
                        <label htmlFor="" className=" block font-semibold">Tournament Name</label>
                        <input type="text" className=" border  w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md" placeholder="Tounament Name" />
                    </div>
                    <div className="p-2">
                        <label htmlFor="" className=" block font-semibold">Registration Fees</label>
                        <input type="text" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md" placeholder="Registration fees" />
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                    <div className="p-2">
                        <label htmlFor="" className=" block font-semibold">Tournament Date</label>
                        <input type="Date" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md" placeholder="Date" />
                    </div>
                    <div className="p-2">
                        <label htmlFor="" className=" block font-semibold">Time</label>
                        <input type="time" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md" placeholder="Time" />
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                    <div className="p-2">
                        <label htmlFor="" className=" block font-semibold">Address</label>
                        <input type="text" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md" placeholder="Address" />
                    </div>
                    <div className="p-2">
                        <label htmlFor="" className=" block font-semibold">City</label>
                        <input type="text" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md" placeholder="City" />
                    </div>
                </div>
                 <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                    <div className="p-2">
                        <label htmlFor="" className=" block font-semibold">District</label>
                        <input type="text" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md" placeholder="District" />
                    </div>
                    <div className="p-2">
                        <label htmlFor="" className=" block font-semibold">Chief Guest</label>
                        <input type="text" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-600 rounded-md" placeholder="Chief Guest" />
                    </div>

                 </div>




                  
                    <div className=" flex items-center mt-10 justify-center">
                    <button type="submit" className=" bg-teal-800 hover:bg-teal-500 text-white rounded-md mb-4 px-10 py-2"> submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Tournament
