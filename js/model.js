

/**
 * Write here your model classes
 * - extend Observable
 * - determine precisely the data of your model
 * - write the methods to access and modify the data
 * - don't forget to notify the observers when the data are modified
 */
class Model extends Observable {
    
    constructor(){
        super();
        this.comment = [
            "J'aime particulièrement les livres de John Grisham. Je les voulais en physique sans faire 20km pour aller dans une médiathèques. Elibrary est une idée géniale. Je vous le recommande.",
            "Application très utile pour les amateurs de lecture comme moi. La variété des livres disponibles est impressionnante et l'interface est conviviale.",
            "Je suis ravi de pouvoir emprunter des livres numériques facilement via cette plateforme. Cela m'a permis de découvrir de nouveaux auteurs que je n'aurais pas lus autrement."
        ] ;
    }

    addavis(avis){
       /*  this.comment.push(avis); */
        this.comment.push(avis.textContent);
        this.setChanged();
        this.notifyObservers();
    }
}

