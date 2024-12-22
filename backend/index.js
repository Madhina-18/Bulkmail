const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer");
const app = express()
const mongoose = require("mongoose")

app.use(cors())

app.use(express.json())


mongoose.connect("mongodb+srv://madhina:123@cluster0.pa4hl.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0").then(function () {
    console.log("Connected to DB")
}).catch(function () { console.log("Failed to connect") })



const credential = mongoose.model("credential", {}, "bulkmail")

const { promises } = require("nodemailer/lib/xoauth2")


//To//

app.post("/sendmail", function (req, res) {


    var msg = req.body.msg
    var emailList = req.body.emailList



    credential.find().then(function (data) {


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: data[0].toJSON().user,
                pass: data[0].toJSON().pass,
            },
        });


        new Promise(async function (resolve, reject) {

            try {


                for (var i = 0; i < emailList.length; i++) {

                    await transporter.sendMail(
                        {
                            from: "madhinabanu7866@gmailcom",
                            to: emailList[i],
                            subject: "Buliding a Bulkmail app",
                            text: msg


                        }


                    )

                    console.log("Email sent to:" + emailList[i])

                }

                resolve("Success")

            }
            catch (error) {
                reject("Failed")
            }


        }).then(function () {
            res.send(true)
        }).catch(function () {
            res.send(false)
        })




    }).catch(function (error) {
        console.log(error)
    })





})



app.listen(5000, function () {
    console.log("Server Started..")
})