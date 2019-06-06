const filehandler = require('../filehandler');

// send 번역
// 응용 TODO
function send(msg, text) {
    if(locale === 'en') {
        msg.channel.send(text);
        return msg;
    } else {
        translate(text, {to: locale})
            .then(function (res) {
                msg.channel.send(res.text);
            })
            .catch(err => {
                console.error(err);
            });
        return msg;
    }
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
        let destLocale = args[1];
        let originalText = command.substring(command.indexOf(destLocale) + destLocale.length, command.length);
        translateAndSendMessage(msg, destLocale, originalText);
    },
    'language': (msg, command) => {
        let newlocale = stringhandler.argsParse('language', command)[0];
        console.log(locale);
        if (typeof newlocale === "undefined") {
            reply(msg, 'You did not choose an language!');
        } else {
            locale = newlocale;
            filehandler.saveFile('lang.txt', locale);
            reply(msg, 'Changed Language!');
        }
    },
};