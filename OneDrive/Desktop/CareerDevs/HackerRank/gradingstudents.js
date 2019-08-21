function gradingStudents(grades) {
    // 1.if grade > 40 and nearest multiple of 5 - grade < 3, then round it up
    // 2.if grade > 40 and nearest multiple of 5 - grade >= 3, then don't do anything
    // 3.if grade < 38 and nearest multiple of 5 - grade < 3, then round it up, else do nothing
    console.log(grades);
    for (let i = 0; i < grades.length; i++) {
        let five_rem = grades[i] % 5;
        //console.log(five_rem);
        if (grades[i] > 40 && five_rem >= 3) {
            grades[i] += (5 - five_rem);
            //console.log(gra)
        }
        else if (grades[i] >= 38 && grades[i] < 40 && (5 - five_rem) <= 3) {
            grades[i] += (5 - five_rem);
        }
    }
    //console.log(grades);
    return grades;
}

const grades = [97,56,81,38,30,1,9,23,69,24,44,69,12,61,50,84,3,17,91,40]
const grades1 = [59,36,97,28,61,54,27,14,29,81,16,7,1,99,42,77,39,20,29];
console.log(gradingStudents(grades));
console.log(gradingStudents(grades1));

/*97
56
81
40
30
1
9
23
70
24
45
70
12
61
50
85
3
17
91
40*/
