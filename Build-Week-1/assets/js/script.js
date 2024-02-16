document.addEventListener("DOMContentLoaded", function () {
  //nel momento in cui viene caricato il contenuto del DOM esegue la funzione
  localStorage.removeItem("ArrayGiuste"); //viene rimosso il local storage
  const checkbox = document.getElementById("checkbox"); //vengono inseriti in delle costanti alcuni elementi html tramite id o class
  const bottone = document.getElementById("bottone");
  const popup = document.getElementById("popup");
  const close = document.querySelector(".close");

  bottone.addEventListener("click", function () {
    //se il checkbox non è stato cliccato apre un modale, altrimenti porta a pg2
    if (!checkbox.checked) {
      popup.style.display = "block";
    } else {
      window.location.href = "index2.html";
    }
  });
  close.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
