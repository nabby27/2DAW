
student1 = new Student('11111111A', 'Pepe', 5.4);
student2 = new Student('11111112B', 'Manolo', 6.7);
student3 = new Student('11111113C', 'Eva', 7.4);

school = new School('IES School', 10, 3);

school.addAlumn(student1);
school.addAlumn(student2);
school.addAlumn(student3);
school.addAlumn(student3);

school.showAlumns();

console.warn('Get average score for school');
school.showAverageScore();

console.warn('Change average score for student 1');
student1.changeAverageScore(3.5);

school.showAlumns();

console.warn('Get average score for school');
school.showAverageScore();
