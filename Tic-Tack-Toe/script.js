let clickCount = 0;
const board = ["", "", "", "", "", "", "", "", ""];

const showMark = (e) => {
        var cell = document.getElementById(`${e.target.id}`);
        if (clickCount % 2 == 0) {
                // console.log(e.target.id);
                cell.style.backgroundImage = "url('./src/circle.png')";
                cell.style.backgroundSize = "150px";
                board.splice(e.target.id - 1, 1, "O");
        } else {
                // console.log(e.target.id);
                cell.style.backgroundImage = "url('./src/cross.jpg')";
                cell.style.backgroundSize = "150px";
                board.splice(e.target.id - 1, 1, "X");
        }
        const winner = checkWinner(board);
        if (winner) {
                document.getElementById("stats").innerText = `Player ${winner} wins!`
        } else {
                document.getElementById("stats").innerText = "It's a tie or no winner yet."
        }
        clickCount++;
};

function checkWinner(board) {
        const winningCombinations = [
                // Rows
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                // Columns
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                // Diagonals
                [0, 4, 8],
                [2, 4, 6],
        ];

        for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                if (
                        board[a] !== "" &&
                        board[a] === board[b] &&
                        board[a] === board[c]
                ) {
                        return board[a];
                }
        }

        return null; // No winner
}

const click = document.querySelectorAll("#click").forEach((element) => {
        element.addEventListener("click", showMark);
});
