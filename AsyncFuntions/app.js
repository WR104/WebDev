const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials';
    if (!password === 'admin123') return 'WELCOME';
    throw 'Invalid Password'
}

login('Wuhu', 'admin123')
    .then(msg => {
        console.log("Logged in");
        console.log(msg);
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })



