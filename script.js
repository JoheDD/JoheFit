
const rutinas = {
  1: ["Cardio Abs (16 min)", "Oblique crunches", "Plank twist 30 seg", "Russian twist 1 min"],
  2: [],
  3: ["Cardio Abs (16 min)", "Mountain climbers", "Leg raises", "Plank hold 1 min"],
  4: [],
  5: ["Cardio Abs (16 min)", "High knees", "Toe touches", "Side plank 30 seg x lado"],
  6: [],
  7: ["Cardio Abs (16 min)", "V-ups", "Bicycle crunches", "Plank up-down 1 min"]
};

function mostrarRutina() {
  const dia = document.getElementById("dia").value;
  const rutina = rutinas[dia];
  const rutinaBox = document.getElementById("rutina");
  if (rutina.length === 0) {
    rutinaBox.innerHTML = "<p>Descanso de abs hoy 😎</p>";
  } else {
    rutinaBox.innerHTML = "<ul>" + rutina.map(ej => `<li>${ej}</li>`).join('') + "</ul>";
  }
}

document.addEventListener("DOMContentLoaded", mostrarRutina);
