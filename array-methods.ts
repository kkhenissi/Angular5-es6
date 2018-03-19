livres.forEach(function(livre){
  console.log(livre.nom);
});

//  le map est une copie de notre tableau avec une mutation apportée deçus
const bibliotheque = livres.map(function(livre){
    livre.editeur = 'acte sud';
    return livre;
});
console.log(bibliotheque);
// normalement doit fonctionné sans touché au livre d'origine


// le reduce
const produits = [{nom: 'p1', prix:20}];
produits.push({nom:'p2', prix:22});
produits.push({nom:'p3', prix:25});

const total = produits.reduce(function(accumulateur, produit){
    return accumulateur + produit.prix;
}, 0);
console.log(total/ produits.length);

// le find des array
const produitPasCher = produits.find(function(produit){
    return produit.prix === 20;
});
console.log(produitPasCher);

// les filter des array
const produitsChers = produits.filter(function(produit){
   return produit.prix > 21;
});
console.log(produitsChers);

