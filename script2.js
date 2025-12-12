/**
 * Énoncé du problème :

Afficher les nombres de 1 à n (ou les stocker dans un tableau).

- Si le nombre est divisible par 3, afficher « Fizz ».

- Si le nombre est divisible par 5, afficher « Buzz ».

- Si le nombre est divisible par 3 et 5, afficher « FizzBuzz ».

- Si aucune des conditions précédentes n'est remplie, afficher le nombre.
 */

const fizzBuzz = (n) => {
  // Création d'un tableau vide result
  const result = [];
  // boucle for qui va parcourir n
  for (let i = 1; i <= n; i++) {
    // Création de la variable value
    let value = "";

    // Conditions if

    // si le nombre est divisible par 3 seulement
    if (i % 3 === 0) {
      value += "Fizz";
    }
    // si le nombre est divisible par 5 seulement
    if (i % 5 === 0) {
      value += "Buzz";
    }
    // si le nombre n'étant pas divisible par 3 ni par 5
    if (value === "") {
      value = i.toString();
    }
    // Insertion de la vriable value dans le tableau result
    result.push(value);
  }
  // On retourne le tableau
  return result;
};

const n = 15; // n = nombre de 1 à 15 compris
const result = fizzBuzz(n); // Appel de la fonction fizzBuzz(n)
console.log(result); // [ "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz" ]

// La méthode push() ajoute les éléments définis à la fin d'un tableau et retourne la nouvelle longueur du tableau.
