// Variables globales
var currentPlayer = "X";
var moves = 0;
var resultDiv = document.getElementById("result");

// Fonction pour vérifier si un joueur a gagné
function checkWinner() {
  var cells = document.getElementsByTagName("td");

  // Vérification des lignes
  for (var i = 0; i < 9; i += 3) {
    if (
      cells[i].innerHTML !== "" &&
      cells[i].innerHTML === cells[i + 1].innerHTML &&
      cells[i].innerHTML === cells[i + 2].innerHTML
    ) {
      resultDiv.innerHTML = "Le joueur " + currentPlayer + " a gagné!";
      disableCells();
      return true;
    }
  }

  // Vérification des colonnes
  for (var i = 0; i < 3; i++) {
    if (
      cells[i].innerHTML !== "" &&
      cells[i].innerHTML === cells[i + 3].innerHTML &&
      cells[i].innerHTML === cells[i + 6].innerHTML
    ) {
      resultDiv.innerHTML = "Le joueur " + currentPlayer + " a gagné!";
      disableCells();
      return true;
    }
  }

  // Vérification des diagonales
  if (
    cells[0].innerHTML !== "" &&
    cells[0].innerHTML === cells[4].innerHTML &&
    cells[0].innerHTML === cells[8].innerHTML
  ) {
    resultDiv.innerHTML = "Le joueur " + currentPlayer + " a gagné!";
    disableCells();
    return true;
  }

  if (
    cells[2].innerHTML !== "" &&
    cells[2].innerHTML === cells[4].innerHTML &&
    cells[2].innerHTML === cells[6].innerHTML
  ) {
    resultDiv.innerHTML = "Le joueur " + currentPlayer + " a gagné!";
    disableCells();
    return true;
  }

  // Vérification de l'égalité
  if (moves === 8) {
    resultDiv.innerHTML = "Match nul!";
    disableCells();
    return true;
  }
  return false;
}

// Fonction pour désactiver les cellules une fois que la partie est terminée
function disableCells() {
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.add("occupied");
  }
}

// Fonction qui gère les clics sur les cellules
function cellClicked() {
  if (this.innerHTML === "") {
    this.innerHTML = currentPlayer;
    this.classList.add("occupied");

    moves++;
    if (checkWinner() === false) {
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      document
        .getElementsByTagName("table")[0]
        .classList.toggle("current-player");
    }
  }
}

// Ajout des gestionnaires d'événements aux cellules
var cells = document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

// Ajout d'un bouton pour redémarrer le jeu
var restartBtn = document.createElement("button");
restartBtn.innerHTML = "Redémarrer";
restartBtn.onclick = function () {
  for (var i = 1; i <= 9; i++) {
    var cell = document.getElementById("cell-" + i);
    cell.innerHTML = "";
    cell.classList.remove("occupied");
  }
  currentPlayer = "X";
  moves = 0;
  resultDiv.innerHTML = "";

  document.getElementsByTagName("table")[0].classList.remove("current-player");
};
document.body.appendChild(restartBtn);
