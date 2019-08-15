const express = require('express');
const router = express.Router();
const crh = require('../../services/coursesRequestHandler');

const coursesFilePath = './json/courses.json';

function createCourseObj(reqBody) {
    return {
        id: reqBody.id,
        nome: reqBody.nome,
        apresentacao: reqBody.apresentacao,
        objetivo: reqBody.objetivo,
        perfilProfissional: reqBody.perfilProfissional,
        campoAtuacao: reqBody.campoAtuacao,
        formasOferta: reqBody.formasOferta,
        campi: reqBody.campi
    }
}

router.get('/', (req, res, next) => {
    res.status(200).json({
        data: crh.getAllCourses(coursesFilePath)
    })
});

router.post('/', (req, res, next) => {
    const curso = createCourseObj(req.body);
    crh.addCourse(coursesFilePath, curso);
    res.status(201).json({
        message: 'Course added',
        curso: curso
    });
});

router.get('/:courseId', (req, res, next) => {
    const id = req.params.courseId;
    res.status(200).json({
        message: `You requested for ${id}`,
        curso: crh.getById(coursesFilePath, id)
    });
});

router.patch('/:courseId', (req, res, next) => {
    const id = req.params.courseId;
    const curso = createCourseObj(req.body);
    crh.updateCourse(coursesFilePath, id, curso);
    res.status(200).json({
        message: `You updated course ${id}`
    });
});

router.delete('/:courseId', (req, res, next) => {
    const id = req.params.courseId;
    crh.deleteCourse(coursesFilePath, id);
    res.status(200).json({
        message: `You deleted ${id}`
    });
});

module.exports = router;