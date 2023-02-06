// Text Adventure Game
const start = `Welcome to the Elder Scrolls Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You are trying to escape Helgen without the dragon that is attacking killing you. Should you...
1. Run into the nearby tower where a soldier is calling to you from
OR
2. Run down the open road with a few other people to try and escape
${enter}`;

const gameOver1 = `You get attacked by the dragon and die. ${gameOver}`;

const q2 = `When you go up the tower, the soldier tells you to jump into the house next to the tower then run. Should you...
1. Listen to him and jump to escape
OR
2. Stay in the tower
${enter}`;

const gameOver2 = `The tower got attacked and you got covered in rubble. ${gameOver}`;

const q3 = `You successfully jump and run until you reach dead end. Should you...
1. Go into the barracks that is nearby
OR
2. Run back the way you came
${enter}`;

const gameOver3 = `The dragon sees you and attacks. ${gameOver}`;

const q4 = `You make it inside the barracks and see that it connects to a tunnel. Should you...
1. Stay in the barracks and hope you don't get attacked
OR
2. Run down the tunnel and hope its not dangerous
${enter}`;

const gameOver4 = `The barracks collapses and you get buried in rubble. ${gameOver}`;

const q5 = `You make it down the tunnel, through a cave, and find that it leads outside. You hear the dragon roar in the distance. Should you...
1. Run out of the cave as fast as you can and get away
OR
2. Stay in the cave a little longer to observe outside before you run
${enter}`;

const gameOver5 = `You ran out and the dragon was right above you! It shot flames at you and you burned alive. ${gameOver}`;

const win = `You see the dragon fly overhead and off into the distance, then you run. You escaped Helgen!`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONALS STATEMENTS
// 1ST Conditional Statements
// NOTE: Prompts return the value entered in as as String. That is why double equals is used instead of triple equals (AKA Strict Equals)
if (userInput == 1){
  userInput = prompt(q2);

  // 2ND Conditional Statement
  if (userInput == 1){
    userInput = prompt(q3);

    // 3RD Conditional Statement
    if (userInput == 1){
      userInput = prompt(q4);

      // 4TH Conditional Statement
      if (userInput == 2){
        userInput = prompt(q5);

        // 5TH Conditional Statement
        if (userInput == 2){
          alert(win);
        } else {
          alert(gameOver5);
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}