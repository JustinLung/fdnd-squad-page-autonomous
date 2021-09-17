import students from "./students.js"

const studentContainer = document.querySelector(".squad-container")

students.sort(function (a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});


for (let i = 0; i < students.length; i++) {
    studentContainer.innerHTML += `
    <div id="window">
    <div id="window-bar">
        <p id="window-title">
            ${students[i].name} - FDND
        </p>
        <div id="window-buttons">
            <p id="exit">&#128473;</p>
            <p id="max">&#128470;</p>
            <p id="min">&#128469;</p>
        </div>
    </div>
    <div id="window-content">
        <img src="${students[i].foto}">
    </div>
    <a href="${students[i].link}"  target="_blank">Visitekaart</a>
</div>
    `
}

console.log(students);