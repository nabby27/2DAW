class School {

    name = '';
    number_of_classrooms = 0;
    number_maxim_of_students = 0;
    students = [];

    constructor(name, number_of_classrooms, number_maxim_of_students) {
        this.name = name;
        this.number_of_classrooms = number_of_classrooms;
        this.number_maxim_of_students = number_maxim_of_students;
    }

    addAlumn(alumn) {
        if (this.students.length >= this.number_maxim_of_students) {
            console.log('The school can\'t add more students');
        } else {
            this.students.push(alumn);
            console.log('Student added to school');
        }
    }

    showAlumns() {
        this.students.forEach((student) => {
            console.log(student);
        })
    }

    showAverageScore() {
        let score = 0;
        this.students.forEach((student) => {
            score += student.average_score;
        })

        console.log(Math.floor(score / this.students.length * 100) / 100);
    }

}