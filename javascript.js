const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

function createGrid(size) {
    container.innerHTML = ""; // clear old grid

    let squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList.add("square");

        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });

        container.appendChild(div);
    }
}

// initial grid
createGrid(16);

btn.addEventListener("click", () => {
    let size = prompt("Enter number (max 100)");

    if (size > 100 || size <= 0) {
        alert("Invalid size,enter a number between 2-100");
        return;
    }

    createGrid(size);
});