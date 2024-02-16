// Recupera la lunghezza dell'array questions
const ArrayDomandeJSON = localStorage.getItem("LunghezzaArrayDomande");
const ArrayDomande = JSON.parse(ArrayDomandeJSON);
console.log(ArrayDomande.length);

// Recupera le risposte corrette memorizzate localmente
const risposteGiusteJSON = localStorage.getItem("ArrayGiuste");
const arrayRisposteGiuste = JSON.parse(risposteGiusteJSON);
console.log(arrayRisposteGiuste);

// Calcola il numero di risposte corrette e sbagliate
const risposteCorrette = arrayRisposteGiuste.filter(
  (risposta) => risposta === true
).length;
const risposteSbagliate = 10 - risposteCorrette;

// Dati per il grafico a ciambella
const dati = {
  datasets: [
    {
      data: [risposteSbagliate, risposteCorrette],
      backgroundColor: ["#C2128D", "#41FFFF"],
      borderWidth: 0,
    },
  ],
};

// Opzioni del grafico
const opzioni = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 170, // Aumenta lo spazio interno alla ciambella
};

// Ottieni il riferimento al canvas
const ctx = document.getElementById("myChart").getContext("2d");

// Crea il grafico a ciambella
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: dati,
  options: opzioni,
});

// permette di aggiornare il contenuto delle percentuali mostrandole a destra e a sinistra della ciambella
const percenCorrette = document.getElementById("percentualeCorrette");
percenCorrette.innerText = `${(risposteCorrette / ArrayDomande.length) * 100}%`;

const numCorrette = document.getElementById("numCorrette");
numCorrette.innerText = `${risposteCorrette}/${ArrayDomande.length} questions `;

const percenIncorrette = document.getElementById("percentualeIncorrette");
percenIncorrette.innerText = `${
  ((ArrayDomande.length - risposteCorrette) / ArrayDomande.length) * 100
}%`;

const numIncorrette = document.getElementById("numIncorrette");
numIncorrette.innerText = `${ArrayDomande.length - risposteCorrette}/${
  ArrayDomande.length
} questions `;

const btnpg4 = document.getElementById("pg4");
btnpg4.addEventListener("click", function () {
  window.location.href = "index4.html";
});

const testoCommento = document.getElementById("testoCommento");
const commento = document.getElementById("sottoCommento");
const commentoh2 = document.getElementById("commento");
if ((risposteCorrette / ArrayDomande.length) * 100 >= 60) {
  commentoh2.innerText = "Congratulations!";
  commento.innerText = "You passed the exam.";
  testoCommento.innerText =
    "We'll send you the certificate\n in few minutes.\nCheck your email (including\n promotions / spam folder) ";
} else {
  commento.innerText = "You failed the exam";
  commento.style.color = "#BD0185";
  testoCommento.innerText =
    "Study more and try again.\n\n Stay strong and keep pushing\n forward in your learning journey.";
}
