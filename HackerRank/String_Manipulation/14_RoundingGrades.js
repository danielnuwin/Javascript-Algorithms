/**
 * Rounding Grades Rules
 * 1. Grade < 40 is failing and no Rounding
 * 2. If Difference of grade to the next multiple of 5 is < 3 round to next multiple --> how to calculate this??
 * 3. if Grade is < 38 then no Rounding. 
 */

function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    const result = [];
    const string = "";
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade < 38) {
            result.push(grades[i]);
        }
        else {
            let calcGrade = Math.ceil(grade / 5) * 5;
            if (calcGrade - grade < 3) {
                result.push(calcGrade);
                // console.log("calcGrade:",calcGrade);
            }
            else {
                result.push(grade);
            }
        }
    }
    for(let i in result){
        string = `${string}${result[i]}\n`;
    }
    console.log(string);
}

const array = [73, 67, 38, 33];

gradingStudents(array);

