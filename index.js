import express from 'express';
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());
const corpo = [];
let usereq;
let avatareq;
const tweetCorpo = [];
let tweetuser;
let tweet;

server.post('/sign-up', (req, res) =>{
    usereq = req.body.username;
    avatareq = req.body.avatar;
    const novoCorpo = {
        username: avatareq,
        avatar: avatareq
    };

    corpo.push(novoCorpo);
    res.send("OK");
  });

  server.post('/tweets', (req, res) =>{
    tweetuser = req.body.username;
    tweetreq = req.body.tweet;
    const novotweetCorpo = {
      username: tweetuser,
      tweet: tweet
    };

    tweetCorpo.push(novotweetCorpo);
    res.send("OK");
  });
  server.get('/tweets', (req, res) =>{
    tweetuser = req.body.username;
    tweetreq = req.body.tweet;
    const novotweetCorpo = {
      username: tweetuser,
      avatar: avatareq,
      tweet: tweetreq
    };

    tweetCorpo.push(novotweetCorpo);
    res.send(tweetCorpo);
  });


server.listen(5000, () => console.log('Listening on port 5000'));
