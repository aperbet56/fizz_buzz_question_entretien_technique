/**
 * Énoncé du problème :

Afficher les nombres de 1 à n (ou les stocker dans un tableau).

- Si le nombre est divisible par 3, afficher « Fizz ».

- Si le nombre est divisible par 5, afficher « Buzz ».

- Si le nombre est divisible par 3 et 5, afficher « FizzBuzz ».

- Si aucune des conditions précédentes n'est remplie, afficher le nombre.
 */

// Déclaration de la fonction fizzBuzz ayant comme paramètre n
const fizzBuzz = (n) => {
  // Création d'un tableau vide result
  const result = [];
  // Boucle for
  for (let i = 1; i <= n; i++) {
    // Condition if... else if... else
    if (i % 3 === 0 && i % 5 === 0) {
      // Si le nombre est divisible par 3 et 5
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      // sinon si le nombre est divisible par 3 seulement
      result.push("Fizz");
    } else if (i % 5 === 0) {
      // sinon si le nombre est divisible par 5 seulement
      result.push("Buzz");
    } else {
      // le nombre n'étant pas divisible par 3 ni par 5
      result.push(i.toString());
    }
  }
  return result; // Retourne le tableau avec les diférentes valeurs
};

const n = 15; // Création de la constante n

const result = fizzBuzz(n); // Appel de la fonction fizzBuzz(n)

console.log(result); // [ "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz" ]

// La méthode push() ajoute les éléments définis à la fin d'un tableau et retourne la nouvelle longueur du tableau.
