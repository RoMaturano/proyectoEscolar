const { Router } = require('express');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {getAllStudentHandler}=require("../handler/Student/getAllStudentHandler")
const {getAllSubjectHandler}= require("../handler/Subject/getAllSubjectHandler")
const {newStudentHandler}=require("../handler/Student/newStudentHandler")
const {getByNameHandler}=require("../handler/Student/getByNameHandler")
const {getStudentsByIdHandler}=require("../handler/Student/getStudentByIdHandler")
const {newSubjectHandler}=require("../handler/Subject/newSubjectHandler")

router.get("/student",getAllStudentHandler)
router.post("/student",newStudentHandler)
router.get("/student/:name",getByNameHandler)
router.get("/student/student/:id",getStudentsByIdHandler)

router.get("/subject",getAllSubjectHandler)
router.post("/subject",newSubjectHandler)


module.exports = router;
