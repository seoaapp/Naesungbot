const filehandler = require('../filehandler');
const translate = require('@vitalets/google-translate-api');
const stringhandler = require('../stringhandler');

// send 번역
// 응용 TODO
function send(msg, text) {
    let locale = stringhandler.readFile('lang.txt');
    translateAndSendMessage(msg, locale, text);
}

function translateAndSendMessage(msg, destLocale, text) {
    translate(text, {to: destLocale})
        .then(function (res) {
            msg.channel.send(res.text);
        })
        .catch(err => {
            console.error(err);
        });
    return msg;
}

module.exports = {
    'translate': (msg, command) => {
        let destLocale = stringhandler.argsParse('translate', command)[0];
        let originalText = command.substring(command.indexOf(destLocale) + destLocale.length, command.length);
        translateAndSendMessage(msg, destLocale, originalText);
    },
    'language': (msg, command) => {
        let newlocale = stringhandler.argsParse('language', command)[0];
        console.log(newlocale);
        if (typeof newlocale === "undefined") {
            send(msg, 'You did not choose an language!');
        } else {
            filehandler.saveFile('lang.txt', newlocale);
            send(msg, 'Changed Language!');
        }
    },
};
