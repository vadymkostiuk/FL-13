const userText = prompt('Please write text');
const two = 2;
const result = userText.substr(Math.ceil(userText.length / two) - 1, two - userText.length % two);
if(userText.length === 0 || !userText.trim()) {
    alert('Invalid value')
} else {
    alert(`'${result}'`);
}

console.log(two - userText.length % two);
