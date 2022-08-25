import express from 'express';
import cors from 'cors'

const server = express();
server.use(cors());

server.get('/sign-up', function (request, response){
    console.log('chegou aqui');
    response.send('sai daqui');
})

server.listen(5000)