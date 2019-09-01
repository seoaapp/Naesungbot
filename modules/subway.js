const admin = require('../admin');
const blacklist = require('../blacklist');
const Discord = require('discord.js');
const config = require('../botsetting.json');
const client = require('../client').client;
const stringhandler = require('../stringhandler');
const request = require('request');

//beta 서비스입니다. 일단 규모가 적당한 부산광역시 대상.
module.exports = {
  'busan': (msg, command) => {
