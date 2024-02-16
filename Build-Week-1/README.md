# Build-Week-1

## Descrizione del progetto

Il progetto prevede di ricreare la pagina del quiz di EPICODE. In questo quiz l'utente deve rispondere ad una serie di domande, per ognuna delle quali ha a disposizione da due a quattro opzioni di risposta e 30 secondi di tempo.
Al termine del quiz l'utente avrà il resoconto del suo test e potrà fornire una valutazione in merito all'esperienza.

## Struttura del progetto

- Welcome Page
- Quiz Page
- Results Page
- Feedback Page

## Elementi comuni

Ogni pagina ha una struttura HTML simile. Nell' `<header>` si trova un `<img>` con il logo di EPICODE all'interno. Anche lo sfondo è lo stesso per tutte le pagine.
Abbiamo creato un unico foglio css, che contiene differenti stili associati alle pagine html.

## Tecnologie utilizzate

- HTML
- CSS
- JAVASCRIPT
- CHART.JS

Per l'organizzazione del gruppo e dei task abbiamo utilizzato il gestionale ASANA.

### 1) Welcome Page

#### Struttura pagina

La pagina HTML
index.html
è la prima schermata che compare di fronte all'utente. Qui viene dato il benvenuto all'utente e si trovano le istruzioni con la descrizione del quiz.

In fondo alla pagina è stato inserito un  
`<input type="checkbox">`
accompagnata da una
`<label>`
che chiede agli utenti di promettere di rispondere da soli, senza l'aiuto di nessuno. Di fianco ad essa troviamo un button "PROCEED".

#### Funzionalità JavaScript

Nel file script.js è stato inserito un `addEventListener`relativo al button, con controllo condizionale.
Se l'utente ha spuntato la casella della checkbox, e clicca sul pulsante "PROCEED" allora verrà reindirizzato sulla pagina del quiz vero e proprio; se invece l'utente prova a cliccare sul pulsante "PROCEED" prima di aver spuntato la voce descritta in precedenza, comparirà una modale che chiederà all'utente di fare il "check" sulla casella per poter proseguire.

### 2) Question Page

#### Struttura pagina

La pagina HTML `index2.html` è la seconda schermata che compare di fronte all'utente, a cui si accede dopo il controllo menzionato precedentemente. Al caricamento della pagina, l'utente vedrà comparire sulla schermata la prima domanda del quiz, sotto la quale saranno presenti le opzioni di risposta. In alto a destra è invece presente un timer circolare della durata di 30 secondi, che indica il tempo rimanente per rispondere al quesito. Ad ogni secondo che passa, la barra si consuma progressivamente.
Anche in questo caso al fondo della pagina è presente un button "PROCEED", che conferma la risposta selezionata e avanza alla domanda successiva.
Qui sono inseriti dei `div` che andranno a contenere i Button aggiunti tramite codice javascript.

#### Funzionalità JavaScript

Nel file `script2.js` sono presenti diversi elementi e funzionalità relative a questa pagina.
Al caricamento della pagina viene mostrata la prima domanda dell' array question e le relative opzioni di risposta. Quando l'utente seleziona la risposta, il button "PROCEED" viene abilitato. Al click dell'utente sul bottone, se la risposta selezionata corrisponde a quella corretta indicata nell' àrray question, il valore booleano "true", verrà inserito in un ArrayRisposte. Altrimenti non verrà inserito alcun valore.
Dopo aver selezionato la risposta e fatto click sul pulsante "PROCEED", il contenuto dell'html viene aggiornato mostrando la domanda successiva. Le risposte corrette vengono salvate nel `localStorage` in un array contentente una serie di valori "true".
Se l'utente non seleziona nessuna risposta, o ne seleziona una ma non clicca sul pulsante proceed, allo scadere del timer di trenta secondi, il contenuto dell'html viene aggiornato mostrando la domanda successiva e non viene inserito nessun valore nell'array (come se l'utente avesse dato la risposta sbagliata).
Una volta terminate le domande, fatto click su "PROCEED" e terminato il tempo, l'utente viene portato alla pagina dei risultati.

### 3) Results Page

#### Struttura pagina

La pagina HTML `index3.html` è la terza schermata che compare di fronte all'utente, a cui si accede dopo i passaggi illustrati precedentemente.
Al centro della pagina troviamo un grafico a ciambella che riporta i risultati del test.
Rispetto al grafico, a sinistra sono presenti le percentuali delle risposte corrette, a destra quelle sbagliate.
Al centro della ciambella appare un messaggio diverso in base all'esito del test ("superato" o "non superato")
Nella parte inferiore è presente un button "RATE US".

#### Funzionalità JavaScript

Attraverso il `locale Storage` viene recuperato l'array contenente tanti valori "true" quante sono le risoste corrette date dall'utente nella seconda pagina.
Questi valori, una volta recuperati, restituiscono - attraverso il grafico - le percentuali di risposte corrette e sbagliate.
Il grafico è stato realizzato attraverso la libreria `chart.js`.
Sul button "RATE US" è presente un `àddEventListener` che al click reindirizza alla pagina di valutazione della user experience.

### 4) Feedback Page

#### Struttura pagina

Nella quarta pagina l'utente viene invitato a lasciare una valutazione su un range da 1 a 10, selezionando un numero di stelline corrispondente al grado di soddisfazione.
È richiesto anche di lasciare un commento scritto nel campo di input sottostante.
Nella parte inferiore della pagina è presente il button "INVIA".

#### Funzionalità JavaScript

Per ogni stella sono stati aggiunti tre `àddEventListener`: uno che al passaggio del mouse le evidenzia; uno che alla fuoriuscita del mouse le decolora; uno che al click del mouse lascia evidenziata la stella selezionata e tutte quelle precedenti, aggiornando la `variabile voto`associandole il numero di stelle selezionato.
Il button "INVIA" ha un `addEventListener`che al click dell'utente controlla che entrambi i campi siano stati compilati. Se entrambe le condizioni sono vere, restituisce un messaggio che conferma la l'avvenuto invio della valutazione. Altrimenti, viene mostrato un altro messaggio in cui si invita l'utente a selezionare il numero di stelle e a compilare il campo input.
