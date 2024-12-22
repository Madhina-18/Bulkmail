import { FaUserFriends } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

function Side() {
    return (
        <>
            <div className="text-center bg-yellow-200"  >
                <h1 className="text-3xl font-serif mt-5 p-3 text-black">About Us</h1>
                <p>Affordable solution for small business with limited</p>


                <div className="md:flex shadow-2xl">


                    <div className="border border-[blue] p-3 m-5 shadow-xl">

                        <p className="flex justify-center text-6xl">
                            <FaUserFriends />
                        </p>
                        <h2 className="text-xl font-medium  text-gray-600">Happy Users</h2>
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, porro! Porro consequuntur rerum dignissimos, eos libero voluptas earum necessitatibus aut, ad accusantium odio cum tempora, expedita est deleniti ipsum nesciunt?</p>

                    </div>


                    <div>

                        <div className="border border-[blue] p-3 m-5 shadow-xl">

                            <p className="flex justify-center text-6xl">
                                <IoMailSharp />
                            </p>

                            <h2 className="text-xl font-medium  text-gray-600">Paid Users</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, porro! Porro consequuntur rerum dignissimos, eos libero voluptas earum necessitatibus aut, ad accusantium odio cum tempora, expedita est deleniti ipsum nesciunt?</p>

                        </div>


                    </div>


                    <div>



                        <div className="border border-[blue] p-3 m-5 shadow-xl">
                            <p className="flex justify-center text-6xl">
                                <FaPhoneVolume />
                            </p>
                            <h2 className="text-xl font-medium text-gray-600">24/7 Support</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, porro! Porro consequuntur rerum dignissimos, eos libero voluptas earum necessitatibus aut, ad accusantium odio cum tempora, expedita est deleniti ipsum nesciunt?</p>

                        </div>




                    </div>


                </div>

            </div>
        </>
    )
}


export default Side