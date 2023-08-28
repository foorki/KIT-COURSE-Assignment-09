const student = {
    name: "Furqan",
    age: 20,
    grades: [85, 90, 78, 92, 88],

    calculateAverage: function() {
        const totalGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
        const average = totalGrades / this.grades.length;
        return average;
    }
};

const averageGrade = student.calculateAverage();
console.log(`Student ${student.name}, Age ${student.age}: Average Grade ${averageGrade}`);
