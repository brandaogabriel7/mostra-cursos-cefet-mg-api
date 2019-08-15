const fs = require('fs');

const crh = {
    getAllCourses: (path) => {
        return JSON.parse(fs.readFileSync(path));
    },
    getById: (path, id) => {
        const cursos = JSON.parse(fs.readFileSync(path));
        const curso = cursos.filter(element => element.id == id)[0];
        return curso;
    },
    addCourse: (path, curso) => {
        const cursos = JSON.parse(fs.readFileSync(path));
        cursos.push(curso);
        fs.writeFileSync(path, JSON.stringify(cursos));
    },
    updateCourse: (path, id, curso) => {
        const cursos = JSON.parse(fs.readFileSync(path));
        const cursoParaAtualizar = cursos.filter(element => element.id == id)[0];
        cursos[cursos.indexOf(cursoParaAtualizar)] = curso;
        fs.writeFileSync(path, JSON.stringify(cursos));
    },
    deleteCourse: (path, id) => {
        const cursos = JSON.parse(fs.readFileSync(path));
        const cursoParaExluir = cursos.filter(element => element.id == id)[0];
        cursos.splice(cursos.indexOf(cursoParaExluir));
        fs.writeFileSync(path, JSON.stringify(cursos));
    }
}

module.exports = crh;