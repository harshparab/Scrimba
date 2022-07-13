let countEl = document.querySelector(".count-el");
let recordsEl = document.querySelector(".records-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    recordsEl.textContent += " " +  count + " - ";
    count = 0;
    countEl.textContent = count;
}