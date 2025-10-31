/**
 * Write here your update classes
 */

class UpdateTxt extends Observer {
  constructor(view) {
    super();
    this.view = view;
  }
  update(observable, args) {

    let commentaires = observable.comments;
    for(let i=0; i<commentaires.length; i++){
      let avis = this.view.makeavis(commentaires[i])
      this.view.lesavis.appendChild(avis)
    }
    this.view.totalavis.textContent = "Avis ("+ (++commentaires.length) + ")";
  
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
      /* let updateTxt  = new UpdateTxt(this.view);
      this.model.addObservers(updateTxt); */

      // link the updates to the model

     

      // ****  2. action
      // instanciate the actions
      let AddAvis = (event) => {
          event.preventDefault();
          let avis = this.view.getavis();
          if(avis.textContent !== ""){
              this.view.changeView()


              this.model.removeObserver(); 
              this.updateTxt = new UpdateTxt(this.view);
              this.model.addObservers(this.updateTxt);

              this.model.addavis(avis);

              if (this.view.formulaire) {
                 this.view.formulaire.querySelector("#avis").value = "";
              } 
          }
      }

      this.view.formulaire.addEventListener('submit', AddAvis);

      this.model.notifyObservers()

      // let actionButton = (event) => { ... }
      // link the actions to the view's widgets
      
  }
}
