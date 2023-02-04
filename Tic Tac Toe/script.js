var currentPlayer = "X";

for (var i = 1; i <= 9; i++) {
  var cell = document.getElementById("cell-" + i);
  cell.onclick = function () {
    if (this.innerHTML === "") {
      this.innerHTML = currentPlayer;

      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  };
}
