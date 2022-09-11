const express = require('express')
const cors =require('cors')
const twilio = require('twilio')

//twilio requirements
const accountSID = '_MY_ACCOUNT_ID_';
const authToken = '_MY_AUTH_TOKEN';

const client = (accountSID, authToken);

const app = express();

app.use(cors());

app.get('/', (req, res) => [
    res.send('Welcome to the Express Server')
])

//twilio text
//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+16693364472' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, ()=> console.log("Listening to the server"))

