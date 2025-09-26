let balance = 1000;
const costPerSpin = 50;
const balanceDisplay = document.getElementById("balance");
const slotDisplay = document.getElementById("slot");
const resultMessage = document.getElementById("resultMessage");
const spinButton = document.getElementById("spinButton");
const riskSelector = document.getElementById("riskMode");

const symbols = ['🍒', '🍋', '🍀', '💎', '🔔'];

// Risk configurations
const riskConfigs = {
  low:    { winChance: 0.6, reward: 75 },
  medium: { winChance: 0.3, reward: 200 },
  high:   { winChance: 0.1, reward: 1000 }
};

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

  const mode = riskSelector.value;
  const { winChance, reward } = riskConfigs[mode];

  balance -= costPerSpin;

  const symbol1 = getRandomSymbol();
  const symbol2 = getRandomSymbol();
  const symbol3 = getRandomSymbol();
  slotDisplay.textContent = `${symbol1} ${symbol2} ${symbol3}`;

  const didWin = Math.random() < winChance;

  if (didWin) {
    balance += reward;
    resultMessage.textContent = `🎉 You won ${reward} tokens!`;
  } else {
    resultMessage.textContent = "😢 You lost. Try again!";
  }

  updateBalanceDisplay();
}

spinButton.addEventListener("click", spinSlot);
