import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const user = {
    username: '',
    avatar: ''
};
const tweets = [];

app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body;
    user.username = username;
    user.avatar = avatar;
    res.send("OK");
})

app.post("/tweets", (req, res) => {

    const username = req.headers.user;
    const { tweet } = req.body;
    tweets.push({
        username: username,
        avatar: user.avatar,
        tweet: tweet
    });
    res.sendStatus(201);
})

app.get("/tweets", (req, res) => {
    const lastTweets = [];
    if (tweets.length > 0) {
        for (let i = tweets.length - 1; i >= (tweets.length - 10) && i > 0; i--) {
            lastTweets.push(tweets[i]);
        }
    }
    console.log(tweets.length);
    res.send(lastTweets);
})






app.listen(5000, () => console.log('Listening on port 5000'));