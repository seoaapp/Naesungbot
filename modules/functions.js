const translate = require('@vitalets/google-translate-api');
const filehandler = require('../filehandler');
const request = require('request');
const config = require('../botsetting.json');

let locale = 'en';

// reply 번역
function reply(msg, text) {
    if(locale === 'en') {
        msg.reply(text);
        return msg;
    } else {
        translate(text, {to: locale})
            .then(function (res) {
                msg.reply(res.text);
            })
            .catch(err => {
                console.error(err);
            });
        return msg;
    }
}

module.exports = {
    'hello': (msg, command) => {
        msg.channel.send("Hello! I'm Naesungbot!");
    },
};
