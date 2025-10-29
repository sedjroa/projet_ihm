
/**
 * Write here your view classes
 * - instanciate the widgets
 * - append the widgets to the DOM
 */
class View {
  constructor() {
    this.body = document.body;
    this.body.innerHTML = `
      <nav class="navbar navbar-expand-lg text-light" style="background-color: #9A3F3F;">
        <div class="container-fluid">
            <img src="" alt="" width="40" height="40" class="d-inline-block align-text-top me-2" style="background-color: white; border-radius: 50%;">
            <a class="navbar-brand text-light" href="#">Prêt-à-Lire</a>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link text-light" href="#">Accueil</a></li>
                 <li class="nav-item"><a class="nav-link text-light" href="#">Map</a></li>
                 <li class="nav-item"><a class="nav-link text-light" href="#">Connexion</a></li>
            </ul>
        </div>
    </nav>
    <main class="container my-5" style="min-height: 80vh; ">
        <div class="card" style="background-color:#C1856D; color:white;">
            <div class="card-body" style="display:flex; align-items:center; justify-content:flex-start; flex-direction:row; gap:10px; cursor:pointer;">
                <i class="fa-solid fa-arrow-left" ></i>
                <p class="card-text" style="margin-left:535px;">Donnez votre avis</p>
            </div>
         </div>
        <div class="mb-4" style="background-color:#E6CFA9; padding:20px; border-radius:15px; margin-top:10px">
            <div class="card-body" id="perso" style="width: 120px; width: 120px; text-align: center; margin: auto;">
                <img src="images/mortadon.jpg" alt="" style=" width: 100%; border-radius: 50%;">
                <p class="card-text">Clément</p>
            </div>

            <form id="formulaire">
                <div class="mb-3">
                    <label for="note" class="form-label">Note:</label>
                    <input type="number" id="note" class="form-control w-25" min="1" max="5" placeholder="5">
                </div>
                <div class="mb-3">
                    <label for="avis" class="form-label">Commentaire:</label>
                    <textarea id="avis" class="form-control" rows="3" placeholder=""></textarea>
                </div>
    
                <button type="submit" class="btn btn-success w-100" style="background-color: #C1856D; font-weight:bold">Envoyer</button>
            </form>

        </div>
          
    </main>

    <footer class="text-light text-center py-3" style="background-color: #9A3F3F; margin-bottom: 0;">
       
        <div class="mb-3">
            <p>VOULE-VOUS UN LVRES ? BIEN VOUS ÊTES AU BON ENDROIT</p>
            <h3>Demander plus d'informations</h3>
            <a href="" style="color: black;text-decoration:none; padding:5px 20px; background-color:#FBF9D1; border-radius: 7px;">Nous contacter</a>
        </div>
        <hr>
        <div class="mb-3" style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
            
             <div class="mb-3">
                <img src="" alt="" width="40" height="40" class="d-inline-block align-text-top me-2" style="background-color: white; border-radius: 50%; margin-left:20px;">
            </div>
            <div class="container-fluid">
                <ul class="navbar-nav ms-auto" style="display: flex; flex-direction: row; gap:15px; justify-content:center; align-items:center; list-style-type:none; padding-left:0;">
                    <li class="nav-item"><a class="nav-link text-light" href="#">Accueil</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#">Map</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#">Inscription</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#">Connexion</a></li>
                </ul>
                <p>COPYRIGHT © 2025 | Tous droits réservés</p>            
             </div>
             
        </div>
    </footer>
    `;

    // pour y accéder depuis ton contrôleur
    this.formulaire = this.body.querySelector("#formulaire");
    this.lesavis = this.body.querySelector("#lesavis");
  }

  getavis = function() {
    let UnAvis = document.createElement("div");
        UnAvis.className = "unavis";
        let p = document.createElement("p");
        p.textContent = this.formulaire.querySelector("#avis").value;
        UnAvis.appendChild(p)
        return UnAvis;
  }
}

class NewView{
    constructor() {
        this.body = document.body;
        this.body.innerHTML = `
        <nav class="navbar navbar-expand-lg text-light" style="background-color: #9A3F3F;">
            <div class="container-fluid">
                <img src="" alt="" width="40" height="40" class="d-inline-block align-text-top me-2" style="background-color: white; border-radius: 50%;">
                <a class="navbar-brand text-light" href="#">Prêt-à-Lire</a>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link text-light" href="#">Accueil</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#">Map</a></li>
                    <li class="nav-item"><a class="nav-link text-light" href="#">Connexion</a></li>
                </ul>
            </div>
        </nav>
        <main class="container my-5" style="min-height: 80vh; ">
            <div>Notre nouvelle vue</div>
            <button type="submit">Donner une avis</button>
        </main>
        <footer class="text-light text-center py-3" style="background-color: #9A3F3F; margin-bottom: 0;">
            <div class="mb-3">
                <p>VOULE-VOUS UN LVRES ? BIEN VOUS ÊTES AU BON ENDROIT</p>
                <h3>Demander plus d'informations</h3>
                <a href="" style="color: black;text-decoration:none; padding:5px 20px; background-color:#FBF9D1; border-radius: 7px;">Nous contacter</a>
            </div>
            <hr>
            <div class="mb-3" style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
                
                <div class="mb-3">
                    <img src="" alt="" width="40" height="40" class="d-inline-block align-text-top me-2" style="background-color: white; border-radius: 50%; margin-left:20px;">
                </div>
                <div class="container-fluid">
                    <ul class="navbar-nav ms-auto" style="display: flex; flex-direction: row; gap:15px; justify-content:center; align-items:center; list-style-type:none; padding-left:0;">
                        <li class="nav-item"><a class="nav-link text-light" href="#">Accueil</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="#">Map</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="#">Inscription</a></li>
                        <li class="nav-item"><a class="nav-link text-light" href="#">Connexion</a></li>
                    </ul>
                    <p>COPYRIGHT © 2025 | Tous droits réservés</p>            
                </div>
            </div>
        </footer>
        `
        this.button = this.body.querySelector("button");
    }
}
