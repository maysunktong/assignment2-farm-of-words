const WORD_LIST_FRUITS = [
  ["Fruits & Vegetables"],
  ["mango", "onion", "lemon", "olive", "apple", "peach"],
];
const WORD_LIST_ANIMALS = [
  ["Farm animals"],
  ["goose", "horse", "sheep", "snake", "mouse"],
];
const WORD_LIST_PRODUCTS = [
  ["Farm products"],
  ["wheat", "honey", "bread", "juice", "steak"],
];
const LETTER_REGEX = /^[a-z]+$/i;

const startGame = () => {
  // promptName starts
  let promptName = prompt(
    `🧙🏻‍♂️[Mayor]: Hi. My name is Thomas Morot, Mayor of Grönville. What is your name?`
  );

  if (promptName === null) {
    alert("You cancelled the process. Exiting game...");
    return;
  }

  if (promptName.trim() === "") {
    alert("No input. Try again!");
    return startGame();
  }

  if (!LETTER_REGEX.test(promptName)) {
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
    alert("You cancelled the process. Exiting game...");
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
    
     You have 5 attempts to guess the correct word.
     ✅ - right letter & right spot
     🐥 - right letter but wrong spot
     ⬛️ - wrong letter & wrong spot
    
     Give it your best shot, and the farm will be yours!,
     Grandpa
    -----------------------------------------------------
   [0] Start game
   [1] Change your name`);

  if (promptLetter === null) {
    alert("You cancelled the process. Exiting game...");
    return;
  }

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

  // promptCategory starts
  let promptCategory = prompt(
    `🚩:::Harvest Hints Arena:::🚩

    Please choose a category.
    [1] Vegetables & Fruits 🥕🍌
    [2] Animals 🐷🦆
    [3] Farm products 🚜🌾🥛
    `
  );

  if (promptCategory === null) {
    alert("You cancelled the process. Exiting game...");
    return;
  }

  if (promptCategory.trim() === "") {
    alert("No input. Try again!");
    return startGame();
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
      alert("You don't choose a valid category.");
      startGame();
  }

  const randomWord =
    selectedCategory[1][Math.floor(Math.random() * selectedCategory[1].length)];
  let isGuessedCorrectly = false;
  let leftAttempts = 5;
  let feedbackArray = [];
  const MAX_WORD_LENGTH = 5;

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

  while (leftAttempts > 0 && !isGuessedCorrectly) {
    let promptUserGuess = prompt(
      `Category: ${selectedCategory[0]}
      Guess the ${MAX_WORD_LENGTH}-letter word! 
      You have ${leftAttempts} attempts left.`
    ).toLowerCase();
    if (promptUserGuess === null || promptUserGuess.trim() === "") {
      alert("You cancelled the process. Exiting game...");
      return;
    }
    if (promptUserGuess.length != MAX_WORD_LENGTH) {
      alert(`Please enter a ${MAX_WORD_LENGTH}-letter word!`);
      return;
    }
    if (!LETTER_REGEX.test(promptUserGuess)) {
      alert("Your guess should include only letters!");
      return;
    }
    leftAttempts--;

    let feedbackResult = checkGuess(promptUserGuess);
    feedbackArray.push(
      `Your guess is ${promptUserGuess.toUpperCase()} - ${feedbackResult}`
    );

    if (promptUserGuess === randomWord) {
      alert(
        `Congratulations 👏 The correct word is ✨${randomWord}✨. You get the farm! 👴🏻🌳🎉`
      );
      isGuessedCorrectly = true;
    } else {
      let attemptSummary = feedbackArray.join("\n");
      alert(`Attempt Summary:\n${attemptSummary}`);
      if (leftAttempts === 0) {
        alert(
          `Game Over! The correct word was "${randomWord}". Better luck next time! 👴🏻`
        );
      }
    }
  }
  //
};
document.getElementById("startButton").addEventListener("click", startGame);
