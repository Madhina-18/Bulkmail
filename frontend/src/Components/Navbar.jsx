function Navbar() {
    return (
        <div>


            <nav className="bg-[#1a4a7a] p-5 flex items-center justify-between fixed w-[100%]  top-0 shadow-2xl" >

                <h1 className="text-2xl text-white font-serif ">BlastMailer</h1>


                <ul className="flex gap-5 text-white font-serif">
                    <li>
                        <a className="  hover:text-yellow-500" href="#">Home</a>
                    </li>

                    <li>
                        <a className="  hover:text-yellow-500" href="#">About</a>
                    </li>

                    <li>
                        <a className=" hover:text-yellow-500" href="#">Contact</a>
                    </li>
                </ul>


            </nav>



        </div>
    )
}

export default Navbar