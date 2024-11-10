const WORD_LIST_FRUITS = [
  ["Fruits & Vegetables 🥕🍌"],
  ["mango", "onion", "lemon", "olive", "apple", "peach"],
];
const WORD_LIST_ANIMALS = [
  ["Farm Animals 🐷🦆"],
  ["goose", "horse", "sheep", "snake", "mouse"],
];
const WORD_LIST_PRODUCTS = [
  ["Farm Products 🚜🌾🥛"],
  ["wheat", "honey", "bread", "juice", "flour"],
];
const LETTER_REGEXP = /^[a-zæøåäöÆØÅÄÖ]+$/i;
const MAX_WORD_LENGTH = 5;
let maxAttempts = 6;

const playGame = () => {
  // every start of the game, reset attempts
  let leftAttempts = maxAttempts;
  // promptCategory starts
  let selectedCategory;
  while (true) {
    let promptCategory = prompt(
      `🚩:::Harvest Hints Arena:::🚩

  Please choose a category.
  [1] Fruits & Vegetables 🥕🍌
  [2] Farm Animals 🐷🦆
  [3] Farm Products 🚜🌾🥛
  `
    );

    if (promptCategory === null) {
      alert("You are exiting the game...");
      return;
    }

    if (promptCategory.trim() === "") {
      alert("No input. Please choose a category!");
      continue;
    }

    switch (promptCategory) {
      case "1":
        selectedCategory = WORD_LIST_FRUITS;
        break;
      case "2":
        selectedCategory = WORD_LIST_ANIMALS;
        break;
      case "3":
        selectedCategory = WORD_LIST_PRODUCTS;
        break;
      default:
        alert("You don't choose a valid category.");
        continue;
    }
    break;
  }

  const randomWord =
    selectedCategory[1][Math.floor(Math.random() * selectedCategory[1].length)];
  console.log("Key answer: ", randomWord);

  let isGuessedCorrectly = false;
  let feedbackArray = [];

  const checkGuess = (guess) => {
    // fill every letter in array as ⬛️, as default
    let feedback = Array(MAX_WORD_LENGTH).fill("⬛️");
    // fill whole array unused letter
    let usedLetters = Array(MAX_WORD_LENGTH).fill(false);
    // then check if its correct and right position, then green
    for (let i = 0; i < MAX_WORD_LENGTH; i++) {
      if (guess[i] === randomWord[i]) {
        feedback[i] = "✅";
        usedLetters[i] = true;
      }
    }
    // loop to check ⬛️ if correct letter but wrong spot
    for (let i = 0; i < MAX_WORD_LENGTH; i++) {
      if (feedback[i] === "⬛️") {
        for (let j = 0; j < MAX_WORD_LENGTH; j++) {
          if (!usedLetters[j] && guess[i] === randomWord[j]) {
            feedback[i] = "🐥";
            usedLetters[j] = true;
            break;
          }
        }
      }
    }
    return feedback.join("");
  };

  while (leftAttempts > 0 && !isGuessedCorrectly) {
    let attemptSummary = feedbackArray.join("\n");
    // promptUserGuess starts
    let promptUserGuess = prompt(
      `Category: ${selectedCategory[0]}
    Guess the ${MAX_WORD_LENGTH}-letter word. [${leftAttempts} attempts left].
    
    Attempt Summary:
    ${attemptSummary}
  `
    ).toLowerCase();
    if (promptUserGuess === null) {
      alert("You are exiting the game...");
      return;
    }

    if (promptUserGuess.trim() === "") {
      alert("No input. Back to game.");
      continue;
    }

    if (promptUserGuess.length != MAX_WORD_LENGTH) {
      alert(`Please enter a ${MAX_WORD_LENGTH}-letter word!`);
      continue;
    }

    if (!LETTER_REGEXP.test(promptUserGuess)) {
      alert("Your guess should only include letters!");
      continue;
    }

    leftAttempts--;

    let feedbackColorBlocks = checkGuess(promptUserGuess);
    feedbackArray.push(
      `Your guess: ${promptUserGuess.toUpperCase()} - ${feedbackColorBlocks}`
    );

    if (promptUserGuess === randomWord) {
      let win = confirm(
        `👏Congratulations👏 
      The correct word is ✨${randomWord.toUpperCase()}✨. 
      You get the farm! 👴🏻🌳
      🥳🥳🥳🥳🥳
      
      Do you want to play again?`
      );
      isGuessedCorrectly = true;
      if (win) {
        playGame();
      } else {
        alert("Thank you for playing!");
      }
    } else if (leftAttempts === 0) {
      let lose = confirm(
        `😭Game Over😭 
        The correct word was "${randomWord.toUpperCase()}". 
        Better luck next time! 👴🏻
        
        Do you want to play again?`
      );
      if (lose) {
        playGame();
      } else {
        alert("Thank you for playing!");
      }
    }
  }
};

const startGame = () => {
  // promptName starts
  let promptName = prompt(
    `🧙🏻‍♂️[Mayor]: Hi. My name is Thomas Morot, Mayor of Grönville. What is your name?`
  );

  if (promptName === null) {
    alert("You are exiting the game...");
    return;
  }

  if (promptName.trim() === "") {
    alert("No input. Try again!");
    return startGame();
  }

  if (!LETTER_REGEXP.test(promptName)) {
    alert("Your name should only contain letters. Please try again.");
    return startGame();
  }

  // promptMayor starts
  let promptMayor = prompt(`
    🧙🏻‍♂️[Mayor]: Hi ${promptName}! Your grandfather left you his little farm. Also, he asked me to give you this letter.
    💌
    -----------------------------------------------
    [0] Read letter
    [1] Change your name`);

  if (promptMayor === null) {
    alert("You are exiting the game...");
    return;
  }

  if (promptMayor.trim() === "") {
    alert("No input. Try again!");
    return startGame();
  }

  if (promptMayor === "1") {
    return startGame();
  } else if (promptMayor !== "0") {
    alert("Invalid choice. Please try again.");
    return startGame();
  }

  // promptLetter starts
  let promptLetter = prompt(`
    👴🏻[grandpa]: My dear ${promptName},                  
    This farm is a gift to you, my beloved grandchild. 
     But before you earn the ownership of the place, I want to test your knowledge first through a word guessing game.         
    
     You have ${maxAttempts} attempts to guess the correct word.
     ✅ - right letter & right spot
     🐥 - right letter but wrong spot
     ⬛️ - wrong letter & wrong spot
    
     Give it your best shot, and the farm will be yours!,
     Grandpa
    -----------------------------------------------------
   [0] Start game
   [1] Change your name`);

  // handle Cancel button
  if (promptLetter === null) {
    alert("You are exiting the game...");
    return;
  }
  // handle OK button
  if (promptLetter.trim() === "") {
    alert("No input. Try again!");
    return startGame();
  }

  if (promptLetter === "1") {
    return startGame();
  } else if (promptLetter !== "0") {
    alert("Invalid choice. Please try again.");
    return startGame();
  }
  playGame();
};
document.getElementById("startButton").addEventListener("click", startGame);
