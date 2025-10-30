/**
 * Write here your update classes
 */

class UpdateTxt extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }
  update(observable, args) {
    // update the view according to the model
    /* for (com in observable.comment){
        let commentaire = this.view.makeavis(com)
        console.log(commentaire);
        this.view.lesavis.appendChild(commentaire);
     } */

    let unavis = observable.comment[observable.comment.length - 1];
    let avisdiv = this.view.makeavis(unavis);
    console.log(avisdiv);
    this.view.lesavis.appendChild(avisdiv);
  }
}


/**
 * The controler' s job is to:
 * - instanciate the updates and actions
 * - link the updates to the model : the updates listen to the model
 * - link the actions to the view : the actions listen to the view's widgets
 *
 *
 *
 */
class Controler {

  constructor(model){

      this.view = new View();
      this.model = model;

      // **** 1. update
      // instanciate the updates
      let updateTxt  = new UpdateTxt(this.view);
      this.model.addObservers(updateTxt);

      // link the updates to the model

     

      // ****  2. action
      // instanciate the actions
      let AddAvis = (event) => {
          event.preventDefault();
          let avis = this.view.getavis();
          if(avis.textContent !== ""){
              this.model.addavis(avis);
              this.view.formulaire.querySelector("#avis").value = ""
          }
          this.view = new NewView();
      }
      /* let retour = (event) => {
          event.preventDefault();
          this.view = new View();
      } */

      this.view.formulaire.addEventListener('submit', AddAvis);
    /*   this.view.button.addEventListener('click', retour); */

      // ajouter un this.model.init contenant un this.model.notifyObservers()

      // let actionButton = (event) => { ... }
      // link the actions to the view's widgets
      
  }
}
