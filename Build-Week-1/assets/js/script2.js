const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
localStorage.setItem("LunghezzaArrayDomande", JSON.stringify(questions));
document.addEventListener("DOMContentLoaded", function () {
  // Svuota il localStorage
  localStorage.removeItem("ArrayGiuste");
  inizializzaQuiz(); //parte la funzione
});

//VARIABILI GLOBALI
let domande = 0;
let countdownInterval;
const ArrayRisposte = [];
const btnProcedi = document.getElementById("bottone");
// Funzione per mostrare una domanda
const mostraDomanda = (elemento) => {
  //
  clearTimeout(countdownInterval);
  const domandeElement = document.getElementById("domande"); // indica il testo della domanda nel file html
  domandeElement.innerText = elemento.question; //

  //serie di funzioni
  mostraRisposte(elemento);
  mostraRispostaGiusta(elemento);
  aggiungiClickRisposte();
  aggiornaNumeroDomanda();
  avviaTimer();
};

// Funzione per mostrare le risposte sbagliate
const mostraRisposte = (elemento) => {
  //
  const risposteSbagliate = document.querySelectorAll(".btn"); //  Seleziona le risposte e le inserisce nei pulsanti
  risposteSbagliate.forEach((button, i) => {
    if (button.id !== "btnDue") {
      if (elemento.incorrect_answers[i] != null) {
        //serve per nascondere i pulsanti che non hanno opzioni risposta
        button.innerHTML = elemento.incorrect_answers[i]; //se esiste, la posiziona nel pulsante
        button.style.display = "inline-block";
      } else {
        button.style.display = "none";
      }
    }
  });
};

aggiungiClickRisposte = () => {
  const risposte = document.querySelectorAll(".btn");
  risposte.forEach((button, i) => {
    button.addEventListener("click", function () {
      risposte.forEach((risposta) => {
        risposta.classList.remove("selezionato");
      });
      button.classList.add("selezionato");
      btnProcedi.disabled = false; //
      btnProcedi.classList.add("bottone"); //
    });
  });
};

// Funzione per mostrare la risposta corretta
const mostraRispostaGiusta = (elemento) => {
  const rispostaGiusta = document.getElementById("btnDue");
  rispostaGiusta.innerHTML = elemento.correct_answer;
};

// Funzione per aggiornare la scritta in basso con il numero della domanda
const aggiornaNumeroDomanda = () => {
  const numeroQuestion = document.getElementById("numeroQuestionId");
  numeroQuestion.innerText = domande + 1;
};

// Funzione per avviare il timer

const avviaTimer = () => {
  let countdown = 10;
  let progressbarCircle = document.querySelector(".progressbar-progress");

  const updateTimer = () => {
    document.querySelector(".progressbar-text").textContent = countdown;
    let percentCompleted = (countdown / 10) * 100; // percentuale completata del timer
    let dashOffset = 502 - (502 * percentCompleted) / 100; //aggiorna lo stile
    progressbarCircle.style.strokeDashoffset = dashOffset;
    countdown--; // decremencrememento il valore di countdown

    if (countdown < 0) {
      // controlla se è stata selezionata
      const rispostaSelezionata =
        document.getElementsByClassName("selezionato")[0];
      // se non trova nulla di selezionato, simula il click su una risposta
      if (!rispostaSelezionata) {
        document.querySelector(".btn").click();
      }
      procediConDomandaSuccessiva();
    } else {
      countdownInterval = setTimeout(updateTimer, 1000); //aggiornamento dei timer
    }
  };

  updateTimer();
};
// Funzione per gestire il click sul pulsante "PROCEED"
const procediConDomandaSuccessiva = () => {
  const rispostaSelezionata = document.getElementsByClassName("selezionato")[0];

  const rispostaGiusta = document.getElementById("btnDue");
  if (rispostaGiusta.innerText === rispostaSelezionata.innerText) {
    //se il testo della risposta selezionata....
    ArrayRisposte.push(true);
    localStorage.setItem("ArrayGiuste", JSON.stringify(ArrayRisposte));
  }
  console.log(ArrayRisposte);
  domande++;

  if (domande >= questions.length) {
    window.location.href = "index3.html";
    return;
  }

  const elementoDomandaSuccessiva = questions[domande];
  const selezionati = document.querySelectorAll(".selezionato");
  selezionati.forEach((button) => {
    button.classList.remove("selezionato");
  });

  mostraDomanda(elementoDomandaSuccessiva);
  btnProcedi.disabled = true;
  btnProcedi.classList.remove("bottone");
};

// Funzione per aggiungere un listener al click sul pulsante "PROCEED"
const aggiungiListenerProcedi = () => {
  const bottoneAvanti = document.getElementById("bottone");
  bottoneAvanti.addEventListener("click", procediConDomandaSuccessiva);
};

// Funzione iniziale per mostrare la prima domanda all'avvio
const inizializzaQuiz = () => {
  //chiama la funzione mostraDomanda e aggiungiListenerProcedi
  mostraDomanda(questions[domande]);
  aggiungiListenerProcedi();
};

// TIPS:

// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno.
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀
