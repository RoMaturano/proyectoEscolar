const {getAllStudent} = require("../controllers/getAllStudent")

const getByName = async (name) => {
try {
    const allStudent= await getAllStudent()
    let studentByNameFilter= await allStudent.filter((student)=>student.dataValues.name.toLowerCase().includes(name.toString().toLowerCase()))
return studentByNameFilter
} catch (error) {
    return {error:error.message}
}
}


module.exports={
    getByName
}