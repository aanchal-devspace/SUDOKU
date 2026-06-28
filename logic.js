const p1 = [
[0,0,3,0,2,0,6,0,0],
[9,0,0,3,0,5,0,0,1],
[0,0,1,8,0,6,4,0,0],
[0,0,8,1,0,2,9,0,0],
[7,0,0,0,0,0,0,0,8],
[0,0,6,7,0,8,2,0,0],
[0,0,2,6,0,9,5,0,0],
[8,0,0,2,0,3,0,0,9],
[0,0,5,0,1,0,3,0,0]
];

const p2 = [
[0,2,0,6,0,8,0,0,0],
[5,8,0,0,0,9,7,0,0],
[0,0,0,0,4,0,0,0,0],
[3,7,0,0,0,0,5,0,0],
[6,0,0,0,0,0,0,0,4],
[0,0,8,0,0,0,0,1,3],
[0,0,0,0,2,0,0,0,0],
[0,0,9,8,0,0,0,3,6],
[0,0,0,3,0,6,0,9,0]
];

const p3 = [
[0,0,0,2,6,0,7,0,1],
[6,8,0,0,7,0,0,9,0],
[1,9,0,0,0,4,5,0,0],
[8,2,0,1,0,0,0,4,0],
[0,0,4,6,0,2,9,0,0],
[0,5,0,0,0,3,0,2,8],
[0,0,9,3,0,0,0,7,4],
[0,4,0,0,5,0,0,3,6],
[7,0,3,0,1,8,0,0,0]
];

const p4 = [
[0,0,0,0,0,0,2,0,0],
[0,8,0,0,0,7,0,9,0],
[6,0,2,0,0,0,5,0,0],
[0,7,0,0,6,0,0,0,0],
[0,0,0,9,0,1,0,0,0],
[0,0,0,0,2,0,0,4,0],
[0,0,5,0,0,0,6,0,3],
[0,9,0,4,0,0,0,7,0],
[0,0,6,0,0,0,0,0,0]
];

const p5 = [
[2,0,0,0,8,0,3,0,0],
[0,6,0,0,7,0,0,8,4],
[0,3,0,5,0,0,2,0,9],
[0,0,0,1,0,5,4,0,8],
[0,0,0,0,0,0,0,0,0],
[4,0,2,7,0,6,0,0,0],
[3,0,1,0,0,7,0,4,0],
[7,2,0,0,4,0,0,6,0],
[0,0,4,0,1,0,0,0,3]
];
const puzzles = [p1, p2, p3,p4, p5];
let puzzle;


const board = document.getElementById("board");

function create() {
    board.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {

            const cell = document.createElement("input");
            cell.type = "number";
            cell.min = 1;
            cell.max = 9;

            if (puzzle[i][j] !== 0) {
                cell.value = puzzle[i][j];
                cell.disabled = true;
            }

            cell.id = i + "-" + j;
            board.appendChild(cell);
        }
    }
}

function newgame() {

    let index = Math.floor(Math.random() * puzzles.length);

    puzzle = puzzles[index];

    create();
    document.getElementById("message").innerHTML = "";
}

function check() {

    for (let i = 0; i < 9; i++) {
        let row = [];
        let col = [];

        for (let j = 0; j < 9; j++) {
            let rvalue = Number(document.getElementById(i + "-" + j).value);
            let cvalue = Number(document.getElementById(j + "-" + i).value);


            if (rvalue < 1 || rvalue > 9 || row.includes(rvalue)) {
                document.getElementById("message").innerHTML = "Incorrect Solution!,try again";
                return;
            }
            if (cvalue < 1 || cvalue > 9 || col.includes(cvalue)) {
                document.getElementById("message").innerHTML = "Incorrect Solution!,try again";
                return;
            }

            row.push(rvalue);
            col.push(cvalue);
        }
    }

    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {

            let box = [];

            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {

                    let value = Number(document.getElementById(i + "-" + j).value);

                    if (box.includes(value)) {
                        document.getElementById("message").innerHTML = "Incorrect Solution!";
                        return;
                    }

                    box.push(value);
                }
            }
        }
    }

    document.getElementById("message").innerHTML = "Congratulations! You cracked it!";
}

function reset() {
    create();
    document.getElementById("message").innerHTML = "";
}

newgame();