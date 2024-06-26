const maxPlayers = 6;

const allQuestions = [
    "What’s your dirtiest sexual fantasy?",
    "How many people have you slept with?",
    "Where’s the weirdest place you’ve had sex?",
    "What’s your favourite part of my body?",
    "Have you ever had anal sex?",
    "If you could choose what I was wearing right now, what would you choose?",
    "Where on your body is your favourite place to be touched?",
    "When was the last time you had a dirty dream?",
    "If you could have sex anywhere in the world, where would it be?",
    "When did you first have sex?",
    "What’s the best sex you’ve ever had?",
    "What’s your favourite position?",
    "Have you ever been caught having sex?",
    "Do you watch porn?",
    "What kind of porn do you watch?",
    "How often do you masturbate?",
    "Name a sex position you’d like to try",
    "Do you prefer to give or receive?",
    "What was your best orgasm ever?",
    "Have you ever been skinny dipping?",
    "Have you ever slept with someone you work with?",
    "If we were out for dinner and I said I wanted to have sex right now, what would you do?",
    "Have you ever sent nudes of yourself?",
    "If you could sleep with any celebrity, who would it be?",
    "Would you/have you had group sex?",
    "What’s the most sex you’ve had in a day?",
    "Are you loud or quiet during sex?",
    "Have you ever tried using food during foreplay?",
    "Have you ever made a sex tape?",
    "What’s the first thing that sexually attracts you to someone?",
    "Would you say you have any fetishes?",
    "When it comes to BDSM, how far have you gone/would go?",
    "What’s your favourite toy?",
    "Do you ever read erotic fiction?",
    "Have you joined the mile high club?",
    "Do you think you could take off my underwear with no hands?",
    "Would you say you’re kinky?",
    "Do you enjoy shower sex?",
    "Where’s the weirdest place you’ve ever masturbated?",
    "Do you like to be spanked?",
    "What was your most embarrassing sexual experience?",
    "Have you ever fantasised about someone else during sex?",
    "If I ever caught you masturbating, would you stop or would you finish?",
    "Have you ever had an inappropriate crush?",
    "Have you ever cried or fallen asleep during sex?",
    "Do you prefer eye contact or not during sex?",
    "Do you like to kiss during sex?",
    "Do you get tired after sex?",
    "How many positions do you think you’ve tried?",
    "What’s the longest you’ve ever gone without sex?",
    "How high is your sex drive?",
    "What’s a surefire way to turn you on?",
    "Sex with lights on or lights off?",
    "Do you like dirty talk?",
    "Have you had sex in a car?",
    "Do you prefer to take control or be submissive?",
    "Do you prefer one night stands or longer-term sexual partners?",
    "Do you prefer to be on top or bottom?",
    "What would you like to do more of in bed?",
    "What’s your favourite time of day to have sex?",
    "Rough or romantic?",
    "Quickie or marathon session?",
    "What’s your favourite part of foreplay?",
    "Would you dress up for me in bed?",
    "What’s your favourite place to be kissed?",
    "Do you like sexting?",
    "What’s the best thing about our sex life?",
    "What’s the shortest time it’s ever taken for you to have an orgasm? And the longest?",
    "How would you make me have an orgasm?"
];

const allChallenges = [
    "Flash one of your private parts (dick, boobs, ass or pussy) to your partner.",
    "Your partner has to keep their hand inside your underwear for a minute.",
    "You must give an handjob to your partner for a minute.",
    "You must give head to your partner for a minute.",
    "You must let your partner kiss you anywhere he/she wants for 30 seconds",
    "Take a piece of clothing off.",
    "Take a piece of clothing off.",
    "Take a piece of clothing off.",
    "Take a piece of clothing off.",
    "Take a piece of clothing off.",
    "Let your partner take a piece of your clothing of his choice.",
    "Let your partner take a piece of your clothing of his choice.",
    "Let your partner take a piece of your clothing of his choice.",
    "Let your partner take a piece of your clothing of his choice.",
    "Let your partner take a piece of your clothing of his choice.",
    "Share a secret that you haven’t told your partner yet.",
    "You must let your partner give you an hickey anywhere he/she wants.",
    "You must let your partner touch you wherever he/she wants for 30 seconds.",
    "You must touch yourself (masturbate) for a minute while your partner watches.",
    "You must let your partner lick you wherever he/shey wants.",
    "You must strip all your clothes off, slowly and sensually, and then put them back on.",
    "Let your partner take control of you and your actions for a minute.",
    "Try to make your partner finish within a set time between you, if you fail to, you must complete a dare of their choice.",
    "VOUCHER OF HAPPINESS! Next time you make love, your partner gets to choose where the male finishes.",
    "Switch sexual roles for 3 minutes and make out.",
    "Record whatever the next challenge is."
];

let currentPlayer = 1;
let playerData = {};
let numPlayers = 2;

function initializePlayers(numPlayers) {
    for (let i = 1; i <= numPlayers; i++) {
        playerData[i] = resetPlayer(true);
        createPlayerElements(i);
    }
}

function createPlayerElements(player) {
    const scoreboard = document.createElement('div');
    scoreboard.className = 'scoreboard';
    scoreboard.id = `player${player}-scoreboard`;
    scoreboard.innerHTML = `
        <h3>Player ${player}</h3>
        <p>Points: <span id="player${player}-points">0</span></p>
        <p>Bullets left: <span id="player${player}-bullets">6</span></p>
    `;

    if (player % 2 === 0) {
        document.getElementById('scoreboards-right').appendChild(scoreboard);
    } else {
        document.getElementById('scoreboards-left').appendChild(scoreboard);
    }

    const playerArea = document.createElement('div');
    playerArea.className = 'player-area';
    playerArea.id = `player${player}`;
    playerArea.innerHTML = `
        <h2>Player ${player}</h2>
        <div id="player${player}-output">Waiting to play...</div>
    `;
    document.getElementById('game-container').appendChild(playerArea);
}

function resetPlayer(resetPoints = false) {
    return {
        items: resetPlayerItems(),
        points: resetPoints ? 0 : (playerData[currentPlayer]?.points || 0),
        alive: true
    };
}

function resetPlayerItems() {
    let selectedQuestions = shuffle(allQuestions).slice(0, 5);
    let selectedChallenge = shuffle(allChallenges).slice(0, 1);
    return selectedQuestions.concat(selectedChallenge);
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function updateDisplay(player) {
    const pointsDisplay = document.getElementById(`player${player}-points`);
    const bulletsDisplay = document.getElementById(`player${player}-bullets`);
    pointsDisplay.textContent = playerData[player].points;
    bulletsDisplay.textContent = playerData[player].items.length;
}

function updateTurnDisplay(message) {
    const turnDisplay = document.getElementById('turn-display');
    turnDisplay.textContent = message;
}

function getItemDrawnMessage(player, itemDrawn) {
    if (allChallenges.includes(itemDrawn)) {
        document.getElementById('gunshotSound').play();
        return `Player ${player} draws a Challenge: ${itemDrawn} (Player loses)`;
    } else {
        document.getElementById('emptyshotSound').play();
        return `Player ${player} draws: ${itemDrawn} (still alive)`;
    }
}

function playRound(player) {
    const playerDiv = document.getElementById(`player${player}`);
    const otherPlayer = currentPlayer === 1 ? numPlayers : currentPlayer - 1;
    const outputDiv = document.getElementById(`player${player}-output`);
    const drawButton = document.getElementById('draw-button');
    const nextRoundButton = document.getElementById('next-round-button');

    if (nextRoundButton.style.display !== 'none') {
        return;
    }

    playerDiv.classList.add('active');
    document.getElementById(`player${otherPlayer}`).classList.remove('active');

    const drawIndex = Math.floor(Math.random() * playerData[player].items.length);
    const itemDrawn = playerData[player].items.splice(drawIndex, 1)[0];
    updateDisplay(player);

    outputDiv.innerHTML = getItemDrawnMessage(player, itemDrawn);

    if (allChallenges.includes(itemDrawn)) {
        playerData[otherPlayer].points++;
        updateDisplay(otherPlayer);
        updateTurnDisplay(`End of round: Player ${player} triggered a challenge.`);
        drawButton.style.display = 'none';
        nextRoundButton.style.display = 'inline';
    } else {
        currentPlayer = currentPlayer === numPlayers ? 1 : currentPlayer + 1;
        updateTurnDisplay(`Player ${currentPlayer}'s turn`);
    }
}

function nextRound() {
    for (let i = 1; i <= numPlayers; i++) {
        playerData[i].items = resetPlayerItems();
        updateDisplay(i);
    }

    const drawButton = document.getElementById('draw-button');
    const nextRoundButton = document.getElementById('next-round-button');
    drawButton.style.display = 'inline';
    nextRoundButton.style.display = 'none';

    currentPlayer = 1;
    updateTurnDisplay(`Player ${currentPlayer}'s turn`);
    for (let i = 1; i <= numPlayers; i++) {
        document.getElementById(`player${i}`).classList.remove('active');
    }
}

function endGame() {
    let highestPoints = -1;
    let lowestPoints = Infinity;
    let winner = null;
    let loser = null;

    for (let i = 1; i <= numPlayers; i++) {
        if (playerData[i].points > highestPoints) {
            highestPoints = playerData[i].points;
            winner = i;
        }
        if (playerData[i].points < lowestPoints) {
            lowestPoints = playerData[i].points;
            loser = i;
        }
    }

    alert(`Game Over!\nWinner: Player ${winner} with ${highestPoints} points.\nLoser: Player ${loser} with ${lowestPoints} points.`);
}

function resetGame() {
    for (let i = 1; i <= numPlayers; i++) {
        playerData[i] = resetPlayer(true);
        updateDisplay(i);
    }
    const drawButton = document.getElementById('draw-button');
    const nextRoundButton = document.getElementById('next-round-button');
    drawButton.style.display = 'inline';
    nextRoundButton.style.display = 'none';

    currentPlayer = 1;
    updateTurnDisplay(`Player ${currentPlayer}'s turn`);
    for (let i = 1; i <= numPlayers; i++) {
        document.getElementById(`player${i}`).classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    numPlayers = parseInt(prompt("Enter the number of players (2-6):"));
    if (numPlayers < 2 || numPlayers > 6) {
        alert("Please enter a number between 2 and 6.");
        location.reload();
    } else {
        initializePlayers(numPlayers);
        for (let i = 1; i <= numPlayers; i++) {
            updateDisplay(i);
        }
        updateTurnDisplay(`Player ${currentPlayer}'s turn`);
    }
});


function toggleCreatorsPopup() {
    const popup = document.getElementById('creators-popup');
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
}
