const { User } = require('../models/user');

const addNewUser = (username, password) => new Promise((resolve, reject) => {
    const newUser = new User({
        username: username,
        password: password,
    });
    newUser.save((err, userAdded) => {
        if (err) {
            reject(err);
        } else {
            resolve(userAdded);
        }
    })
});

const checkUsernameAndPassword = (username, password) => {
    User.find({
        'username': username,
        'password': password
    },
    (err, loginFound) => {
        if (loginFound <= 0) {
            return {"message": 'Username or password is incorrect.' };
        } else {
            return loginFound;
        }
    })
}

const checkUsername = username => new Promise((resolve, reject) => {
    User.find({'username': username}, (err, nameFound) => {
        if (nameFound.length === 0) {
            reject(new Error('Wrong username.'));
            console.log('Wrong username.');
        } else {
            resolve(nameFound);
            console.log(username + ' found.');
        }
    })
});

const checkPassword = password => new Promise((resolve, reject) => {
    User.find({'password': password}, (err, passwordFound) => {
        if (passwordFound.length === 0) {
            reject(new Error('Wrong password.'));
            console.log('Wrong password.')
        } else {
            resolve(passwordFound);
            console.log('Password found.');
        }
    })
})

module.exports = { 
    checkUsernameAndPassword,
    addNewUser,
    checkUsername,
    checkPassword,
};