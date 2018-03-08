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
let playerTop = 40;
var playerLeft = 40;
var cell;
let mapDiv = document.getElementById("map");
var row;
var column;
let posX =2;
let posY =2;
let playerPos = false;
let boxes = [];

document.addEventListener("keydown", (event) => {  
    let keyName = event.key;
    if (keyName === "ArrowUp") {
        console.log("posX: ", posX);
        console.log("posY: ", posY);
        if (posY <= 7 && posY > 0) { 
            if ((map[posY-1][posX] === " ") || (map[posY-1][posX] === "O")) {
                posY -= 1;
                playerTop -= 20;
                document.getElementById("player").style.top = playerTop + "px";
            } 
            else if (map[posY-1][posX] === "B") {
                let boxDes = map[posY-2][posX]
                if (boxDes === " " || boxDes ==="O") {
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
   debugger;
            if ((map[posY+1][posX] === " ") || (map[posY+1][posX] === "O")) {
                posY += 1;
                playerTop += 20;
                document.getElementById("player").style.top = playerTop + "px";
            } 
            else if (map[posY+1][posX] === "B"){
                let boxDes = map[posY+2][posX]
                if (boxDes === " " || boxDes === "O") {
                    posY += 1;
                    playerTop += 20;
                    document.getElementById("player").style.top = playerTop + "px";
                    let boxId = String(posY) + String(posX);
                    document.getElementById(boxId).style.top = (playerTop + 20) +"px";
                }
            }
        }
    }
    if (keyName === "ArrowRight") {
        console.log("posX: ", posX);
        console.log("posY: ", posY);
        if (posX <= 6 && posX >= 0) { 
            if ((map[posY][posX+1] === " ") || (map[posY][posX+1] === "O"))  {
                posX += 1;
                playerLeft += 20;
                document.getElementById("player").style.left = playerLeft + "px";

            }
            else if (map[posY][posX+1] === "B") {
                let boxDes = map[posY][posX+2]
                if (boxDes === " " || boxDes ==="O") {
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
            if ((map[posY][posX-1] === " ") || (map[posY][posX-1] === "B")) {
                posX -= 1;
                playerLeft -= 20;
                document.getElementById("player").style.left = playerLeft + "px";
            } 
            else if (map[posY][posX-1] === "B"){
                let boxDes = map[posY][posX-2] 
                if (boxDes === " " || boxDes === "O") {
                    posX -= 1;
                    playerLeft -= 20;
                    document.getElementById("player").style.left = playerLeft + "px";
                    let boxId = String(posY) + String(posX);
                    document.getElementById(boxId).style.left = (playerLeft - 20) + "px";
                 }
            }
        }
    }
    // // if (playerPos) {
    // //     alert("You've finished!");
    // //     playerTop = 40;
    // //     playerLeft = 40;
    // //     posX = 2;
    // //     posY = 2;
    // //     playerPos = false;
    // //     document.getElementById("player").style.top = playerTop + "px";
    // //     document.getElementById("player").style.left = playerLeft + "px";

    // }
    }
)

for (y = 0; y < map.length; y++) {
    row = document.createElement("div");
    row.setAttribute("class","row");
    var tmpRow=map[y];
    console.log(tmpRow);
        for (x = 0; x < tmpRow.length; x++) {
            column = document.createElement("div");
            column.setAttribute("class", "column");
            // column.textContent = tmpRow[y];
            row.appendChild(column);
            if (tmpRow[x] == "W") {
                column.style.backgroundColor = "blue";
            }
            if (tmpRow[x] == "B") {
                let boxDiv = document.createElement("div");
                boxDiv.id = String(y)+String(x);
                boxDiv.classList.add("box");
                document.body.appendChild(boxDiv);
                boxDiv.style.left = (x*20) + "px";
                boxDiv.style.top = (y*20) + "px";
            }
            if (tmpRow[x] == "O") {
                column.style.backgroundColor = "coral";
            }
            if (tmpRow[x] == "X") {
                column.style.backgroundColor = "brown"
            }
        }
    mapDiv.appendChild(row);
}