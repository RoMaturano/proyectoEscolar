const { Router } = require('express');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {getAllStudentHandler}=require("../handler/getAllStudentHandler")
const {getAllSubjectHandler}= require("../handler/getAllSubjectHandler")
const {newStudentHandler}=require("../handler/newStudentHandler")
const {getByNameHandler}=require("../handler/getByNameHandler")
const {getStudentsByIdHandler}=require("../handler/getStudentByIdHandler")


router.get("/student",getAllStudentHandler)
router.post("/student",newStudentHandler)
router.get("/student/:name",getByNameHandler)
router.get("/student/student/:id",getStudentsByIdHandler)

router.get("/subject",getAllSubjectHandler)



module.exports = router;
