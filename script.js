const tableau = [];
const tableau2 = [];

// Fonction pour ajouter des éléments au tableau
function addElementToArray(array, count) {
  for (let i = 0; i < count; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
}

function point(array, count) {
  for (let i = 1; i < count; i++) {
    array.push(`${i}`);
  }
}

// Exécuté une fois que le DOM est entièrement chargé
document.addEventListener("DOMContentLoaded", (event) => {
  // Ajout d'éléments au tableau original
  addElementToArray(tableau, 10);
  point(tableau2, 11);
  console.log(tableau2);
  // Création du premier graphique avec les données non triées
  const ctx = document.getElementById("initial").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: tableau2,
      datasets: [
        {
          label: "Initial",
          data: tableau,
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
      ],
    },
    options: { scales: { y: { beginAtZero: true } } },
  });

  // Création d'une copie du tableau pour le tri
  const tableauTrie = [...tableau].sort((a, b) => a - b);

  // Création du second graphique avec les données triées
  const ctx2 = document.getElementById("trie").getContext("2d");
  new Chart(ctx2, {
    type: "line",
    data: {
      labels: tableau2,
      datasets: [
        {
          label: "Trie",
          data: tableauTrie,
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 1,
        },
      ],
    },
    options: { scales: { y: { beginAtZero: true } } },
  });
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  window.location.reload();
});

// Methode du tri a bulle
//   function selectionSort(array) {
//     for (let i = 0; i < array.length - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[j] < array[minIndex]) {
//           minIndex = j;
//         }
//       }
//       [array[i], array[minIndex]] = [array[minIndex], array[i]];
//     }
//     console.log(array);
//   }
