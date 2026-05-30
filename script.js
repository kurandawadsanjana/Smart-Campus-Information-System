function evaluateGrade()
{
    let name =
    document.getElementById("studentName").value;

    let marks =
    Number(document.getElementById("studentMarks").value);

    let grade = "";
    let remark = "";

    if(marks >= 90)
    {
        grade = "A";
        remark = "Excellent";
    }
    else if(marks >= 75)
    {
        grade = "B";
        remark = "Very Good";
    }
    else if(marks >= 60)
    {
        grade = "C";
        remark = "Good";
    }
    else if(marks >= 40)
    {
        grade = "D";
        remark = "Average";
    }
    else
    {
        grade = "F";
        remark = "Needs Improvement";
    }

    document.getElementById("result").innerHTML =
    `
    Name: ${name}<br>
    Marks: ${marks}<br>
    Grade: ${grade}<br>
    Remark: ${remark}
    `;
}

let courses = [];

function addCourse()
{
    let name =
    document.getElementById("courseName").value;

    let credits =
    document.getElementById("courseCredits").value;

    if(name === "" || credits === "")
    {
        alert("Please enter course details");
        return;
    }

    courses.push(name + " - " + credits + " Credits");

    document.getElementById("courseOutput").innerHTML =
    courses.join("<br>");
}

function calculateFee()
{
    let tuition =
    Number(document.getElementById("tuitionFee").value);

    let hostel =
    Number(document.getElementById("hostelFee").value);

    let transport =
    Number(document.getElementById("transportFee").value);

    let total =
    tuition + hostel + transport;

    document.getElementById("feeResult").innerHTML =
    "Total Fee = ₹" + total;
}

let sortedArray = [];

function sortIds()
{
    let ids =
    document.getElementById("studentIds").value;

    sortedArray =
    ids.split(",").map(Number);

    sortedArray.sort(function(a,b)
    {
        return a-b;
    });

    document.getElementById("sortResult").innerHTML =
    "Sorted IDs: " + sortedArray.join(", ");
}

function searchId()
{
    let target =
    Number(document.getElementById("searchId").value);

    let position =
    sortedArray.indexOf(target);

    if(position !== -1)
    {
        document.getElementById("sortResult").innerHTML =
        "Sorted IDs: " + sortedArray.join(", ") +
        "<br><br>ID Found: " + target +
        "<br>Position: " + (position + 1);
    }
    else
    {
        document.getElementById("sortResult").innerHTML =
        "Sorted IDs: " + sortedArray.join(", ") +
        "<br><br>ID Not Found";
    }
}

let studentRecords = [];

function addStudentRecord()
{
    let name =
    document.getElementById("recordName").value;

    let age =
    document.getElementById("recordAge").value;

    let grades =
    document.getElementById("recordGrades").value;

    studentRecords.push({
        name:name,
        age:age,
        grades:grades
    });

    let output = "";

    for(let i=0; i<studentRecords.length; i++)
    {
        output +=
        "<b>Name:</b> " + studentRecords[i].name +
        "<br><b>Age:</b> " + studentRecords[i].age +
        "<br><b>Grades:</b> " + studentRecords[i].grades +
        "<br><br>";
    }

    document.getElementById("recordOutput").innerHTML =
    output;
}

function analyzeEvents()
{
    let eventA =
    document.getElementById("eventA").value
    .split(",")
    .map(name => name.trim());

    let eventB =
    document.getElementById("eventB").value
    .split(",")
    .map(name => name.trim());

    let common =
    eventA.filter(name => eventB.includes(name));

    let allParticipants =
    [...new Set([...eventA, ...eventB])];

    let onlyEventA =
    eventA.filter(name => !eventB.includes(name));

    document.getElementById("eventOutput").innerHTML =
    "<b>Common Participants:</b> " +
    common.join(", ") +

    "<br><br><b>All Participants:</b> " +
    allParticipants.join(", ") +

    "<br><br><b>Only Event A Participants:</b> " +
    onlyEventA.join(", ");
}

let academicRecords = [];

function addAcademicRecord()
{
    let id =
    document.getElementById("academicId").value;

    let name =
    document.getElementById("academicName").value;

    let marks =
    Number(document.getElementById("academicMarks").value);

    academicRecords.push({
        id:id,
        name:name,
        marks:marks
    });

    alert("Record Added Successfully");
}

function generateReport()
{
    if(academicRecords.length === 0)
    {
        document.getElementById("academicOutput").innerHTML =
        "No Records Available";
        return;
    }

    let totalMarks = 0;
    let highestMarks = 0;
    let topStudent = "";

    for(let i=0;i<academicRecords.length;i++)
    {
        totalMarks += academicRecords[i].marks;

        if(academicRecords[i].marks > highestMarks)
        {
            highestMarks = academicRecords[i].marks;
            topStudent = academicRecords[i].name;
        }
    }

    let average =
    totalMarks / academicRecords.length;

    document.getElementById("academicOutput").innerHTML =
    "<b>Total Students:</b> " +
    academicRecords.length +

    "<br><b>Average Marks:</b> " +
    average.toFixed(2) +

    "<br><b>Top Student:</b> " +
    topStudent +

    " (" + highestMarks + " marks)";
}

let performanceRecords = [];
let chartInstance = null;

function addPerformanceRecord()
{
    let name =
    document.getElementById("studentNameAnalytics").value;

    let math =
    Number(document.getElementById("mathMarks").value);

    let science =
    Number(document.getElementById("scienceMarks").value);

    let english =
    Number(document.getElementById("englishMarks").value);

    performanceRecords.push({
        name:name,
        math:math,
        science:science,
        english:english
    });

    alert("Student Added Successfully");
}

function mean(arr)
{
    return arr.reduce((a,b)=>a+b,0)/arr.length;
}

function median(arr)
{
    let sorted =
    [...arr].sort((a,b)=>a-b);

    let mid =
    Math.floor(sorted.length/2);

    if(sorted.length % 2 === 0)
    {
        return (sorted[mid-1]+sorted[mid])/2;
    }

    return sorted[mid];
}

function stdDev(arr)
{
    let avg = mean(arr);

    let variance =
    arr.reduce((sum,val)=>
    sum + Math.pow(val-avg,2),0)
    / arr.length;

    return Math.sqrt(variance);
}

function analyzePerformance()
{
    let math =
    performanceRecords.map(s=>s.math);

    let science =
    performanceRecords.map(s=>s.science);

    let english =
    performanceRecords.map(s=>s.english);

    let topMath =
    performanceRecords.reduce((a,b)=>
    a.math>b.math?a:b);

    let topScience =
    performanceRecords.reduce((a,b)=>
    a.science>b.science?a:b);

    let topEnglish =
    performanceRecords.reduce((a,b)=>
    a.english>b.english?a:b);

    document.getElementById("analyticsResult").innerHTML =

    "<h3>Statistical Summary</h3>" +

    "<b>Math</b><br>" +
    "Mean: " + mean(math).toFixed(2) +
    "<br>Median: " + median(math) +
    "<br>Std Dev: " + stdDev(math).toFixed(2) +

    "<br><br><b>Science</b><br>" +
    "Mean: " + mean(science).toFixed(2) +
    "<br>Median: " + median(science) +
    "<br>Std Dev: " + stdDev(science).toFixed(2) +

    "<br><br><b>English</b><br>" +
    "Mean: " + mean(english).toFixed(2) +
    "<br>Median: " + median(english) +
    "<br>Std Dev: " + stdDev(english).toFixed(2) +

    "<br><br><h3>Top Performers</h3>" +

    "Math: " + topMath.name +
    " (" + topMath.math + ")" +

    "<br>Science: " + topScience.name +
    " (" + topScience.science + ")" +

    "<br>English: " + topEnglish.name +
    " (" + topEnglish.english + ")";

    let ctx =
    document.getElementById("marksChart");

    if(chartInstance)
    {
        chartInstance.destroy();
    }
    document.getElementById("studentCount").innerHTML =
    "Total Students Analyzed: " + performanceRecords.length;

    chartInstance =
    new Chart(ctx,{
        type:'bar',
        data:{
            labels:
            performanceRecords.map(s=>s.name),

            datasets:[
            {
                label:'Math',
                data:
                performanceRecords.map(s=>s.math)
            },
            {
                label:'Science',
                data:
                performanceRecords.map(s=>s.science)
            },
            {
                label:'English',
                data:
                performanceRecords.map(s=>s.english)
            }]
        }
    });
}

function scanDirectory()
{
    let files =
    document.getElementById("directoryInput").value;

    if(files.trim() === "")
    {
        document.getElementById("directoryOutput").innerHTML =
        "Error: No files found";
        return;
    }

    let fileList =
    files.split(",");

    document.getElementById("directoryOutput").innerHTML =
    "<b>Total Files:</b> " +
    fileList.length +
    "<br><br>" +
    fileList.join("<br>");
}

