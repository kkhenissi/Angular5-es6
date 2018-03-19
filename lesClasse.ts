class Livre {
    prix;
    titre;
    editeur;
  constructor(prix, titre){
      this.prix = prix;
      this.titre=titre;
      this.editeur='acte du sud';
  }
  getNotice (){
    //  return 'Titre:'+ this.titre + '/' + 'Editeur:'+ this.editeur; 
      return `Titre: ${this.titre} / 
              Editeur: ${this.editeur}`; 
  }
}
const livre1 = new Livre(25, 'la cle');
const livre2 = new Livre(27, 'la cle1');
const livre3 = new Livre(28, 'la cle2');
console.log(livre2.getNotice());

// l'heritage
class Roman extends Livre{
    type;
    constructor(prix, titre){
        super(prix, titre);
        this.type ="Roman";
    }
}
const roman1 = new Roman(20, 'la mare au diable');
console.log(roman1.getNotice);
console.log(roman1.type);

//template string    return `Titre: ${this.titre} / Editeur: ${this.editeur}`; 
const val = "les amis";
let templateString = `
<div>
  <p>"Bonjour ${val}"</p>
</div>
`