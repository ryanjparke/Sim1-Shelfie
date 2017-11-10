const express = require('express')
        , bodyParser = require('body-parser')
        , cors = require('cors')


const app = express();


let users = [
    { id: 1, name: 'Joe'},
    { id: 2, name: 'Sarah'}
]

app.get('/api/users', function(req, res) {
    res.status(200).send(users);
})

app.get('/api/users/:id', function(req,res){
    const id = parseInt(req.params.id);
    const user = users.filter( person => {
        return person.id === id
    })
    if (user.length === 0) {
        return res.status(404).send('No user with that ID.');
    }
    res.status(200).send(user);
})



const port = 3030;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));