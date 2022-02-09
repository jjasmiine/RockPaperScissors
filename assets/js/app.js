// ()

//exceuting the main functions
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //match play
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })
        });

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //comparing player and computer hands
                    compareHands(this.textContent, computerChoice);

                    //update images - rock, paper and scissors
                    playerHand.src = `./assets/img/${this.textContent}.png`;
                    computerHand.src = `./assets/img/${computerChoice}.png`;
                }, 2000);

                //animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    //updating the score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    //function comparing computer and player hands
    const compareHands = (playerChoice, computerChoice) => {
        //updating text
        const winner = document.querySelector('.winner');

        //checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'Tie!'
            return;
        };

        //checking for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!'
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return;
            }
        }

        //checking for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!'
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return;
            }
        }

        //checking for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins!'
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player Wins!'
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //excecuting the inner functions
    startGame();
    playMatch();
};

//start the game funciton
game();