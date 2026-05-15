let copiedText = "";

function calculateResult(){

    const grades = {

        aplus:10,
        a:9,
        bplus:8,
        b:7,
        cplus:6,
        c:5,
        dplus:4,
        d:3

    };

    let totalSubjects = 0;

    let totalPoints = 0;

    for(let key in grades){

        let value =

        parseInt(
            document.getElementById(key).value
        ) || 0;

        totalSubjects += value;

        totalPoints += value * grades[key];

    }

    // if(totalSubjects > 10){

    //     alert("Maximum 10 subjects allowed!");

    //     return;

    // }

    // if(totalSubjects <= 0){

    //     alert("Please enter grades");

    //     return;

    // }

    /* TOTAL SUBJECT VALIDATION */

if(totalSubjects > 10){

    alert("Maximum 10 subjects allowed!");

    return;

}

/* MUST BE EXACTLY 10 */

if(totalSubjects < 10){

    alert("Please enter all 10 subjects.");

    return;

}

    let percentage =
    totalPoints.toFixed(2);

    let finalGrade = "";

    if(percentage >= 90){

        finalGrade = "A+";

    }

    else if(percentage >= 80){

        finalGrade = "A";

    }

    else if(percentage >= 70){

        finalGrade = "B+";

    }

    else if(percentage >= 60){

        finalGrade = "B";

    }

    else if(percentage >= 50){

        finalGrade = "C+";

    }

    else{

        finalGrade = "Pass";

    }

    let classification = "";

    if(percentage >= 90){

        classification = "Outstanding";

    }

    else if(percentage >= 80){

        classification = "Distinction";

    }

    else if(percentage >= 60){

        classification = "First Class";

    }

    else{

        classification = "Pass";

    }

    let studentName =

    document.getElementById("studentName")
    .value;

    if(studentName === ""){

        studentName = "Student";

    }

    /* SHOW POPUP */

    document.getElementById("popupOverlay")
    .style.display = "block";

    document.getElementById("popupCard")
    .style.display = "block";

    document.getElementById("popupName")
    .innerHTML =
    `👤 <strong>${studentName}</strong>`;

    document.getElementById("percentage")
    .innerHTML =
    `📊 Percentage : <strong>${percentage}%</strong>`;

    document.getElementById("grade")
    .innerHTML =
    `✨ Final Grade : <strong>${finalGrade}</strong>`;

    document.getElementById("classification")
    .innerHTML =
    `🏆 Classification : <strong>${classification}</strong>`;

    document.getElementById("tgp")
    .innerHTML =
    `🔥 Total Grade Score : <strong>${totalPoints}</strong>`;

    copiedText =

`SSLC Grade Report 2026

Name : ${studentName}

Percentage : ${percentage}%

Final Grade : ${finalGrade}

Classification : ${classification}

Total Grade Score : ${totalPoints}

Generated via sslcgrade.online`;

}

/* CLOSE */

function closePopup(){

    document.getElementById("popupOverlay")
    .style.display = "none";

    document.getElementById("popupCard")
    .style.display = "none";

}

/* COPY */

function copyResult(){

    navigator.clipboard.writeText(copiedText);

    alert("Result copied successfully!");

}
/* PREVENT NUMBER INPUT SCROLL CHANGE */

const numberInputs = document.querySelectorAll('input[type="number"]');

numberInputs.forEach(input => {

    input.addEventListener("wheel", function(e){

        e.preventDefault();

    });

});