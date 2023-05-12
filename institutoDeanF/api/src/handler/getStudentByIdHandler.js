const {getStudentById}=require("../controllers/getStudentById")

const getStudentsByIdHandler=async(req,res)=>{
    try {
        //console.log("hola");
        const {id}=req.params
        const getStudentId=await getStudentById(id)
        res.status(200).json(getStudentId)
        
    } catch (error) {
       res.status(400).json({error:error.message})
    }
}

module.exports={
    getStudentsByIdHandler
}