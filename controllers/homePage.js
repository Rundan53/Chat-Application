exports.sendMainPage = ( (req, res)=> {
    res.sendFile('index.html', {root: 'views'})
});