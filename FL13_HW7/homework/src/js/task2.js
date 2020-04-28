const playGame = confirm('Do you want to play a game?');

const maxAttempt = 3;
const reducingWin = 2;
const maxIteration = 5;
const firstPrize = 100;
const maxRandIter = 6;
let maxRand = 6;
let maxNumber = 5;
let totalPrize = 0;

let game = (nextPrize = firstPrize) => {
    const random = +Math.round(Math.random() * maxRand);

    for (let i = maxAttempt; i >= 1; i--) {
        const userRandom = parseInt(prompt(`
Choose a roulette pocket number from 0 to ${maxNumber}
Attempts left: ${i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${nextPrize}$`));

        if (userRandom === random) {
            totalPrize += nextPrize;

            let playCont = confirm(`Congratulation, you won! Your prize is: ${nextPrize}$. Do you want to continue?`);

            if(playCont === true) {
                maxRand += maxIteration;
                maxNumber += maxIteration;

                if (i === maxAttempt) {
                    nextPrize *= reducingWin;
                } else if (i === reducingWin) {
                    nextPrize *= reducingWin * reducingWin;
                } else {
                    nextPrize *= reducingWin * reducingWin * reducingWin;
                }

                game(nextPrize);

            } else {
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);

                let playAgain = confirm('Do you want to play again?');

                if(playAgain === true) {
                    maxRand = maxRandIter;
                    maxNumber = maxIteration;
                    game();
                }
            }

            break

        } else if( i === 1 ) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);

            let playAgain = confirm('Do you want to play again?');

            if(playAgain === true) {
                maxRand = maxRandIter;
                maxNumber = maxIteration;
                game();
            }

        } else {
            nextPrize = nextPrize / reducingWin;
        }

    }

};

if(playGame === true) {
    game();
} else {
    alert('You did not become a billionaire, but can.');
}