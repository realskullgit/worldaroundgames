let balance = 1000;

const costPerSpin = 50;

const winAmount = 200;

const symbols = ['🍒', '🍋', '🍀', '💎', '🔔'];

const balanceDisplay = document.getElementById("balance");

const slotDisplay = document.getElementById("slot");

const resultMessage = document.getElementById("resultMessage");

const spinButton = document.getElementById("spinButton");

function updateBalanceDisplay() {

  balanceDisplay.textContent = balance;

}

function getRandomSymbol() {

  return symbols[Math.floor(Math.random() * symbols.length)];

}

function spinSlot() {

  if (balance < costPerSpin) {

    resultMessage.textContent = "❌ Not enough tokens!";

    return;

  }

  balance -= costPerSpin;

  const symbol1 = getRandomSymbol();

  const symbol2 = getRandomSymbol();

  const symbol3 = getRandomSymbol();

  slotDisplay.textContent = `${symbol1} ${symbol2} ${symbol3}`;

  if (symbol1 === symbol2 && symbol2 === symbol3) {

    balance += winAmount;

    resultMessage.textContent = `🎉 You won ${winAmount} tokens!`;

  } else {

    resultMessage.textContent = "😢 You lost. Try again!";

  }

  updateBalanceDisplay();

}

spinButton.addEventListener("click", spinSlot);