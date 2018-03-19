// es5
const func = function() {
    console.log('bonjour');
}
func(); // pour l'executer

// es6
const func2 = () => {
    console.log('bonjour');
};
func2(); // pour l'executer

// la simplifier encore plus
const func3 = () => 'bonjour';
console.log(func3());