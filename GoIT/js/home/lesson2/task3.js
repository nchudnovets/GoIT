var userLogin = prompt('Your login:');

if (userLogin === null){
    alert('Canceled');
}
else if (userLogin !== 'admin'){
    alert('Access denied');
}
else {
    var userPassword = prompt('Your password:');
    if(userPassword === 'passw0rd'){
        alert('Welcome home!');
    }
    else {
        alert('Wrong password');
    };
};