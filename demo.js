const fileInput = document.getElementById("fileInput")


fileInput.addEventListener("change",function(event){
    console.log(event)

    const file = event.target.files[0]
    console.log(file)
    

    const reader = new FileReader()
        reader.onload = function(event){
        const data = event.target.result
        //readable format start here//
        const workbook = XLSX.read(data,{type:"binary"})
        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]
        //change the json format here//
        const emailList = XLSX.utils.sheet_to_json(worksheet,{header:'A'})
        console.log(emailList)

    }


    reader.readAsArrayBuffer(file)
    
})