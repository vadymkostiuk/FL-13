const login = prompt('Please enter your Login');
const user = 'User';
const admin = 'Admin';
const userPass = 'UserPass';
const adminPass = 'RootPass';
const maxLength = 4;
const minDayHour = 8;
const maxDayHour = 19;
const date = new Date().getHours();
if(login === null || login.length === 0 || !login.trim()) {
    alert('Canceled.');
} else if (login.length < maxLength){
    alert('I don\'t know any users having name length less than 4 symbols.');
} else if(login === user || login === admin) {
    const password = prompt('Please enter password');
    if(password === null || password.length === 0 || !password.trim()) {
        alert('Canceled.');
    } else if(login === user && password === userPass) {
        if (date >= minDayHour && date <= maxDayHour) {
            alert('Good day, dear User!');
        } else {
            alert('Good evening, dear User!');
        }
    } else if(login === admin && password === adminPass) {
        if (date >= minDayHour && date <= maxDayHour) {
            alert('Good day, dear Admin!');
        } else {
            alert('Good evening, dear Admin!');
        }
    } else {
        alert('Wrong password')
    }
} else {
    alert('I don’t know you');
}
