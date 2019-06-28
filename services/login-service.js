const service = require('../services/user-service');
const { checkUsernameAndPassword, addNewUser, checkUsername, checkPassword } = require('../services/user-service');


const authorise = (username, password) => {

    let result = checkUsernameAndPassword(username, password);

    if (username === '' && password === '') {
        return {"message": "All fields are required."}
    } else if (username === '') {
        return {"message": "Username is required."}
    } else if (password === '') {
        return {"message": "Password is required."}
    } else {
        console.log(result);
    }
};

module.exports = {
    authorise,
};