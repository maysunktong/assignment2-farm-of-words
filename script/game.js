const TOTAL_ATTEMPTS = 5;
const MAX_WORD_LENGTH = 5;
const WORD_ARRAY_FRUITS = ["mango", "onion", "lemon", "olive", "apple", 'peach'];
const WORD_ARRAY_ANIMALS = ["goose", "horse", "sheep", "snake", "mouse"];
const WORD_ARRAY_PRODUCTS = ["wheat", "honey", "bread", "juice", "steak"];
const LETTER_REGEX = /^[a-z]+$/i;

const startGame = () => {
  let promptName = prompt(
    `🧙🏻‍♂️[Mayor Thomas]: Hi. My name is Thomas Morot, Mayor of Grönville. What is your name?`
  );
  if (!LETTER_REGEX.test(promptName)) {
    alert("Your name should only contain letters. Please try again.");
    return;
  }
  if (promptName === null || promptName.trim() === "") {
    alert("You cancelled the process. Exiting game.");
    return;
  }
  let promptMayor =
    prompt(`🧙🏻‍♂️[Mayor Thomas]: Hi ${promptName}! Your grandfather left you his little farm. Also, he asked me to give this letter to you.
     💌
    [0] Open letter
    [1] Change your name`);

  if (promptMayor === null || promptMayor.trim() === "") {
    alert("You cancelled the process. Exiting game.");
    return;
  }

  switch (promptMayor) {
    case "0":
      PROMPT_LETTER;
      break;
    case "1":
      startGame();
      break;
    default:
      alert("Invalid choice. Please try again.");
      promptMayor();
  }

  let promptLetter = prompt(`
    -------------------------------------------
     My dear ${promptName},                  
                                             
     This farm is a gift to you, my beloved grandchild. 
     But before you earn the ownership of the place,
     I want to test your knowledge first. 
     It is a word guessing game.              
    
     You have 5 attempts to guess the word right.
     
                            Warm hugs,
                            Grandpa
    -------------------------------------------
   [0] Start game
   [1] Change your name`);
  if (promptLetter === null || promptLetter.trim() === "") {
    return;
  }

  let promptCategory = prompt(
    `
    
    `
  );
};
document.getElementById("startButton").addEventListener("click", startGame);
