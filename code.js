// Variables to track wins, losses, and the number of turns
let wins = 0;
let losses = 0;

// Function to flip the coin
function flipCoin() {
    console.log("flipCoin function triggered"); // Debugging log

    // Generate a random number between 0 and 1
    const randomValue = Math.random();
    // Use the random number to decide Heads (1) or Tails (0)
    const result = randomValue < 0.4 ? 1 : 0; // 40% Heads, 60% Tails
    console.log("Random value:", randomValue, "Result:", result); // Debugging log

    // Get the coin image element
    const coinImage = document.getElementById("coinImage");

    // Prepare the sound effects
    const winSound = new Audio("sounds/winSound.wav");
    const loseSound = new Audio("sounds/loseSound.wav");

    // Update the game based on the result
    if (result === 0) {
        coinImage.src = "TalesCoin.png"; // Show the Tails image
        loseSound.play().catch((err) => console.error("Lose sound failed:", err));
        document.getElementById("gameOutput").innerHTML = "Tails, You Lose!";
        losses++; // Increment the losses counter
    } else {
        coinImage.src = "HeadsCoin.png"; // Show the Heads image
        winSound.play().catch((err) => console.error("Win sound failed:", err));
        document.getElementById("gameOutput").innerHTML = "Heads, You Win!";
        wins++; // Increment the wins counter
    }

    // Update the win/loss counters on the page
    document.getElementById("winCount").innerHTML = `Wins: ${wins}`;
    document.getElementById("lossCount").innerHTML = `Losses: ${losses}`;

    // Check if 3 turns have been played
    if (wins + losses === 3) {
        // Determine the overall winner
        const finalMessage = wins > losses ? "You won best 2 out of 3!" : "You lost best 2 out of 3!";
        document.getElementById("gameOutput").innerHTML = finalMessage; // Display the final result

        // Reset the counters for a new round
        wins = 0;
        losses = 0;
        document.getElementById("winCount").innerHTML = "Wins: 0";
        document.getElementById("lossCount").innerHTML = "Losses: 0";
    }
}
