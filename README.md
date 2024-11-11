> [!TIP]
> Turn on **'Inspect'** to see `Key answer`

![CleanShot 2567-11-07 at 22 23 01@2x](https://github.com/user-attachments/assets/ccff3814-92d6-4e68-b62e-ae0c255d9814)
Harvest Hints is a Wordle-inspired game where player selects a farm-related category and try to guess the correct word.

## Game flow
> Harvest Hints is handled by two main functions: `startGame()` and `playGame()`
> <br> `startGame()` - handle name input and game options leading to main gameplay or `playGame()`
1. Game initialization
- User inputs name
- User chooses options [0] & [1] to go further to category prompt(`playGame()`) or change name (restart `startGame()`)
2. Main Gameplay
- User's max attempts is set/reset
- User chooses a category in a prompt
- User guesses a word based on the category chosen
- Each guess is evaluated. Left attempt decreases.
- Evaluate a game: win or lose
- On game ending modal, user can choose to restart or exit game.


## Things I have learnt from this project
- `continue;` can be used only within loops. It is useful for staying on a remaining progress.
- `CANCEL` and `OK` in `prompt("")` is handled by `prompt === null` and `promptCategory.trim() === ""` respectively
- `CANCEL` and `OK` in `confirm("")` is easy to handle by using booleans in an if-else statement, and no need to trim string since it does not require an input
- To be able to restart a game, separate main gameplay out so it is easy to manage and call
- Writing a simple RegExp to evaluate if the input is letter-based.
- function `checkGuess()` for checking a right letter but wrong spot turned out to be more challenging than I thought. It did not work simply by using `.includes("")`. 
- The function works by labelling all letters in array as false and unused. Then, proceed to check right letter ✅ in the first loop. The last loop checks for the right letter but in wrong position 🐥. It does not check on wrong letter in wrong position since we filled them at the start of function.

**Solution** 
```javascript
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
```
