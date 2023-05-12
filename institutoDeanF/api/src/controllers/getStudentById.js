const { getAllStudent} = require("../controllers/getAllStudent")


const getStudentById=async(id)=>{
    try {
       
const allStudent= await getAllStudent() 
console.log(id.toString(),"---------")

const filterStudent = await allStudent.find((student)=>student.dataValues.id.toString()===id.toString())
//student.dataValues.id.toString()==id.toString()
//console.log(filterStudent,"filterStudent");
return filterStudent
    } catch (error) {
        return ({error:error.message})
    }
}

module.exports={
    getStudentById
}