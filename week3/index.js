// display each student name and score 
// capitalize the first letter of student name
// display total # of students,
// display the lowest, highest, and average scores

let grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";


// let splitGrades = grades.split(/\W+/);
// var splitGrades = grades.split("|");
let splitGrades = grades.split(', ');

console.log(splitGrades);
console.log(splitGrades.length);




for (let i = 0; i < splitGrades.length; i++) {

        splitGrades.sort();
        
        result = splitGrades[i].charAt(0).toUpperCase() + splitGrades[i].slice(1);
       
        document.write(result + "<br>");
}



let averageScore = (grades[1] + grades[2] + grades[3] + grades[4] + grades[5] + grades[6] + grades[7] + grades[8] + grades[9] + grades[10]) / 10;

document.write(`Average Score: ${averageScore}` + "<br>");
document.write(`Total Students: ${result.length}`);


