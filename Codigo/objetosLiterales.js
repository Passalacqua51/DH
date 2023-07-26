// objetos literales

let curso = {
    cantidadAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 20 a 22:30",
    notificaciones : function() {
        return "El horario de la cursada es " + this.horario
    }
}

console.log("La cantidad de alumnos de este curso es: " + curso.cantidadAlumnos);

console.log(curso.notificaciones())

// instanciar

function Curso(cantidadAlumnos, docentes, horario){
     this.cantidadAlumnos = cantidadAlumnos
     this.docentes = docentes
     this.horario = horario
}

let cursoProgramacion = new Curso(["Nicolás", "Alberto", "Felipe"])

// exportar modulo

module.exports = curso