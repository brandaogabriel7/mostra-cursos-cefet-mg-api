const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST request'
    });
});

router.get('/:courseId', (req, res, next) => {
    const id = req.params.courseId;
    res.status(200).json({
        message: `You requested for ${id}`
    });
});

router.patch('/:courseId', (req, res, next) => {
    const id = req.params.courseId;
    res.status(200).json({
        message: `You updated course ${id}`
    });
});

router.delete('/:courseId', (req, res, next) => {
    const id = req.params.courseId;
    res.status(200).json({
        message: `You deleted ${id}`
    });
});

module.exports = router;