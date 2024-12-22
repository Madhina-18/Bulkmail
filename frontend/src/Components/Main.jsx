
import g from "../assets/images/bm-img.png"


function Main() {
    return (
        <>

            <section className=" bg-yellow-200 mt-24 p-4 flex  justify-center flex-col shadow-2xl ">


                <h1 className="text-3xl font-serif mb-4 flex justify-start"> Reach your audience in just minutes</h1>
                <p className="mb-5  font-serif flex justify-start">Create and send personalized quotes in bulk with ease. Simplify your business communication in no time</p>

                <div className="flex gap-3  justify-start">
                    <button className="bg-blue-600 border border-black rounded p-3 text-white shadow-2xl  hover:text-black ">Login</button>
                    <button className="border border-blue-600 rounded  p-2 shadow-2xl hover:bg-orange-500">Sign up</button>



                </div>



                <div className="flex justify-end ">
                    <img className="w-[400px]" src={g} alt="mail imgage "></img>
                </div>


            </section>



        </>
    )
}

export default Main