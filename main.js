const cdiv = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
    cdiv.setAttribute('style', `grid-template-columns: repeat(16, 2fr); grid-template-rows: repeat(16, 2fr);`);
    const div = document.createElement('div'); 
    div.classList.add("cell");
    cdiv.appendChild(div);
    div.addEventListener("mouseover", changeColor);
}

function changeColor() {
    currentColor = window.getComputedStyle(this).backgroundColor;
    this.style.backgroundColor = "blue";
    console.log(this);

}

function newGrid() {
    while (cdiv.firstChild) {
        cdiv.removeChild(cdiv.lastChild);
    }
    let choice = prompt("Enter grid number", "16");
    if (choice > 100 | isNaN(choice)) {
        alert("Number lower than 100 required!")
        location.reload();
    }
    for (let i = 1; i < (choice**2) + 1; i++) {
        cdiv.setAttribute('style', `grid-template-columns: repeat(${choice}, 2fr); grid-template-rows: repeat(${choice}, 2fr);`);
        const div = document.createElement('div');
        div.classList.add("cell");
        cdiv.appendChild(div);
        div.addEventListener("mouseover", changeColor);
    }
}


