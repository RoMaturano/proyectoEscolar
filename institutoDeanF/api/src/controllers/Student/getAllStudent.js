const {Student}= require ("../../db")
const studentData = require("../../../Data.js")
const {Subject}=require("../../db")


const auxStudent= studentData.map((el)=>{
    return{
        name: el.name,
        lastName:el.lastName,
        dni: el.dni,
        birthDate: el.birthDate,
        email:el.email,
        phone:el.phone,
        image: el.image
    }
})

const getAllStudent= async()=>{
    try {
    const student = await Student.findAll({
        include:{
            model:Subject,
        }
    })
if(student.length===0){
    const studentDB= await Student.bulkCreate(auxStudent)
    return studentDB
}
    return student
} catch (error) {
    console.log({error:error.message})
}}

module.exports={
    getAllStudent
}