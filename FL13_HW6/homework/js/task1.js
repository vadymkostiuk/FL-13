const maxVal = 100;
const round = 2;
const check = +parseFloat(prompt('Please enter check number', '0')).toFixed(round);
const percent = +parseFloat(prompt('Please enter tip percentage', '0')).toFixed(round);
const amount = +(check * percent / maxVal).toFixed(round);
const sum = +(check + amount).toFixed(round);
if(percent <= maxVal && percent > 0 && check > 0) {
    alert(`Check number: ${check}
Tip: ${percent}%
Tip amount: ${amount}
Total sum to pay:  ${sum}`);
} else {
    alert('Invalid input data')
}

