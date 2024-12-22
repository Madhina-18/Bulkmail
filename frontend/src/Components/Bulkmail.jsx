import { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx"

function Bulkmail() {

    const [msg, setmsg] = useState("")
    const [status, setstatus] = useState(false)
    const [emailList,setEmailList] = useState ([])


    function handlemsg(evt) {
        setmsg(evt.target.value)
    }


    function handlefile(event) {




        const file = event.target.files[0]
        console.log(file)



        const reader = new FileReader()
        reader.onload = function (event) {
            const data = event.target.result
            //readable format start here//
            const workbook = XLSX.read(data, { type: "binary" })
            const sheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[sheetName]
            //change the json format here//
            const emailList = XLSX.utils.sheet_to_json(worksheet, { header: 'A' })
            const totalemail = emailList.map(function(item){return item.A})
            console.log(totalemail)
            setEmailList(totalemail)

        }


        reader.readAsArrayBuffer(file)


    }



    function send() {

        setstatus(true)
        axios.post("http://localhost:5000/sendmail", { msg: msg,emailList})
            .then(function (data) {
                if (data.data === true) {
                    alert("Email Sent Successfully 👍 :)")
                    setstatus(false)
                }
                else {
                    alert("Failed 👎 :(")
                }
            })

    }











    return (
        <>
            <div className="bg-yellow-200 text-black text-center mt-5">
                <h1 className="text-2xl font-serif px-5 py-3">BlastMailer</h1>
            </div>

            <div className="bg-[#1a4a7a] text-black  text-center ">
                <h1 className="text-2xl font-serif px-5 text-white py-3">we can help your business with sending multiple emails at once</h1>
            </div>


            <div className="bg-yellow-200 text-black  text-center ">
                <h1 className="text-2xl font-serif px-5 py-3">Drag and drop</h1>
            </div>

            <div className="bg-[#1a4a7a] flex flex-col items-center text-white px-5 py-3 shadow-2xl">

                <textarea onChange={handlemsg} value={msg} className="w-[80%] h-32 outline-none border text-black border-blue-600 "
                    placeholder="Enter The Email text here...."
                ></textarea>


                <div>
                    <input onChange={handlefile} type="file" className="border-4 border-dashed py-4 px-4 mt-5 mb-5  " />
                </div>

                <p className="font-serif">Total emails in the file : {emailList.length}</p>





                <button onClick={send} className="bg-yellow-200 py-2 px-2 text-black font-medium rounded-md w-fit mt-5  hover:bg-orange-600">{status ? "Sending..." : "Send"}</button>
            </div>



        </>
    )
}


export default Bulkmail