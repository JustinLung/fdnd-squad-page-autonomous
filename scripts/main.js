import students from "./students.js"

const studentContainer = document.querySelector(".squad-container")

students.sort(function (a, b) {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});


for (let i = 0; i < students.length; i++) {
    studentContainer.innerHTML += `
    <article id="window">
    <section id="window-bar">
        <p id="window-title">
            ${students[i].name} - FDND
        </p>
        <section id="window-buttons">
            <button id="exit">&#128473;</button>
            <button id="max">&#128470;</button>
            <button id="min">&#128469;</button>
        </section>
    </section>
    <section id="window-content">
    <div class="glitch">
        <img src="${students[i].foto}">
        </div>
    </section>
    <div class="window-button">
        <a href="${students[i].link}">Visitekaart</a>
    </div>
</article>
    `
}

console.log(students);