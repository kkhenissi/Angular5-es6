let livre = 'le rouge et noir'
if(typeof livre === 'string') {
    const auteur = 'stendha';
//    auteur ='dosto'; we can't change a const value
}
// console.log(auteur); we can't use const atribute outside  bloc

for (var i = 0; i<10; i++) {
  setTimeout(function(){
      console.log(i);
  }, i*1000);
}
// here it will console i = 10 all time because for is so quicly executed and the i var  will passed to 10
// the solution is to change var i = 0 to let i = o 

const livres = [{nom:'Le joueur', editeur:''}];
livres.push ({nom:'La joueuse', editeur:''});
/// livres={};
// [ts] Impossible d'effectuer une assignation à 'livres', car il s'agit d'une constante ou d'une propriété en lecture seule.

