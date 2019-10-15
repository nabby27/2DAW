class Student {

    dni = '';
    name = '';
    average_score = 0;

    constructor(dni, name, average_score) {
        this.dni = dni;
        this.name = name;
        this.average_score = average_score;
    }

    showAverageScore() {
        console.log(this.average_score);
    }

    changeAverageScore(average_score) {
        this.average_score = average_score;
    }

}