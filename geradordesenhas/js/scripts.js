// Seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");

const generatePasswordElement = document.querySelector("#generated-password");

// Funções
// Letras, Números e Símbolos
// basicamente existe uma tabela de números ascii em JavaScript que determinado número irá me dar um certo caractere
/* String.fromCharCode(Math.floor(Math.random() * 26) + 97 -> multipliquei por 26 pq são 26 letras no alfabeto, Math.random vai me dar um número quebrado, logo coloquei Math.floor para me retornar um numero inteiro, e tive que somar 97 para pegar apenas letras minusculas pois começam a partir do 97 na tabela ascii*/
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

/* teremos um número entre 0 á 9 */
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%&*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

/* getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol -> cada uma dessas funções me retorna UM caractere*/

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";

  const passwordLenght = 10;

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];

  /* irá me dar um password com 12 caracteres */
  for (i = 0; i < passwordLenght; i = i + 4) {
    generators.forEach(() => {
      const randomValue =
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }

  /* colocando password com 10 caracteres */
  password = password.slice(0, passwordLenght);

  generatePasswordElement.style.display = "block";
  generatePasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});
