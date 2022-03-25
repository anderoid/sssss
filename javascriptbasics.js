array = [
    {WorkPerformed: 'ExamSoft', Hours: 4},
    {WorkPerformed: 'Other', Hours: 1.5},
    {WorkPerformed: 'Attendance - TAKING', Hours: 0.5},
    {WorkPerformed: 'Attendance - TAKING', Hours: 0.5},
    {WorkPerformed: 'Attendance - TAKING', Hours: 3.5},
    {WorkPerformed: 'Attendance - TAKING', Hours: 1},
    {WorkPerformed: 'Attendance - TAKING', Hours: 1},
]


for (const [key, value] of Object.entries(array)) {
    let {WorkPerformed, Hours} = value

    console.log(`WorkPerformed = ${WorkPerformed}`)
    console.log(`Hours = ${Hours}`)
}


