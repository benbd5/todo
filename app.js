// DOM - Document Object Model

// Définir l'interface
const form = document.querySelector("#course-form"),
  listeDeTache = document.querySelector(".collection"),
  supprimerListe = document.querySelector(".supprimer-course"),
  contenuTache = document.querySelector("#contenuTache"),
  filtrer = document.querySelector("#filter");

//   Application
maListeDeTache();

function maListeDeTache() {
  // Ajouter un évènement
  form.addEventListener("submit", ajouterUneTache);

  // Supprimer une tâche
  listeDeTache.addEventListener("click", supprimerUneTache);

  //   Nettoyer la liste de tâche
  supprimerListe.addEventListener("click", clearList);

  //   Filtrer les tâches
  filtrer.addEventListener("keyup", filtrerTache);
}

function ajouterUneTache(e) {
  if (contenuTache.value === "") {
    alert("Ajouter une tâche");
  } else {
    //   Ajouter une balise
    const li = document.createElement("li");

    //   Ajouter une classe dans le <li>
    li.className = "collection-item";

    //   Relier le contenu du formulaire dans le <li>
    li.appendChild(document.createTextNode(contenuTache.value));

    //   Créer un lien <a>
    const link = document.createElement("a");

    //   Ajout classe à <a>
    link.className = "delete-item secondary-content";

    //   Ajout icône
    link.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

    //   Relier <a> dans le <li>
    li.appendChild(link);

    // Relier <a> dans le <li>
    listeDeTache.appendChild(li);

    //   Reset l'input après ajout dans liste de tâche
    contenuTache.value = "";
  }
  e.preventDefault();
}

// Supprimer une tâche
function supprimerUneTache(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Voulez-vous vraiment supprimer l'élément ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Nettoyer la liste
function clearList() {
  listeDeTache.innerHTML = "";
}

// Filtrer les tâches
function filtrerTache(e) {
  const contenuClavier = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (tache) {
    const motCle = tache.firstChild.textContent;
    if (motCle.toLocaleLowerCase().indexOf(contenuClavier) != -1) {
      tache.style.display = "block";
    } else {
      tache.style.display = "none";
    }
  });
}
