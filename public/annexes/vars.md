En javascript on déclare des variable de la manière suivante:
```js
var foo;
foo = 3; // OK, déclaré
bar = 5; // not OK, variable non déclaré
var toto = 25; // initialisation à la déclaration
```

# La portée:
JavaScript a deux types de portées : globale et locale.  Si vous déclarez une variable en dehors d'une définition de fonction, il s'agit d'une variable globale et sa valeur est accessible et modifiable dans tout le programme.  En revanche, si vous déclarez une variable au sein d'une définition de fonction, il s'agit d'une variable locale.  Elle est créée et détruite chaque fois que la fonction est exécutée ; en dehors de cette fonction, aucun code ne peut y accéder.  JavaScript ne prend pas en charge la portée de bloc (un ensemble d'accolades {. . .} définissant une nouvelle portée), sauf dans le cas particulier de variables ayant une portée de bloc.  


Une variable locale peut posséder le même nom qu'une variable globale, mais elle est entièrement dissociée de celle-ci. La modification de la valeur d'une variable n'a aucun effet sur l'autre variable.  Seule la version locale est significative au sein de la fonction dans laquelle elle est déclarée.  

```js
// Global definition of aCentaur.
var aCentaur = "a horse with rider,";

// A local aCentaur variable is declared in this function.
function antiquities(){

   var aCentaur = "A centaur is probably a mounted Scythian warrior";
}

antiquities();
aCentaur += " as seen from a distance by a naive innocent.";

document.write(aCentaur);

// Output: "a horse with rider, as seen from a distance by a naive innocent."
```

# Portées de bloc
La norme ES6 de javascript inclu la prise en charge de let et de const, qui sont des variables ayant une portée de bloc.  Pour ces variables, les accolades {. . .} définissent une nouvelle portée.  Lorsque vous affectez l'une de ces variables à une valeur particulière, la valeur s'applique uniquement à la portée dans laquelle elle est définie.  

L'exemple suivant illustre l'utilisation de let et de la portée de bloc.
```js
let x = 10;
var y = 10;
{
    let x = 5;
    var y = 5;
    {
        let x = 2;
        var y = 2;
        console.log("x: " + x + "<br/>");
        console.log("y: " + y + "<br/>");
        // Output:
        // x: 2
        // y: 2
    }
    console.log("x: " + x + "<br/>");
    console.log("y: " + y + "<br/>");
    // Output:
    // x: 5
    // y: 2
}

console.log("x: " + x + "<br/>");
console.log("y: " + y + "<br/>");
// Output:
// x: 10
// y: 2
```

La particularité de const vient du fait qu'il s'agit d'une constante, elle nécéssite obligatoirement d'être initialisé et ne peux changer de valeur.
```js
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
}

console.log(number);
// expected output: 42
```
