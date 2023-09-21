const getUser = (req, res) => {
    res.send('User Controller');
}
const getKakashi = (req, res) => {
    res.send('Kakashi Controller');
}

module.exports = {
    getUser,
    getKakashi
}