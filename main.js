const map = [
    "  WWWWW ",
    "WWW   W ",
    "WOSB  W ",
    "WWW BOW ",
    "WOWWB W ",
    "W W O WW",
    "WB XBBOW",
    "W   O  W",
    "WWWWWWWW"
];

const wall = "W";
const floor = " ";
const box = "B";
const container = "O";
const boxInContainer = "X";

let playerTop = 40;
var playerLeft = 40;
let mapDiv = document.getElementById("map");

let posX = 2;
let posY = 2;
// let boxes = [];

document.addEventListener("keydown", (event) => {
    let keyName = event.key;
    if (keyName === "ArrowUp") {
        console.log("posX: ", posX);
        console.log("posY: ", posY);
        if (posY <= 7 && posY > 0) {
            if ((map[posY - 1][posX] === floor) || (map[posY - 1][posX] === floor) || (map[posY - 1][posX] === "S")) {
                posY -= 1;
                playerTop -= 20;
                document.getElementById("player").style.top = playerTop + "px";
            }
            else if (map[posY - 1][posX] === box) {
                let boxDes = map[posY - 2][posX]
                if (boxDes === floor || boxDes === floor) {
                    posY -= 1;
                    playerTop -= 20;
                    document.getElementById("player").style.top = playerTop + "px";
                    let boxId = String(posY) + String(posX);
                    document.getElementById(boxId).style.top = (playerTop - 20) + "px";

                }
            }

        }
    }
    if (keyName === "ArrowDown") {
        console.log("posX: ", posX);
        console.log("posY: ", posY);
        if (posY <= 7 && posY > 0) {
            if ((map[posY + 1][posX] === floor) || (map[posY + 1][posX] === floor)) {
                posY += 1;
                playerTop += 20;
                document.getElementById("player").style.top = playerTop + "px";
            }
            else if (map[posY + 1][posX] === box) {
                let boxDes = map[posY + 2][posX]
                if (boxDes === floor || boxDes === floor) {
                    posY += 1;
                    playerTop += 20;
                    document.getElementById("player").style.top = playerTop + "px";
                    let boxId = String(posY) + String(posX);
                    document.getElementById(boxId).style.top = (playerTop + 20) + "px";
                }
            }
        }
    }
    if (keyName === "ArrowRight") {
        console.log("posX: ", posX);
        console.log("posY: ", posY);
        if (posX <= 6 && posX >= 0) {
            if ((map[posY][posX + 1] === floor) || (map[posY][posX + 1] === floor)) {
                posX += 1;
                playerLeft += 20;
                document.getElementById("player").style.left = playerLeft + "px";

            }
            else if (map[posY][posX + 1] === box) {
                let boxDes = map[posY][posX + 2]
                if (boxDes === floor || boxDes === floor) {
                    posX += 1;
                    playerLeft += 20;
                    document.getElementById("player").style.left = playerLeft + "px";
                    let boxId = String(posY) + String(posX);
                    document.getElementById(boxId).style.left = (playerLeft + 20) + "px";
                }
            }

        }
    }
    if (keyName === "ArrowLeft") {
        console.log("posX: ", posX);
        console.log("posY: ", posY);
        if (posX <= 6 && posX > 0) {
            if ((map[posY][posX - 1] === floor) || (map[posY][posX - 1] === box)) {
                posX -= 1;
                playerLeft -= 20;
                document.getElementById("player").style.left = playerLeft + "px";
            }
            else if (map[posY][posX - 1] === box) {
                let boxDes = map[posY][posX - 2]
                if (boxDes === floor || boxDes === floor) {
                    posX -= 1;
                    playerLeft -= 20;
                    document.getElementById("player").style.left = playerLeft + "px";
                    let boxId = String(posY) + String(posX);
                    document.getElementById(boxId).style.left = (playerLeft - 20) + "px";
                }
            }
        }
    }
})

function createElement(cssClass) {
    let element = document.createElement("div");
    element.setAttribute("class", cssClass);
    return element;
}

function createMap() {
    var row;
    var column;
    for (let rowIndex = 0; rowIndex < map.length; rowIndex++) {
        row = createElement("row");
        mapDiv.appendChild(row);

        var rowAsString = map[rowIndex];
        console.log(rowAsString);

        for (let colIndex = 0; colIndex < rowAsString.length; colIndex++) {
            column = createElement("column");
            // column.textContent = tmpRow[rowIndex];
            row.appendChild(column);

            let cell = rowAsString[colIndex]

            if (cell == wall) {
                column.style.backgroundColor = "blue";
            }

            if (cell == box) {
                let boxDiv = document.createElement("div");
                boxDiv.id = String(rowIndex) + String(colIndex);
                boxDiv.classList.add("box");
                document.body.appendChild(boxDiv);
                boxDiv.style.left = (colIndex * 20) + "px";
                boxDiv.style.top = (rowIndex * 20) + "px";
            }

            if (cell == floor) {
                column.style.backgroundColor = "coral";
            }

            if (cell == boxInContainer) {
                column.style.backgroundColor = "brown";
            }
        }        
    }

}

createMap();