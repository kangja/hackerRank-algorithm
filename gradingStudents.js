/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && (grades[i] % 5 === 3 || grades[i] % 5 === 4)) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    }
  }
  return grades;
}

// if (multiple of 5 - grade < 3) {
//     round grade up to next multiple of 5
// }

// if (multiple of 5 - grade > 3) {
//     just return the value of grade
// }

// if (grade < 38) {
//     no rounding occurs
// }

let grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));

// 75-73 = 2 < 3   73%5 = 3                ROUNDED UP          ===> 75
// 70-67 = 3 = 3   67%5 = 2                STAYED THE SAME     ===> 67
// 40-38 = 2 < 3   38%5 = 3                ROUNDED UP          ===> 40
// 33 < 38                                 STAYED THE SAME     ===> 33
// 45-44 = 1 < 3   44%5 = 4                ROUNDED UP          ===> 45
