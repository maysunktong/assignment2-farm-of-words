
const MAX_WORD_LENGTH = 5;
const WORD_LIST_FRUITS = ["mango", "onion", "lemon", "olive", "apple", "peach"];
const WORD_LIST_ANIMALS = ["goose", "horse", "sheep", "snake", "mouse"];
const WORD_LIST_PRODUCTS = ["wheat", "honey", "bread", "juice", "steak"];
const LETTER_REGEX = /^[a-z]+$/i;

const startGame = () => {
  // promptName starts
  let promptName = prompt(
    `🧙🏻‍♂️[Mayor]: Hi. My name is Thomas Morot, Mayor of Grönville. What is your name?`
  );

  if (promptName === null || promptName.trim() === "") {
    alert("You cancelled the process. Exiting game.");
    return;
  }

  if (!LETTER_REGEX.test(promptName)) {
    alert("Your name should only contain letters. Please try again.");
    return;
  }

  // promptMayor starts
  let promptMayor = prompt(`
    🧙🏻‍♂️[Mayor]: Hi ${promptName}! Your grandfather left you his little farm. Also, he asked me to give you this letter.
    💌
    -----------------------------------------------
    [0] Read letter
    [1] Change your name`);

  if (promptMayor === null || promptMayor.trim() === "") {
    alert("You cancelled the process. Exiting game.");
    return;
  }

  if (promptMayor === "1") {
    startGame(); // Restart to change the name
    return;
  } else if (promptMayor !== "0") {
    alert("Invalid choice. Please try again.");
    startGame();
    return;
  }

  // promptLetter starts
  let promptLetter = prompt(`
    👴🏻[grandpa]: My dear ${promptName},                  
    This farm is a gift to you, my beloved grandchild. 
     But before you earn the ownership of the place, I want to test your knowledge first through a word guessing game.         
    
     You have 5 attempts to guess the correct word.
     ✅ - right letter & right spot
     🐥 - right letter but wrong spot
     ⬛️ - wrong letter & wrong spot
    
     Give it your best shot, and the farm will be yours!,
     Grandpa
    -----------------------------------------------------
   [0] Start game
   [1] Change your name`);

  if (promptLetter === null || promptLetter.trim() === "") {
    alert("You cancelled the process. Exiting game.");
    return;
  }

  if (promptLetter === "1") {
    startGame(); // Restart to change the name
    return;
  } else if (promptLetter !== "0") {
    alert("Invalid choice. Please try again.");
    startGame();
    return;
  }

  // promptCategory starts
  let promptCategory = prompt(
    `🚩:::Harvest Hints Arena:::🚩

    Please choose a category.
    [1] Vegetables & Fruits 🥕🍌
    [2] Animals 🐷🦆
    [3] Farm products 🚜🌾🥛
    `
  );

  if (promptCategory === null || promptCategory.trim() === "") {
    alert("You cancelled the process. Exiting game.");
    return;
  }

  let selectedCategory;
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
      alert("Invalid choice. Please try again.");
      break;
  }

  const randomWord =
    selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
  let isGuessedCorrectly = false;
  let maxAttempts = 5;
  let attempts = [];

  const checkGuess = (guess) => {
    let feedback = "";
    for (let i = 0; i < MAX_WORD_LENGTH; i++) {
      if (guess[i] === randomWord[i]) {
        feedback += "✅";
      } else if (randomWord[i].includes(guess[i])) {
        feedback += "🐥";
      } else {
        feedback += "⬛️";
      }
    }
    return feedback;
  };

  while (MAX_ATTEMPTS > 0 && !isGuessedCorrectly){
    let promptUserGuess = prompt(`Guess the ${MAX_WORD_LENGTH}-letter word! You have ${maxAttempts} attempts left.`)
  }
};
document.getElementById("startButton").addEventListener("click", startGame);
