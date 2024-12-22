import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";


function Footer() {
    return (<>

        <section className="bg-yellow-200 p-5 m-1  gap-5">

            <h1 className="text-2xl font-serif"> BlastMailer</h1>

            <div className="font-serif p-3 text-1xl  ">
                <div className="flex gap-3 flex-col">
                    <p>BlastMailer</p>
                    <p>Get the app</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Teach on Blast Mailer</p>
                </div>

            </div>

            <div className="flex flex-row gap-4 text-2xl justify-end">
                <p><RiInstagramFill /></p>
                <p><FaTwitter /></p>
                <p><GrYoutube /></p>
            </div>

            <p className="flex justify-end">@2024 BlastMailer All rights reserved</p>
        </section>

    </>

    )
}

export default Footer