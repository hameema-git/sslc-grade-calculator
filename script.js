const subjects = [

    "First Language Part 1",
    "First Language Part 2",
    "English",
    "Third Language",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Social Science",
    "Information Technology"

];

const gradePoints = {

    "A+":9,
    "A":8,
    "B+":7,
    "B":6,
    "C+":5,
    "C":4,
    "D+":3,
    "D":2,
    "E":1

};

const subjectsDiv =
document.getElementById("subjects");

/* =========================
   SHARE TEXT
========================= */

let generatedText = "";

/* =========================
   CREATE SUBJECT ROWS
========================= */

subjects.forEach((subject,index)=>{

    subjectsDiv.innerHTML += `

        <div class="subject-row">

            <label>
                ${subject}
            </label>

            <select id="sub${index}">

                <option>A+</option>
                <option>A</option>
                <option>B+</option>
                <option>B</option>
                <option>C+</option>
                <option>C</option>
                <option>D+</option>
                <option>D</option>
                <option>E</option>

            </select>

        </div>

    `;

});

/* =========================
   CALCULATE RESULT
========================= */

function calculateResult(){

    let studentName =
    document.getElementById(
        "studentName"
    ).value.trim();

    if(studentName === ""){

        studentName = "Student";

    }

    let tgp = 0;

    /* CALCULATE TOTAL */

    for(let i = 0; i < subjects.length; i++){

        let grade =
        document.getElementById(
            `sub${i}`
        ).value;

        tgp += gradePoints[grade];

    }

    /* AVERAGE GRADE POINT */

    let avgGP =
    (tgp / subjects.length).toFixed(1);

    /* ESTIMATED PERCENTAGE */

    let estimatedPercentage =
    (tgp * 1.11).toFixed(2);

    /* FINAL GRADE */

    let finalGrade = "";

    if(avgGP >= 9){

        finalGrade = "A+";

    }
    else if(avgGP >= 8){

        finalGrade = "A";

    }
    else if(avgGP >= 7){

        finalGrade = "B+";

    }
    else if(avgGP >= 6){

        finalGrade = "B";

    }
    else if(avgGP >= 5){

        finalGrade = "C+";

    }
    else if(avgGP >= 4){

        finalGrade = "C";

    }
    else if(avgGP >= 3){

        finalGrade = "D+";

    }
    else if(avgGP >= 2){

        finalGrade = "D";

    }
    else{

        finalGrade = "E";

    }

    /* RESULT CLASSIFICATION */

    let classResult = "";

    if(estimatedPercentage >= 90){

        classResult = "Outstanding";

    }
    else if(estimatedPercentage >= 80){

        classResult = "Distinction";

    }
    else if(estimatedPercentage >= 60){

        classResult = "First Class";

    }
    else if(estimatedPercentage >= 50){

        classResult = "Second Class";

    }
    else if(estimatedPercentage >= 30){

        classResult = "Pass";

    }
    else{

        classResult = "Failed";

    }

    /* SHOW POPUP */

    document.getElementById(
        "popupOverlay"
    ).style.display = "block";

    document.getElementById(
        "resultCard"
    ).style.display = "block";

    /* MAIN RESULT DATA */

    document.getElementById(
        "tgp"
    ).innerHTML =
    `🔥 Total Grade Point:
    <b>${tgp}</b>`;

    document.getElementById(
        "percentage"
    ).innerHTML =
    `📊 Estimated Percentage:
    <b>${estimatedPercentage}%</b>`;

    document.getElementById(
        "cgpa"
    ).innerHTML =
    `🎖 Result Classification:
    <b class="highlight-class">
    ${classResult}
    </b>`;

    document.getElementById(
        "grade"
    ).innerHTML =
    `✨ Final Grade:
    <b>${finalGrade}</b>`;

    /* SHARE NAME */

    document.getElementById(
        "shareName"
    ).innerHTML =
    `
    <span class="share-label">
    Student
    </span>

    <span class="share-value">
    ${studentName}
    </span>
    `;

    /* SHARE GRADE */

    document.getElementById(
        "shareGrade"
    ).innerHTML =
    `
    <div class="grade-title">
    Final Grade
    </div>

    <div class="grade-value">
    ${finalGrade}
    </div>
    `;

    /* SHARE PERCENTAGE */

    document.getElementById(
        "sharePercentage"
    ).innerHTML =
    `
    <div class="mini-card">

        <span class="mini-icon">
            📊
        </span>

        <div>

            <div class="mini-title">
                Estimated Percentage
            </div>

            <div class="mini-value">
                ${estimatedPercentage}%
            </div>

        </div>

    </div>
    `;

    /* SHARE CLASSIFICATION */

    document.getElementById(
        "shareCGPA"
    ).innerHTML =
    `
    <div class="mini-card">

        <span class="mini-icon">
            🎖
        </span>

        <div>

            <div class="mini-title">
                Classification
            </div>

            <div class="mini-value highlight-class">
                ${classResult}
            </div>

        </div>

    </div>
    `;

    /* RESULT CIRCLE */

    document.getElementById(
        "circleGrade"
    ).innerHTML =
    `
    <span class="circle-grade-text">
    ${finalGrade}
    </span>
    `;

    /* DYNAMIC COLORS */

    const circle =
    document.querySelector(
        ".result-circle"
    );

    if(finalGrade === "A+"){

        circle.style.background =
        "linear-gradient(135deg,#22c55e,#3b82f6,#8b5cf6)";

    }
    else if(finalGrade === "A"){

        circle.style.background =
        "linear-gradient(135deg,#3b82f6,#2563eb,#06b6d4)";

    }
    else if(finalGrade === "B+"){

        circle.style.background =
        "linear-gradient(135deg,#8b5cf6,#7c3aed,#ec4899)";

    }
    else if(finalGrade === "B"){

        circle.style.background =
        "linear-gradient(135deg,#f59e0b,#d97706,#f97316)";

    }
    else{

        circle.style.background =
        "linear-gradient(135deg,#ef4444,#dc2626,#f97316)";

    }

    /* SHARE TEXT */

    generatedText = `

🎓 SSLC Grade Report 2026

👤 Name : ${studentName}

✨ Final Grade : ${finalGrade}

🎖 Result Classification : ${classResult}

📊 Estimated Percentage : ${estimatedPercentage}%

🔥 Total Grade Point : ${tgp}

Generated via sslcgrade.online

⚠ Estimated values based on Kerala SSLC grading methodology.

`;

}

/* =========================
   SHARE RESULT
========================= */

function shareCard(){

    if(navigator.share){

        navigator.share({

            title:
            "SSLC Grade Report 2026",

            text:
            generatedText,

            url:
            "https://sslcgrade.online"

        });

    }
    else{

        navigator.clipboard.writeText(
            generatedText
        );

        alert(
            "Result copied to clipboard!"
        );

    }

}

/* =========================
   CLOSE RESULT CARD
========================= */

function closeResultCard(){

    document.getElementById(
        "resultCard"
    ).style.display = "none";

    document.getElementById(
        "popupOverlay"
    ).style.display = "none";

}

/* =========================
   OPEN MODAL
========================= */

function openModal(){

    document.getElementById(
        "gradingModal"
    ).style.display = "block";

}

/* =========================
   CLOSE MODAL
========================= */

function closeModal(){

    document.getElementById(
        "gradingModal"
    ).style.display = "none";

}

/* =========================
   OUTSIDE CLICK
========================= */

window.onclick = function(event){

    const modal =
    document.getElementById(
        "gradingModal"
    );

    const overlay =
    document.getElementById(
        "popupOverlay"
    );

    if(event.target === modal){

        modal.style.display = "none";

    }

    if(event.target === overlay){

        closeResultCard();

    }

}

/* =========================
   ESC KEY SUPPORT
========================= */

document.addEventListener(
    "keydown",
    function(event){

        if(event.key === "Escape"){

            closeModal();

            closeResultCard();

        }

    }
);